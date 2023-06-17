<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   MercadopagoDepositService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use App\Helpers\Utils;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\Deposit;
use Packages\Payments\Repositories\DepositRepository;
use Packages\Payments\Services\Api\MercadopagoApi;


class MercadopagoDepositService extends DepositService implements CanReceiveWebhook, CanReceiveRedirect
{
    protected function makeApi()
    {
        return new MercadopagoApi();
    }

    protected function getPaymentCurrencyRate(): float
    {
        return $this->getMethodRate();
    }

    public function create(): Deposit
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $paymentAmount = $this->calculatePaymentAmount($this->data->amount);
        $externalId = Utils::generateRandomString(10);

        $payment = $this->api->createPayment(
            $paymentAmount,
            $this->getMethodCurrency(),
            $this->getDescription(),
            $this->data->user()->name,
            $this->data->user()->email,
            $this->getWebhookUrl(),
            $this->getReturnUrl(),
            $this->getCancelUrl(),
            $externalId,
            $this->getMethod()->payment_method_parameters->excluded_payment_types ?? []
        );

        if (!$payment->get('id')) {
            throw new Exception($payment->get('error')->message ?? __('There was a problem creating a new payment.'));
        }

        $this->setRedirectUrl($payment->get('redirect_url'));

        return DepositRepository::create([
            'account' => $this->data->user()->account,
            'method' => $this->method,
            'amount' => $this->data->amount,
            'payment_amount' => $paymentAmount,
            'payment_currency' => $this->getMethodCurrency(),
            'external_id' => $externalId,
            'response' => [$payment->toArray()],
        ]);
    }

    public function complete(): RedirectResponse
    {
        if ($this->data->query('collection_status') == 'approved') {
            if ($deposit = Deposit::where('external_id', $this->data->query('external_reference'))->created()->first()) {
                if($this->paymentIsCompleted($this->api->fetchPayment($this->data->query('payment_id')), $deposit)) {
                    DepositRepository::complete($deposit);
                }
            }
        }

        return redirect(sprintf('user/account/deposits?status=%s', $this->data->query('status') == 'approved' ? 'complete' : 'pending'));
    }

    public function cancel(): RedirectResponse
    {
        if ($deposit = Deposit::where('external_id', $this->data->query('external_reference'))->created()->first()) {
            DepositRepository::cancel($deposit);
        }

        return redirect('user/account/deposits?status=cancel');
    }

    public function processWebhook(): bool
    {
        if (!$this->data instanceof Request) {
            return FALSE;
        }

        if ($this->data->type == 'payment') {
            $payment = $this->api->fetchPayment(data_get($this->data, 'data.id'));
            $externalId = $payment->get('external_reference');
            if ($externalId && ($deposit = Deposit::where('external_id', $externalId)->created()->first())) {
                if ($this->paymentIsCompleted($payment, $deposit)) {
                    DepositRepository::complete($deposit);
                }
            }
        }

        return TRUE;
    }

    public function httpSuccess(): Response
    {
        return response()->make('OK', 200);
    }

    public function httpError(): Response
    {
        return response()->make('ERROR', 400);
    }

    protected function paymentIsCompleted(Collection $payment, Deposit $deposit): bool
    {
        $error = NULL;

        if ($payment->get('external_reference') != $deposit->external_id) {
            $error = sprintf('External ID does not match: %s != %s', $payment->get('external_reference'), $deposit->external_id);
        } elseif ($payment->get('transaction_amount') != $deposit->payment_amount) {
            $error = sprintf('Payment amount does not match: %s != %s', $payment->get('transaction_amount'), $deposit->payment_amount);
        } elseif ($payment->get('currency_id') != $deposit->payment_currency) {
            $error = sprintf('Payment currency does not match: %s != %s', $payment->get('currency_id'), $deposit->payment_currency);
        } elseif ($payment->get('status') != 'approved') {
            $error = sprintf('Payment is not finished: %s != %s', $payment->get('status'), 'approved');
        }

        if ($error) {
            Log::error($error);
            return FALSE;
        }

        return TRUE;
    }
}

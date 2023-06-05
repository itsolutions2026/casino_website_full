<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   EasywireDepositService.php
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


class EasywireDepositService extends DepositService implements CanFetchTransaction, CanReceiveRedirect, CanReceiveWebhook
{
    use EasywireServiceFunctions;

    public function create(): Deposit
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $paymentAmount = $this->calculatePaymentAmount($this->data->amount);
        $externalId = Utils::generateRandomString(10);

        $payment = $this->api->createPayment(
            $this->data->parameters['method'],
            $paymentAmount,
            $this->getMethodCurrency(),
            $externalId,
            $this->getWebhookUrl(),
            $this->getReturnUrl(),
            $this->getCancelUrl()
        );

        if (!$payment->get('key')) {
            throw new Exception(__('There was a problem creating a new payment.'));
        }

        $this->setRedirectUrl($payment->get('redirect_url'));

        return DepositRepository::create([
            'account'           => $this->data->user()->account,
            'method'            => $this->method,
            'amount'            => $this->data->amount,
            'payment_amount'    => $paymentAmount,
            'payment_currency'  => $this->getMethodCurrency(),
            'external_id'       => $externalId,
            'response'          => [$payment->toArray()],
        ]);
    }

    public function fetchTransaction(string $id): Collection
    {
        return $this->api->fetchPayment($id);
    }

    public function processWebhook(): bool
    {
        if (!$this->data instanceof Request) {
            return FALSE;
        }

        $deposit = Deposit::where('external_id', $this->data->merchant_reference)->first();

        if (!$deposit) {
            return FALSE;
        }

        if ($deposit->is_created) {
            $deposit->update(['response' => array_merge($deposit->response, [$this->data->all()])]);
            $transactionId = $this->data->transaction_id ?? $this->data->callpay_transaction_id;
            $payment = $this->fetchTransaction($transactionId);

            if (!$payment->has(['status', 'successful', 'amount', 'currency'])) {
                Log::error(sprintf('Payment %s can not be fetched', $transactionId));
                return FALSE;
            } elseif ($payment->get('amount') != $this->calculatePaymentAmount($deposit->amount)) {
                Log::error(sprintf('Payment amount %.2f does not match deposit amount %.2f', $payment->get('amount'), $this->calculatePaymentAmount($deposit->amount)));
                return FALSE;
            } elseif ($payment->get('currency') != $deposit->payment_currency) {
                Log::error(sprintf('Payment currency %s does not match deposit currency %s', $payment->get('currency'), $deposit->payment_currency));
                return FALSE;
            }

            if ($payment->get('successful') == 1 && $payment->get('status') == 'complete') {
                DepositRepository::complete($deposit);
            } else {
                DepositRepository::cancel($deposit);
            }
        }

        return TRUE;
    }

    public function complete(): RedirectResponse
    {
        return $this->processWebhook()
            ? redirect('user/account/deposits?status=complete')
            : redirect('user/account/deposits?status=cancel');
    }

    public function cancel(): RedirectResponse
    {
        if ($deposit = Deposit::where('external_id', $this->data->merchant_reference)->created()->first()) {
            DepositRepository::cancel($deposit);
        }

        return redirect('user/account/deposits?status=cancel');
    }

    public function httpSuccess(): Response
    {
        return response()->make('SUCCESS', 200);
    }

    public function httpError(): Response
    {
        return response()->make('ERROR', 400);
    }
}

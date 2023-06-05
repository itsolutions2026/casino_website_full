<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SmartfastpayWithdrawalService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use App\Helpers\Utils;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\Withdrawal;
use Packages\Payments\Repositories\WithdrawalRepository;

class SmartfastpayWithdrawalService extends WithdrawalService implements CanFetchTransaction, CanSendTransaction, CanReceiveWebhook
{
    use SmartfastpayServiceFunctions;

    public function create(): Withdrawal
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        return WithdrawalRepository::create([
            'account'           => $this->data->user()->account,
            'method'            => $this->method,
            'amount'            => $this->data->amount,
            'payment_amount'    => $this->calculatePaymentAmount($this->data->amount),
            'payment_currency'  => $this->getMethodCurrency(),
            'parameters'        => $this->data->parameters,
        ]);
    }

    public function fetchTransaction(string $id): Collection
    {
        return $this->api->fetchPayout($id);
    }

    public function send(): void
    {
        if (!$this->data instanceof Withdrawal) {
            throw new \Exception(sprintf('Data parameter should be an instance of %s', Withdrawal::class));
        }

        $withdrawal = $this->data;

        $paymentMethodParams = [];
        if ($this->getMethod()->paymentMethod->code == 'smartfastpay_bank') {
            $paymentMethodParams = ['bank' => collect($withdrawal->parameters)->only('name', 'code', 'agency', 'account', 'account_operation')->toArray()];
        } elseif ($this->getMethod()->paymentMethod->code == 'smartfastpay_pix') {
            $paymentMethodParams = ['pix' => collect($withdrawal->parameters)->only('key')->toArray()];
        }

        $payout = $this->api->createPayout(
            $paymentMethodParams,
            $withdrawal->parameters->cpf,  
            $withdrawal->payment_amount,
            $withdrawal->payment_currency,
            $withdrawal->account->user->id,
            $withdrawal->account->user->name,
            $withdrawal->account->user->email,
            Utils::generateRandomString(10),
            $this->getWebhookUrl()
        );

        $withdrawal->update(['response' => array_merge($withdrawal->response ?: [], $payout->toArray())]);

        if ($payout->has('id')) {
            $withdrawal->payment_amount = $payout->get('values')->total;
            $withdrawal->external_id = $payout->get('id');
            $withdrawal->is_pending = TRUE;
            $withdrawal->save();
        } else {
            Log::error('There was a problem creating a new payout.');
            WithdrawalRepository::cancel($withdrawal);
        }
    }

    public function processWebhook(): bool
    {
        if (!$this->data instanceof Request) {
            return FALSE;
        }

        try {
            $request = json_decode($this->data->getContent());
        } catch (\Exception $e) {
            Log::error(sprintf('Error when parsing JSON: %s %s', json_last_error(), json_last_error_msg()));
            return FALSE;
        }

        $withdrawal = Withdrawal::where('external_id', $request->data[0]->id ?? '-')->first();

        if (!$withdrawal) {
            Log::error(sprintf('Withdrawal %s not found', $request->data[0]->id ?? '-'));
            return FALSE;
        }

        $withdrawal->update(['response' => array_merge($withdrawal->response ?: [], [$this->data->all()])]);

        $payment = $this->fetchTransaction($withdrawal->external_id);

        if (!$payment->has(['customer_id', 'amount', 'status'])) {
            Log::error(sprintf('Payment %s can not be fetched', $withdrawal->external_id));
            return FALSE;
        } elseif ($payment->get('customer_id') != $withdrawal->account->user_id) {
            Log::error(sprintf('Customer ID %s does not match withdrawal user ID %d', $payment->get('customer_id'), $withdrawal->account->user_id));
            return FALSE;
        } elseif ($payment->get('amount') != $this->calculatePaymentAmount($withdrawal->amount)) {
            Log::error(sprintf('Payment amount %.2f does not match withdrawal amount %.2f', $payment->get('amount'), $this->calculatePaymentAmount($withdrawal->amount)));
            return FALSE;
        }

        if ($withdrawal->is_pending && in_array($payment->get('status'), ['paid', 'success'])) {
            WithdrawalRepository::complete($withdrawal);
        } elseif (in_array($payment->get('status'), ['canceled', 'denied', 'expired', 'failed', 'blocked', 'returned', 'unclaimed'])) {
            WithdrawalRepository::cancel($withdrawal);
        }

        return TRUE;
    }
}

<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CoinpaymentsWithdrawalService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\Withdrawal;
use Packages\Payments\Repositories\WithdrawalRepository;

class CoinpaymentsWithdrawalService extends WithdrawalService implements CanFetchAccountInfo, CanFetchBalances, CanFetchTransaction, CanSendTransaction, CanFetchPaymentCurrencies, CanReceiveWebhook
{
    use CoinpaymentsServiceFunctions;

    public function fetchTransaction(string $id): Collection
    {
        return $this->api->fetchWithdrawal($id);
    }

    public function create(): Withdrawal
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        return WithdrawalRepository::create([
            'account'           => $this->data->user()->account,
            'method'            => $this->method,
            'amount'            => $this->data->amount,
            'payment_currency'  => $this->data->payment_currency,
            'parameters'        => $this->data->parameters,
        ]);
    }

    public function send(): void
    {
        if (!$this->data instanceof Withdrawal) {
            throw new \Exception(sprintf('Data parameter should be an instance of %s', Withdrawal::class));
        }

        $withdrawal = $this->data;

        $transaction = $this->api->createWithdrawal(
            $this->calculatePaymentAmount($withdrawal->amount),
            $withdrawal->payment_currency,
            $this->getMethodCurrency(),
            $withdrawal->parameters->address,
            __('Withdrawal of :n credits by user :email', ['n' => $withdrawal->amount, 'email' => $withdrawal->account->user->email]),
            $this->getWebhookUrl(),
            intval($this->getMethod()->payment_method_parameters->confirm ?? 0)
        );

        $withdrawal->update(['response' => array_merge($withdrawal->response ?: [], $transaction->toArray())]);

        if ($transaction->has('id')) {
            $withdrawal->payment_amount = $transaction->get('amount');
            $withdrawal->external_id = $transaction->get('id');
            $withdrawal->status = Withdrawal::STATUS_PENDING;
            $withdrawal->save();
        } else {
            Log::error(sprintf('Error while sending withdrawal request to coinpayments: %s', json_encode($transaction)));
            WithdrawalRepository::cancel($withdrawal);
        }
    }

    public function processWebhook(): bool
    {
        if (!$this->data instanceof Request || !$this->api->validateWebhook($this->data)) {
            return FALSE;
        }

        
        $withdrawal = Withdrawal::where('external_id', $this->data->id)
            ->firstOrFail();

        $withdrawal->update(['response' => array_merge($withdrawal->response, [$this->data->all()])]);

        if (!$withdrawal->is_completed && ($this->data->status >= 100 || $this->data->status == 2)) {
            WithdrawalRepository::complete($withdrawal);
        } elseif (!$withdrawal->is_cancelled && $this->data->status == -1) {
            WithdrawalRepository::cancel($withdrawal);
        }

        return TRUE;
    }
}

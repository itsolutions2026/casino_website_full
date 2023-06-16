<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CoinpaymentsDepositService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Packages\Payments\Models\Deposit;
use Packages\Payments\Repositories\DepositRepository;

class CoinpaymentsDepositService extends DepositService implements CanFetchAccountInfo, CanFetchBalances, CanFetchTransaction, CanFetchPaymentCurrencies, CanReceiveWebhook
{
    use CoinpaymentsServiceFunctions;

    public function fetchTransaction(string $id): Collection
    {
        return $this->api->fetchTransaction($id);
    }

    public function create(): Deposit
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $tx = $this->api->createTransaction(
            $this->calculatePaymentAmount($this->data->amount),
            $this->getMethodCurrency(),
            $this->data->payment_currency,
            $this->getDescription(),
            $this->data->user()->email,
            $this->data->user()->name,
            $this->getWebhookUrl()
        );

        if (!$tx->has('txn_id')) {
            throw new Exception($this->api->getErrorMessage());
        }

        $this->setRedirectUrl('user.account.deposits.complete');

        return DepositRepository::create([
            'account'           => $this->data->user()->account,
            'method'            => $this->method,
            'amount'            => $this->data->amount,
            'payment_amount'    => $tx->get('amount'),
            'payment_currency'  => $this->data->payment_currency,
            'external_id'       => $tx->get('txn_id'),
            'parameters'        => [
                'address'           => $tx->get('address'),
                'destination_tag'   => $tx->get('dest_tag'),
                'expiration_time'   => time() + $tx->get('timeout'),
                'qr_url'            => $tx->get('qrcode_url'),
            ],
            'response' => [$tx]
        ]);
    }

    public function processWebhook(): bool
    {
        if (!$this->data instanceof Request || !$this->api->validateWebhook($this->data)) {
            return FALSE;
        }

        
        $deposit = Deposit::where('external_id', $this->data->txn_id)
            ->firstOrFail();

        $deposit->update(['response' => array_merge($deposit->response, [$this->data->all()])]);

        if (!$deposit->is_completed && ($this->data->status >= 100 || $this->data->status == 2)) {
            DepositRepository::complete($deposit);
        } elseif (!$deposit->is_cancelled && $this->data->status == -1) {
            DepositRepository::cancel($deposit);
        }

        return TRUE;
    }
}

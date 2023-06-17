<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CryptoWithdrawalService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use App\Helpers\Api\CryptoApi;
use App\Models\Asset;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\Withdrawal;
use Packages\Payments\Repositories\WithdrawalRepository;

abstract class CryptoWithdrawalService extends WithdrawalService implements CanFetchTransaction, CanFetchPaymentCurrencies
{
    public function create(): Withdrawal
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $params = $this->data->parameters;

        if ($this->isToken()) {
            $params['contractAddress'] = $this->getTokenContractAddress();
            $params['contractDecimals'] = $this->getTokenContractDecimals();
        }

        return WithdrawalRepository::create([
            'account'           => $this->data->user()->account,
            'method'            => $this->method,
            'amount'            => $this->data->amount,
            'payment_amount'    => $this->calculatePaymentAmount($this->data->amount),
            'payment_currency'  => $this->data->payment_currency,
            'parameters'        => $params,
        ]);
    }

    public function complete(): void
    {
        if (!$this->data instanceof Withdrawal) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Withdrawal::class));
        }

        $withdrawal = $this->data;
        info(sprintf('Complete withdrawal #%d, %.8f %s (%s units) = %d credits', $withdrawal->id, $withdrawal->payment_amount, $withdrawal->payment_currency, $withdrawal->payment_amount_in_units, $withdrawal->amount));

        $transaction = $this->api->fetchTransaction($withdrawal->external_id);

        
        if ($transaction) {
            info(sprintf(
                'Tx %s, from %s, to %s, amount %s',
                $transaction->getId(),
                $transaction->getSenderAddress(),
                $transaction->getRecepientAddress(),
                $transaction->getAmountInUnits()
            ));

            if ($transaction->isSuccessful()) {
                WithdrawalRepository::complete($withdrawal);
                info(sprintf('Withdrawal %d completed', $withdrawal->id));
            }
        } else {
            Log::error(sprintf('Can not fetch transaction: %s', $withdrawal->external_id));
        }
    }

    public function fetchAddressBalance(string $address): float
    {
        $balance = $this->isToken()
            ? $this->api->fetchTokenBalance($address, $this->getTokenContractAddress(), $this->getTokenContractDecimals())
            : $this->api->fetchBalance($address);

        return !is_null($balance) ? $balance : 0;
    }

    public function isToken()
    {
        return isset($this->getMethod()->payment_method_parameters->contract_address);
    }

    public function getTokenContractAddress(): ?string
    {
        return $this->getMethod()->payment_method_parameters->contract_address ?? NULL;
    }

    public function getTokenContractDecimals(): ?int
    {
        return (int) $this->getMethod()->payment_method_parameters->contract_decimals ?? NULL;
    }

    public function calculatePaymentAmountInUnits($paymentAmount): string
    {
        return $this->isToken()
            ? $this->api::toUnits($paymentAmount, $this->getTokenContractDecimals())
            : $this->api::toUnits($paymentAmount);
    }

    public function getPaymentCurrencyRate(): float
    {
        return !$this->isToken() && $this->getMethodCurrency() == 'USD'
            ? Cache::remember(sprintf('payments.%s.currencies.%s.rate', class_basename(__CLASS__), $this->getPaymentCurrency()), 300, function () {
                $api = app()->make(CryptoApi::class);
                $asset = Asset::where('symbol', $this->getPaymentCurrency())->first();
                return $api->getPrice($asset);
            }) * $this->getMethodRate()
            : $this->getMethodRate();
    }

    public function fetchPaymentCurrencies(): Collection
    {
        return collect([
            $this->getPaymentCurrency() => [
                'rate_credits' => $this->getPaymentCurrencyRate()
            ]
        ]);
    }

    public function fetchTransaction(string $id): Collection
    {
        return $this->api->fetchTransaction($id)->toCollection();
    }

    abstract public function getPaymentCurrency(): string;
}

<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CryptoDepositService.php
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
use Packages\Payments\Models\Deposit;
use Packages\Payments\Repositories\DepositRepository;

abstract class CryptoDepositService extends DepositService implements CanFetchBalances, CanFetchPaymentCurrencies, CanFetchTransaction
{
    public function create(): Deposit
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $this->setRedirectUrl('user.account.deposits.complete');

        $params = [
            'addressFrom' => $this->data->parameters['address'],
            'addressTo' => $this->getDepositAddress(),
        ];

        if ($this->isToken()) {
            $params['contractAddress'] = $this->getTokenContractAddress();
            $params['contractDecimals'] = $this->getTokenContractDecimals();
        }

        return DepositRepository::create([
            'account'           => $this->data->user()->account,
            'method'            => $this->method,
            'amount'            => $this->data->amount,
            'payment_amount'    => $this->calculatePaymentAmount($this->data->amount),
            'payment_currency'  => $this->getPaymentCurrency(),
            'parameters'        => $params,
        ]);
    }

    public function complete(): void
    {
        if (!$this->data instanceof Deposit) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Deposit::class));
        }

        $deposit = $this->data;

        $transaction = $this->api->fetchTransaction($deposit->external_id);

        
        if ($transaction) {
            info(sprintf(
                'Tx %s, from %s, to %s, amount %s',
                $transaction->getId(),
                $transaction->getSenderAddress(),
                $transaction->getRecepientAddress(),
                $transaction->getAmountInUnits()
            ));

            if ($transaction->isSuccessful()) {
                $addressFrom = strtolower($deposit->parameters->addressFrom);
                $addressTo = strtolower($deposit->parameters->addressTo);
                $amountInUnits = $deposit->payment_amount_in_units;

                if ($addressFrom != $transaction->getSenderAddress()) {
                    Log::error(sprintf('Sender does NOT match: %s != %s', $addressFrom, $transaction->getSenderAddress()));
                } elseif ($addressTo != $transaction->getRecepientAddress()) {
                    Log::error(sprintf('Recepient does NOT match: %s != %s', $addressTo, $transaction->getRecepientAddress()));
                } elseif ($amountInUnits != $transaction->getAmountInUnits()) {
                    Log::error(sprintf('Amount does NOT match: %s != %s', $amountInUnits, $transaction->getAmountInUnits()));
                
                } else {
                    DepositRepository::complete($deposit);

                    info(sprintf('Deposit %d completed', $deposit->id));
                }
            }
        } else {
            Log::error(sprintf('Can not fetch transaction: %s', $deposit->external_id));
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

    public function getDepositAddress()
    {
        return $this->getMethod()->payment_method_parameters->address ?? NULL;
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

    public function fetchBalances(): Collection
    {
        return collect([$this->getPaymentCurrency() => $this->fetchAddressBalance($this->getDepositAddress())]);
    }

    public function fetchTransaction(string $id): Collection
    {
        return $this->api->fetchTransaction($id)->toCollection();
    }

    abstract public function getPaymentCurrency(): string;
}

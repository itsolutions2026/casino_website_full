<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   CoinpaymentsServiceFunctions.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Illuminate\Http\Response;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Packages\Payments\Services\Api\CoinpaymentsApi;

trait CoinpaymentsServiceFunctions
{
    protected function makeApi()
    {
        return new CoinpaymentsApi();
    }

    protected function getPaymentCurrencyRate(): float
    {
        return $this->getMethodRate();
    }

    public function fetchAccountInfo(): Collection
    {
        return $this->api->fetchAccountInfo();
    }

    public function fetchBalances(): Collection
    {
        return $this->api->fetchBalances()
            ->map(function ($item) {
                return $item->balancef;
            });
    }

    public function fetchPaymentCurrencies(): Collection
    {
        $nominalCurrencyCode = $this->getMethodCurrency();
        $nominalCurrencyToCreditsRate = $this->getMethodRate();

        return Cache::remember(sprintf('payments.%s.currencies.%s', class_basename(get_class($this->getMethod())), $nominalCurrencyCode), 300, function () use ($nominalCurrencyCode, $nominalCurrencyToCreditsRate) {
            $rates = $this->api->fetchRates();

            if (!$rates->get($nominalCurrencyCode)) {
                throw new \Exception(sprintf('Currency "%s" is not supported by this gateway.', $nominalCurrencyCode));
            }

            $nominalCurrencyToBitcoinRate = $rates->get($nominalCurrencyCode)->rate_btc;

            
            $paymentCurrencies = $rates->filter(function ($currency) {
                return $currency->is_fiat == 0 && $currency->status == 'online' && $currency->accepted == 1;
            });

            
            $paymentCurrencies = $paymentCurrencies->transform(function ($currency) use ($nominalCurrencyToBitcoinRate, $nominalCurrencyToCreditsRate) {
                return (object) [
                    'name' => $currency->name,
                    'rate_btc' => $currency->rate_btc,
                    'rate_credits' => (float) $currency->rate_btc / $nominalCurrencyToBitcoinRate * $nominalCurrencyToCreditsRate,
                ];
            });

            return $paymentCurrencies->sortKeys();
        });
    }

    public function httpSuccess(): Response
    {
        return response()->make('OK', 200);
    }

    public function httpError(): Response
    {
        return response()->make('ERROR', 400);
    }
}

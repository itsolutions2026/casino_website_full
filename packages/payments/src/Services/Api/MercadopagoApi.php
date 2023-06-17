<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   MercadopagoApi.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services\Api;

use Illuminate\Support\Collection;
use MercadoPago\Item;
use MercadoPago\Payer;
use MercadoPago\Payment;
use MercadoPago\Preference;
use MercadoPago\SDK;

class MercadopagoApi
{
    public function __construct()
    {
        if (!$this->getAccessToken()) {
            throw new \Exception('API parameters are not specified');
        }

        SDK::setAccessToken($this->getAccessToken());
    }

    protected function getAccessToken(): ?string
    {
        return config('payments.mercadopago.access_token');
    }

    protected function isLiveMode(): bool
    {
        return config('payments.mercadopago.live') == TRUE;
    }

    public function createPayment(
        float $amount,
        string $currency,
        string $description,
        string $userName,
        string $userEmail,
        string $webhookUrl,
        string $successUrl,
        string $failureUrl,
        string $orderId,
        array $excludedPaymentTypes
    ) {
        $item = new Item();
        $item->quantity = 1;
        $item->unit_price = $amount;
        $item->currency_id = $currency;
        $item->title = $description;

        $payer = new Payer();
        $payer->name = $userName;
        $payer->email = $userEmail;

        $preference = new Preference();
        $preference->items = [$item];
        $preference->payer = $payer;
        $preference->notification_url = $webhookUrl;
        $preference->back_urls = [
            'success' => $successUrl,
            'pending' => $successUrl,
            'failure' => $failureUrl,
        ];
        $preference->payment_methods = [
            'installments' => 1,
            'excluded_payment_types' => array_map(function ($type) {
                return ['id' => $type];
            }, $excludedPaymentTypes)
        ];
        $preference->auto_return = 'approved';
        $preference->external_reference = $orderId;
        $preference->save();

        $result = collect([
            'id'                => $preference->id,
            'redirect_url'      => $this->isLiveMode() ? $preference->init_point : $preference->sandbox_init_point,
            'notification_url'  => $preference->notification_url . '?source_news=webhook',
            'error'             => $preference->error
        ]);

        return $result;
    }

    public function fetchPayment(string $id): Collection
    {
        $payment = Payment::find_by_id($id)->toArray();
        info(json_encode($payment));
        return collect($payment);
    }
}

<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SmartfastpayDepositService.php
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
use Packages\Payments\Models\Deposit;
use Packages\Payments\Repositories\DepositRepository;
use BaconQrCode\Renderer\Image\SvgImageBackEnd;
use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;

class SmartfastpayDepositService extends DepositService implements CanFetchTransaction, CanReceiveWebhook
{
    use SmartfastpayServiceFunctions;

    public function create(): Deposit
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $paymentAmount = $this->calculatePaymentAmount($this->data->amount);
        $externalId = Utils::generateRandomString(10);

        $payment = $this->api->createPayment(
            $this->data->parameters['method'],
            $this->data->parameters['cpf'],  
            $paymentAmount,
            $this->getMethodCurrency(),
            $this->data->user()->id,
            $this->data->user()->name,
            $this->data->user()->email,
            $externalId,
            $this->getWebhookUrl()
        );

        if (!$payment->has('id')) {
            throw new Exception(__('There was a problem creating a new payment.'));
        }

        $this->setRedirectUrl('user.account.deposits.complete');

        $parameters = [];
        if ($payment->has('pix')) {
            $parameters = array_merge((array) $payment->get('pix'), [
                'qr' => (new Writer(new ImageRenderer(new RendererStyle(300), new SvgImageBackEnd())))->writeString($payment->get('pix')->qrcode)
            ]);
        } elseif ($payment->has('bank')) {
            $parameters = $payment->get('bank');
        }

        return DepositRepository::create([
            'account'           => $this->data->user()->account,
            'method'            => $this->method,
            'amount'            => $this->data->amount,
            'payment_amount'    => $payment->get('values')->total, 
            'payment_currency'  => 'BRL',
            'external_id'       => $payment->get('id'),
            'response'          => [$payment->toArray()],
            'parameters'        => $parameters,
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

        try {
            $request = json_decode($this->data->getContent());
        } catch (\Exception $e) {
            Log::error(sprintf('Error when parsing JSON: %s %s', json_last_error(), json_last_error_msg()));
            return FALSE;
        }

        $deposit = Deposit::where('external_id', $request->data[0]->id)
            ->created()
            ->firstOrFail();

        $deposit->update(['response' => array_merge($deposit->response, [$this->data->all()])]);

        $payment = $this->fetchTransaction($deposit->external_id);

        if (!$payment->has(['customer_id', 'amount', 'status'])) {
            Log::error(sprintf('Payment %s can not be fetched', $deposit->external_id));
            return FALSE;
        } elseif ($payment->get('customer_id') != $deposit->account->user_id) {
            Log::error(sprintf('Customer ID %s does not match deposit user ID %d', $payment->get('customer_id'), $deposit->account->user_id));
            return FALSE;
        } elseif ($payment->get('amount') != $this->calculatePaymentAmount($deposit->amount)) {
            Log::error(sprintf('Payment amount %.2f does not match deposit amount %.2f', $payment->get('amount'), $this->calculatePaymentAmount($deposit->amount)));
            return FALSE;
        }

        if (in_array($payment->get('status'), ['paid', 'success'])) {
            DepositRepository::complete($deposit);
        } elseif (in_array($payment->get('status'), ['canceled', 'denied', 'expired', 'failed'])) {
            DepositRepository::cancel($deposit);
        }

        return TRUE;
    }
}

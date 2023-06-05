<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   FreekassaDepositService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use App\Helpers\Utils;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Packages\Payments\Models\Deposit;
use Packages\Payments\Repositories\DepositRepository;

class FreekassaDepositService extends DepositService implements CanFetchBalances, CanReceiveWebhook
{
    use FreekassaServiceFunctions;

    public function create(): Deposit
    {
        if (!$this->data instanceof Request) {
            throw new Exception(sprintf('Data parameter should be an instance of %s', Request::class));
        }

        $paymentAmount = $this->calculatePaymentAmount($this->data->amount);
        $externalId = Utils::generateRandomString(10);

        $this->setRedirectUrl(
            $this->api->makePaymentUrl(
                $paymentAmount,
                $this->getMethodCurrency(),
                $externalId,
                $this->data->user()->email
            )
        );

        return DepositRepository::create([
            'account'           => $this->data->user()->account,
            'method'            => $this->method,
            'amount'            => $this->data->amount,
            'payment_amount'    => $paymentAmount,
            'payment_currency'  => $this->getMethodCurrency(),
            'external_id'       => $externalId,
            'parameters'        => $this->data->parameters,
        ]);
    }

    public function processWebhook(): bool
    {
        if (!$this->data instanceof Request || !$this->api->validateWebhook($this->data)) {
            return FALSE;
        }

        $deposit = Deposit::where('external_id', $this->data->MERCHANT_ORDER_ID)
            ->created()
            ->firstOrFail();

        $deposit->update(['response' => array_merge($deposit->response ?: [], [$this->data->all()])]);
        DepositRepository::complete($deposit);

        return TRUE;
    }

    public function httpSuccess(): Response
    {
        return response()->make('YES', 200);
    }

    public function httpError(): Response
    {
        return response()->make('ERROR', 400);
    }
}

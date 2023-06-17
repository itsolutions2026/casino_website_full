<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   EasywireWithdrawalService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\Withdrawal;
use Packages\Payments\Repositories\WithdrawalRepository;

class EasywireWithdrawalService extends WithdrawalService implements CanSendTransaction
{
    use EasywireServiceFunctions;

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

    public function send(): void
    {
        if (!$this->data instanceof Withdrawal) {
            throw new \Exception(sprintf('Data parameter should be an instance of %s', Withdrawal::class));
        }

        $withdrawal = $this->data;

        $payout = $this->api->createPayout(
            $withdrawal->payment_amount,
            $withdrawal->id,
            $withdrawal->parameters->bank,
            $withdrawal->parameters->branch,
            $withdrawal->parameters->account,
            $withdrawal->account->user->name,
        );

        $withdrawal->update(['response' => array_merge($withdrawal->response ?: [], $payout->toArray())]);

        if ($payout->get('success') == TRUE) {
            $withdrawal->is_pending = TRUE;
            $withdrawal->save();
        } else {
            Log::error('There was a problem creating a new payout.');
            WithdrawalRepository::cancel($withdrawal);
        }
    }
}

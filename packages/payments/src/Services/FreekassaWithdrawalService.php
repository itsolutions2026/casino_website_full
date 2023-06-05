<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   FreekassaWithdrawalService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use App\Helpers\Utils;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\Withdrawal;
use Packages\Payments\Repositories\WithdrawalRepository;

class FreekassaWithdrawalService extends WithdrawalService implements CanFetchBalances, CanSendTransaction
{
    use FreekassaServiceFunctions;

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
            'external_id'       => Utils::generateRandomString(10),
            'parameters'        => $this->data->parameters,
        ]);
    }

    public function send(): void
    {
        if (!$this->data instanceof Withdrawal) {
            throw new \Exception(sprintf('Data parameter should be an instance of %s', Withdrawal::class));
        }

        $withdrawal = $this->data;

        $transactionId = $this->api->createWithdrawal(
            $withdrawal->payment_amount,
            $withdrawal->payment_currency,
            $this->getMethod()->payment_method_parameters->method,
            $withdrawal->parameters->account,
            $withdrawal->external_id
        );

        if ($transactionId) {
            $withdrawal->update(['response' => array_merge($withdrawal->response ?: [], ['transaction_id' => $transactionId])]);
            WithdrawalRepository::complete($withdrawal);
        } else {
            Log::error('Error while sending withdrawal request.');
            WithdrawalRepository::cancel($withdrawal);
        }
    }
}

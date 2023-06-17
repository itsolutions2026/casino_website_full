<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   EvmWithdrawalService.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services;

use Packages\Payments\Models\Withdrawal;

class EvmWithdrawalService extends CryptoWithdrawalService implements CanSendTransaction
{
    use EvmServiceFunctions;

    public function send(): void
    {
        if (!$this->data instanceof Withdrawal) {
            throw new \Exception(sprintf('Data parameter should be an instance of %s', Withdrawal::class));
        }

        $withdrawal = $this->data;

        $transactionId = $this->api->tx(
            $this->getMethod()->payment_method_parameters->primary_key,
            $withdrawal->parameters->address,
            $withdrawal->payment_amount,
            $this->isToken() ? $this->getTokenContractAddress() : NULL
        );

        if ($transactionId) {
            $withdrawal->external_id = $transactionId;
            $withdrawal->is_pending = TRUE;
            $withdrawal->save();
        }
    }
}

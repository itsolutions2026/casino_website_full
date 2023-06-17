<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SolanaTransaction.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Helpers\Blockchain;

use Illuminate\Support\Str;

class SolanaTransaction extends Transaction
{
    public function getId(): string
    {
        return collect(data_get($this->transaction, 'transaction.signatures'))->first();
    }

    public function getInput(): string
    {
        return '';
    }

    public function isSuccessful(): bool
    {
        return data_get($this->transaction, 'meta') && is_null(data_get($this->transaction, 'meta.err'));
    }

    public function isTokenTransfer(): bool
    {
        return FALSE;
    }

    public function getSenderAddress(): string
    {
        return Str::lower(collect(data_get($this->transaction, 'transaction.message.accountKeys'))->first());
    }

    public function getRecepientAddress(): string
    {
        return Str::lower(collect(data_get($this->transaction, 'transaction.message.accountKeys'))->get(1));
    }

    public function getAmountInUnits(): string
    {
        return collect(data_get($this->transaction, 'meta.postBalances'))->get(1) - collect(data_get($this->transaction, 'meta.preBalances'))->get(1);
    }
}

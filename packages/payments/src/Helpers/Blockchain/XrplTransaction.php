<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   XrplTransaction.php
 *
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
 */

namespace Packages\Payments\Helpers\Blockchain;

use App\Helpers\Utils;
use App\Services\Crypto\XrplSigner;
use Illuminate\Support\Str;
use Packages\Payments\Services\Api\XrplApi;

class XrplTransaction extends Transaction
{
    public function getId(): string
    {
        return $this->transaction->hash;
    }


    public function getInput(): string
    {
        return '';
    }


    public function isSuccessful(): bool
    {
        return $this->transaction->status === 'success' && $this->transaction->meta->TransactionResult === 'tesSUCCESS';
    }


    public function isTokenTransfer(): bool
    {
        return false;
    }


    public function getSenderAddress(): string
    {
        return Str::lower($this->transaction->Account);
    }


    public function getRecepientAddress(): string
    {
        return Str::lower($this->transaction->Destination);
    }


    public function getAmountInUnits(): string
    {
        return $this->transaction->Amount;
    }
}
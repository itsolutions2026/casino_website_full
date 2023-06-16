<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   EvmTransaction.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Helpers\Blockchain;

use App\Helpers\Utils;
use App\Services\Crypto\EvmSigner;
use Illuminate\Support\Str;
use Packages\Payments\Services\Api\EvmApi;

class EvmTransaction extends Transaction
{
    public function getId(): string
    {
        return $this->transaction->hash;
    }

    
    public function getInput(): string
    {
        return $this->transaction->input;
    }

    
    public function isSuccessful(): bool
    {
        return $this->transaction->blockNumber && $this->transaction->blockHash;
    }

    
    public function isTokenTransfer(): bool
    {
        $input = $this->getInput();

        return strlen($input) == 138 && substr($input, 0, 10) == (new EvmSigner)->getMethodSignature('transfer(address,uint256)'); 
    }

    
    public function getSenderAddress(): string
    {
        return Str::lower($this->transaction->from);
    }

    
    public function getRecepientAddress(): string
    {
        $address = $this->isTokenTransfer()
            ? Str::of($this->getInput())->substr(10, 64)->ltrim('0')->padLeft(40, '0')
            : $this->transaction->to;

        return Str::of($address)->lower()->start('0x');
    }

    
    public function getAmountInUnits(): string
    {
        return $this->isTokenTransfer()
            ? Utils::bchexdec(Str::of($this->getInput())->substr(74, 64)->ltrim('0'))
            : Utils::bchexdec($this->transaction->value);
    }
}

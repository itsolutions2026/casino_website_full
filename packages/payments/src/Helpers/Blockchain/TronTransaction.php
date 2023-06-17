<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   TronTransaction.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Helpers\Blockchain;

use App\Helpers\Utils;
use IEXBase\TronAPI\Support\Base58Check;
use Illuminate\Support\Str;
use StephenHill\Base58;

class TronTransaction extends EvmTransaction
{
    public function getId(): string
    {
        return data_get($this->transaction, 'txID');
    }

    
    public function getInput(): string
    {
        return '0x' . data_get($this->transaction, 'raw_data.contract.0.parameter.value.data');
    }

    
    public function isSuccessful(): bool
    {
        return data_get($this->transaction, 'ret.0.contractRet') == 'SUCCESS';
    }

    
    public function getSenderAddress(): string
    {
        return Str::lower(Base58Check::encode(data_get($this->transaction, 'raw_data.contract.0.parameter.value.owner_address'), 0, false));
    }

    
    public function getRecepientAddress(): string
    {
        $address = $this->isTokenTransfer()
            ? Base58Check::encode('41' . Str::of($this->getInput())->substr(10, 64)->ltrim('0')->padLeft(40, '0'), 0, false)
            : Base58Check::encode(data_get($this->transaction, 'raw_data.contract.0.parameter.value.to_address'), 0, false);

        return Str::of($address)->lower();
    }

    
    public function getAmountInUnits(): string
    {
        return $this->isTokenTransfer()
            ? Utils::bchexdec(Str::of($this->getInput())->substr(74, 64)->ltrim('0'))
            : data_get($this->transaction, 'raw_data.contract.0.parameter.value.amount');
    }
}

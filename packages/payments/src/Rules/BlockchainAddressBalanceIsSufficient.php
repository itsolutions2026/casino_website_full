<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   BlockchainAddressBalanceIsSufficient.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Rules;

use Illuminate\Contracts\Validation\Rule;
use Packages\Payments\Services\CryptoDepositService;

class BlockchainAddressBalanceIsSufficient implements Rule
{
    protected $depositService;
    protected $address;
    protected $balance;

    
    public function __construct(CryptoDepositService $depositService, $address)
    {
        $this->depositService = $depositService;
        $this->address = $address;
    }

    
    public function passes($attribute, $depositAmount)
    {
        $this->balance = $this->depositService->fetchAddressBalance($this->address);
        return $this->balance >= $this->depositService->calculatePaymentAmount($depositAmount);
    }

    
    public function message()
    {
        return __('Insufficient balance (:balance) to perform this operation.', ['balance' => $this->balance]);
    }
}

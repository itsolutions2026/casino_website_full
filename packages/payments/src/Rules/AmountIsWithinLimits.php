<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   AmountIsWithinLimits.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Rules;

use Illuminate\Contracts\Validation\Rule;
use Packages\Payments\Services\DepositService;

class AmountIsWithinLimits implements Rule
{
    protected $depositService;
    protected $amount;
    protected $minAmount;
    protected $currency;
    protected $error;

    
    public function __construct(DepositService $depositService)
    {
        $this->depositService = $depositService;
    }

    
    public function passes($attribute, $depositAmount)
    {
        try {
            $this->amount = $depositAmount;
            $this->minAmount = $this->depositService->fetchMinPaymentAmount();
            $this->currency = $this->depositService->getMethodCurrency();
            return $this->depositService->calculatePaymentAmount($this->amount) >= $this->minAmount;
        } catch (\Throwable $e) {
            $this->error = $e->getMessage();
            return false;
        }
    }

    
    public function message()
    {
        if ($this->error) {
            return $this->error;
        } else {
            $min = preg_replace('/0*$/', '', number_format($this->minAmount, 12, '.', ''));
            return __('Minimum transaction is :currency :minimum', ['currency' => $this->currency, 'minimum' => $min]);
        }
    }
}

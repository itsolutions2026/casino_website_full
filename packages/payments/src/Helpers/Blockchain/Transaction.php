<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Transaction.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Helpers\Blockchain;

use Illuminate\Support\Collection;

abstract class Transaction
{
    protected $transaction;

    public function __construct(object $transaction)
    {
        $this->transaction = $transaction;
    }

    public function toCollection(): Collection
    {
        return collect($this->toArray());
    }

    public function toArray(): array
    {
        return json_decode(json_encode($this->transaction), TRUE);
    }

    abstract public function getId(): string;

    abstract public function getInput(): string;

    abstract public function isSuccessful(): bool;

    abstract public function isTokenTransfer(): bool;

    abstract public function getSenderAddress(): string;

    abstract public function getRecepientAddress(): string;

    abstract public function getAmountInUnits(): string;
}

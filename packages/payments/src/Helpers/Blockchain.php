<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Blockchain.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Helpers;

class Blockchain
{
    public static function getAddressModelClassById(string $id): string
    {
        return sprintf('Packages\\Payments\\Models\\%sAddress', ucfirst($id));
    }

    public static function getStoreAddressRequestClassById(string $id): string
    {
        return sprintf('Packages\\Payments\\Http\\Requests\\Store%sAddress', ucfirst($id));
    }
}

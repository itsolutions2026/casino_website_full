<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   TronAddressController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Controllers;

use App\Services\Crypto\TronSigner;
use Packages\Payments\Models\TronAddress;

class TronAddressController extends BlockchainAddressController
{
    protected $model = TronAddress::class;

    protected $signerClass = TronSigner::class;
}

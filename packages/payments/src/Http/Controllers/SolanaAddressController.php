<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SolanaAddressController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Controllers;

use App\Services\Crypto\SolanaSigner;
use Packages\Payments\Models\SolanaAddress;

class SolanaAddressController extends BlockchainAddressController
{
    protected $model = SolanaAddress::class;

    protected $signerClass = SolanaSigner::class;
}

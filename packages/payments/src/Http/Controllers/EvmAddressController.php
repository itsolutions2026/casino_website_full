<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   EvmAddressController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Controllers;

use App\Services\Crypto\EvmSigner;
use Packages\Payments\Models\EvmAddress;

class EvmAddressController extends BlockchainAddressController
{
    protected $model = EvmAddress::class;

    protected $signerClass = EvmSigner::class;
}

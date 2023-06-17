<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   Play.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Slots3D\Http\Requests;

use App\Http\Requests\PlayGame;
use Packages\Slots3D\Models\Slots3D;

class Play extends PlayGame
{
    protected $gamePackageId = 'slots-3d';
    protected $gameableClass = Slots3D::class;
}

<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   SettingController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\HeadsOrTails\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function uploadImage(Request $request)
    {
        $path = FALSE;

        
        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            
            $path = $request->image->storeAs('games/heads-or-tails', $request->image->getClientOriginalName(), 'public');
        }

        return $path
            ? $this->successResponse(['path' => '/storage/' . $path])
            : $this->errorResponse(__('There was an error while uploading the image.'));
    }
}

<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   BlockchainAddressController.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Packages\Payments\Http\Requests\StoreBlockchainAddress;
use Packages\Payments\Http\Requests\VerifyBlockchainAddress;
use Packages\Payments\Models\BlockchainAddress;

class BlockchainAddressController extends Controller
{
    
    protected $model;

    protected $signerClass;

    public function index(Request $request)
    {
        return $this->model::where('user_id', $request->user()->id)->confirmed()->get();
    }

    
    public function store(StoreBlockchainAddress $request)
    {
        return $this->model::updateOrCreate(
            ['user_id' => $request->user()->id, 'address' => $request->address],
            ['message' => Str::random(20)]
        );
    }

    
    public function verify(VerifyBlockchainAddress $request, BlockchainAddress $blockchainAddress)
    {
        if ((new $this->signerClass)->verify($blockchainAddress->message, $request->signature, $blockchainAddress->address)) {
            $blockchainAddress->update(['confirmed' => TRUE]);
        }

        return $blockchainAddress;
    }
}

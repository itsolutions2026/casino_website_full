<?php


namespace Packages\Payments\Http\Controllers;

use App\Services\Crypto\XrplSigner;
use Packages\Payments\Http\Requests\VerifyBlockchainAddress;
use Packages\Payments\Models\BlockchainAddress;
use Packages\Payments\Models\XrplAddress;

class XrplAddressController extends BlockchainAddressController
{

    protected $model = XrplAddress::class;

    protected $signerClass = XrplSigner::class;

    public function verify(VerifyBlockchainAddress $request, BlockchainAddress $blockchainAddress)
    {
        if ((new $this->signerClass)->verify($request->signature, $blockchainAddress->address)) {
            $blockchainAddress->update(['confirmed' => TRUE]);
        }

        return $blockchainAddress;
    }

}
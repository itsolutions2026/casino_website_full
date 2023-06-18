<?php


namespace Packages\Payments\Http\Requests;


class StoreXrplAddress extends StoreBlockchainAddress
{
    public function rules()
    {
        return [
            'address' => 'required|string|min:25|max:35'
        ];
    }
}
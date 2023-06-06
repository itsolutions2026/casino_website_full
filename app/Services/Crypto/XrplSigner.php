<?php


namespace App\Services\Crypto;


use Illuminate\Support\Facades\Log;
use Xrpl\XummSdkPhp\XummSdk;

class XrplSigner
{

    public function sign(string $privateKey, string $message): string
    {
        // TODO: Implement sign() method.
    }

    public function verify(string $signature, string $address): bool
    {
        // TODO: Implement verify() method.

        $xumm_credential = config('payments.xrpl');

        if(!empty($xumm_credential['api_key']) && !empty($xumm_credential['api_secret'])){
            Log::error(print_r('test', 1));
            $sdk = new XummSdk($xumm_credential['api_key'], $xumm_credential['api_secret']);
            $payload = $sdk->getPayload($signature);

            if (!empty($payload->payload) && $payload->payload->txType == "SignIn"){
                return true;
            }
        }
        return false;
    }
}
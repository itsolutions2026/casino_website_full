<?php


namespace Packages\Payments\Services;

use Illuminate\Support\Facades\Log;
use Packages\Payments\Models\Withdrawal;
use Packages\Payments\Services\Api\XrplApi;
use XRPL_PHP\Client\JsonRpcClient;

use XRPL_PHP\Wallet\Wallet;
use function XRPL_PHP\Sugar\autofill;
use function XRPL_PHP\Sugar\xrpToDrops;

class XrplWithdrawalService extends CryptoWithdrawalService implements CanSendTransaction
{
    protected function makeApi()
    {
        return new XrplApi($this->getMethod()->payment_method_parameters->url);
    }

    public function getPaymentCurrency(): string
    {
        return 'XRP';
    }
    public function isToken()
    {
        return false;
    }

    public function send(): void
    {
        // TODO: Implement send() method.

        if (!$this->data instanceof Withdrawal) {
            throw new \Exception(sprintf('Data parameter should be an instance of %s', Withdrawal::class));
        }


        $withdrawal = $this->data;
        $client = new JsonRpcClient($this->getMethod()->payment_method_parameters->url);


        $standbyWallet = Wallet::fromSeed($this->getMethod()->payment_method_parameters->primary_key);

        $tx = [
            "TransactionType" => "Payment",
            "Account" => $standbyWallet->getAddress(),
            "Amount" => xrpToDrops($withdrawal->payment_amount),
            "Destination" => $withdrawal->parameters->address
        ];

        $autofilledTx = $client->autofill($tx);

        $signedTx = $standbyWallet->sign($autofilledTx);


        $body = json_encode([
            "method" => "submit",
            "params" => [
                ["tx_blob" => $signedTx['tx_blob']]
            ]
        ]);

        $response = $client->rawSyncRequest('POST', '', $body);
        $content = $response->getBody()->getContents();

        $responseResult = json_decode($content, true);
        $transaction = empty($responseResult['result'])? Null: $responseResult['result'];


        if (!empty($transaction['engine_result']) && $transaction['engine_result'] === 'tesSUCCESS') {
            $withdrawal->external_id = $transaction['tx_json']['hash'];
            $withdrawal->is_completed = TRUE;
            $withdrawal->save();
        }

    }
}
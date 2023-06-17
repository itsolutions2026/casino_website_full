<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   EvmApi.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Services\Api;

use App\Helpers\Api\Api;
use App\Helpers\Utils;
use App\Services\Crypto\EvmSigner;
use Illuminate\Support\Str;
use kornrunner\Ethereum\Transaction as EthereumTransaction;
use Packages\Payments\Helpers\Blockchain\EvmTransaction;
use Packages\Payments\Helpers\Blockchain\Transaction;

class EvmApi extends Api implements BlockchainApi
{
    protected const METHOD_NET_VERSION = 'net_version';
    protected const METHOD_GET_BALANCE = 'eth_getBalance';
    protected const METHOD_CALL = 'eth_call';
    protected const METHOD_GET_TRANSACTION = 'eth_getTransactionByHash';
    protected const METHOD_GET_TRANSACTION_COUNT = 'eth_getTransactionCount';
    protected const METHOD_ESTIMATE_GAS = 'eth_estimateGas';
    protected const METHOD_GAS_PRICE = 'eth_gasPrice';
    protected const METHOD_SEND_RAW_TRANSACTION = 'eth_sendRawTransaction';

    protected $url;
    protected $signer;
    protected $tag = 'latest';

    protected $commonRequestParameters = [
        'id' => 1,
        'jsonrpc' => '2.0'
    ];

    
    public function __construct(string $url)
    {
        $this->url = $url;
        $this->signer = new EvmSigner();
    }

    public static function fromUnits($value, int $decimals = 18): string
    {
        return Utils::fromUnits($value, $decimals, 8);
    }

    public static function toUnits($value, int $decimals = 18): string
    {
        return Utils::toUnits($value, $decimals);
    }

    
    public function hashBalanceMethodSignatureAndParams(string $address): string
    {
        $address = Str::of($address)->ltrim($this->signer->getPrefix())->padLeft(64, '0');
        return $this->signer->getMethodSignature('balanceOf(address)') . $address;
    }

    public function hashTransferMethodSignatureAndParams(string $address, float $amount): string
    {
        $address = Str::of($address)->ltrim($this->signer->getPrefix())->padLeft(64, '0');
        $value = Str::of(Utils::bcdechex(self::toUnits($amount)))->padLeft(64, '0');
        return $this->signer->getMethodSignature('transfer(address,uint256)') . $address . $value;
    }

    protected function getBaseUrl(): string
    {
        return $this->url;
    }

    protected function makeParameters(array $parameters): array
    {
        return array_merge($this->commonRequestParameters, $parameters);
    }

    
    protected function makeRequest(array $params)
    {
        return $this->post('', 'result', ['json' => $this->makeParameters($params)]);
    }

    
    public function fetchBalance(string $address): ?float
    {
        $balance = $this->makeRequest([
            'method' => self::METHOD_GET_BALANCE,
            'params' => [$address, $this->tag]
        ]);

        return !is_null($balance) ? self::fromUnits(Utils::bchexdec($balance)) : NULL;
    }

    public function fetchChainId(): ?int
    {
        return $this->makeRequest(['method' => self::METHOD_NET_VERSION]);
    }

    
    public function fetchTokenBalance(string $address, string $contract, int $contractDecimals = 18): ?float
    {
        $balance = $this->makeRequest([
            'method' => self::METHOD_CALL,
            'params' => [
                ['to' => $contract, 'data' => $this->hashBalanceMethodSignatureAndParams($address)],
                $this->tag
            ]
        ]);

        return !is_null($balance) ? self::fromUnits(Utils::bchexdec($balance), $contractDecimals) : NULL;
    }

    
    public function estimateGas(string $from, string $to, float $amount, string $contract = NULL): ?string
    {
        $data = $contract ? $this->hashTransferMethodSignatureAndParams($to, $amount) : ''; 
        $to = $contract ?: $to;
        $value = $this->signer->getPrefix() . ($contract ? '0' : Utils::bcdechex(self::toUnits($amount)));

        return $this->makeRequest([
            'method' => self::METHOD_ESTIMATE_GAS,
            'params' => [compact('from', 'to', 'value', 'data')]
        ]);
    }

    
    public function fetchGasPrice(): ?string
    {
        return $this->makeRequest(['method' => self::METHOD_GAS_PRICE]);
    }

    
    public function fetchTransactionsCount(string $address, string $tag = 'latest'): int
    {
        $result = $this->makeRequest([
            'method' => self::METHOD_GET_TRANSACTION_COUNT,
            'params' => [$address, $tag]
        ]);

        return $result ? hexdec($result) : 0;
    }

    
    public function tx(string $privateKey, string $to, float $amount, string $contract = NULL, float $gasPrice = 0, int $nonce = -1): ?string
    {
        $from = $this->signer->privateKeyToAddress($privateKey);
        $chainId = self::fetchChainId();
        $nonce = $this->signer->getPrefix() . dechex($nonce >= 0 ? $nonce : $this->fetchTransactionsCount($from, 'pending'));
        $gasPrice = $gasPrice ? $this->signer->getPrefix() . Utils::bcdechex(self::toUnits($gasPrice)) : $this->fetchGasPrice();
        $gasLimit = $this->estimateGas($from, $to, $amount, $contract);
        $value = $this->signer->getPrefix() . ($contract ? '0' : Utils::bcdechex(self::toUnits($amount)));
        $data = $contract ? $this->hashTransferMethodSignatureAndParams($to, $amount) : '';

        info(json_encode(compact('from', 'to', 'amount', 'contract', 'chainId', 'nonce', 'gasPrice', 'gasLimit', 'value', 'data')));

        $transaction = new EthereumTransaction($nonce, $gasPrice, $gasLimit, $contract ?: $to, $value, $data);
        $signedTransaction = $this->signer->getPrefix() . $transaction->getRaw($privateKey, $chainId);

        return $this->makeRequest([
            'method' => self::METHOD_SEND_RAW_TRANSACTION,
            'params' => [$signedTransaction]
        ]);
    }

    
    public function fetchTransaction(string $hash): ?Transaction
    {
        $tx = $this->makeRequest([
            'method' => self::METHOD_GET_TRANSACTION,
            'params' => [$hash]
        ]);

        return optional($tx, function ($tx) {
            return new EvmTransaction($tx);
        });
    }
}

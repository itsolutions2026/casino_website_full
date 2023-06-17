<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositWithdrawalMethodCanBeEnabled.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Rules;

use App\Rules\ConfigVariablesAreSet;
use App\Rules\PhpExtensionIsInstalled;
use Illuminate\Contracts\Validation\Rule;
use Packages\Payments\Models\PaymentGatewayMethod;

class DepositWithdrawalMethodCanBeEnabled implements Rule
{
    private $paymentMethod;
    private $message;

    
    public function __construct(PaymentGatewayMethod $paymentMethod)
    {
        $this->paymentMethod = $paymentMethod;
    }

    
    public function passes($attribute, $value)
    {
        $validations = NULL;

        if ($this->paymentMethod) {
            if ($this->paymentMethod->gateway->code == 'paypal') {
                $validations = [
                    [
                        'class' => ConfigVariablesAreSet::class,
                        'params' => [
                            'payments.paypal.user',
                            'payments.paypal.password',
                            'payments.paypal.signature',
                        ]
                    ]
                ];
            } elseif ($this->paymentMethod->gateway->code == 'stripe') {
                $validations = [
                    [
                        'class' => ConfigVariablesAreSet::class,
                        'params' => [
                            'payments.stripe.public_key',
                            'payments.stripe.secret_key',
                        ]
                    ]
                ];
            } elseif ($this->paymentMethod->gateway->code == 'skrill') {
                $validations = [
                    [
                        'class' => ConfigVariablesAreSet::class,
                        'params' => [
                            'payments.skrill.account',
                            'payments.skrill.secret',
                        ]
                    ]
                ];
            } elseif ($this->paymentMethod->gateway->code == 'freekassa') {
                $validations = [
                    [
                        'class' => ConfigVariablesAreSet::class,
                        'params' => [
                            'payments.freekassa.merchant_id',
                            'payments.freekassa.api_key',
                            'payments.freekassa.secret',
                            'payments.freekassa.secret2',
                        ]
                    ]
                ];
            } elseif ($this->paymentMethod->gateway->code == 'paytm') {
                $validations = [
                    [
                        'class' => ConfigVariablesAreSet::class,
                        'params' => [
                            'payments.paytm.merchant_id',
                            'payments.paytm.secret_key',
                        ]
                    ]
                ];
            } elseif ($this->paymentMethod->gateway->code == 'smartfastpay') {
                $validations = [
                    [
                        'class' => ConfigVariablesAreSet::class,
                        'params' => [
                            'payments.smartfastpay.client_id',
                            'payments.smartfastpay.secret_key',
                        ]
                    ]
                ];
            } elseif ($this->paymentMethod->gateway->code == 'mercadopago') {
                $validations = [
                    [
                        'class' => ConfigVariablesAreSet::class,
                        'params' => [
                            'payments.mercadopago.access_token',
                        ]
                    ]
                ];
            } elseif ($this->paymentMethod->gateway->code == 'easywire') {
                $validations = [
                    [
                        'class' => ConfigVariablesAreSet::class,
                        'params' => [
                            'payments.easywire.user',
                            'payments.easywire.password',
                        ]
                    ]
                ];
            } elseif ($this->paymentMethod->gateway->code == 'coinpayments') {
                $validations = [
                    [
                        'class' => ConfigVariablesAreSet::class,
                        'params' => [
                            'payments.coinpayments.merchant_id',
                            'payments.coinpayments.public_key',
                            'payments.coinpayments.private_key',
                            'payments.coinpayments.secret_key',
                        ]
                    ]
                ];
            } elseif ($this->paymentMethod->gateway->code == 'evm') {
                $validations = [
                    [
                        'class' => PhpExtensionIsInstalled::class,
                        'params' => 'gmp'
                    ]
                ];
            } elseif ($this->paymentMethod->gateway->code == 'tron') {
                $validations = [
                    [
                        'class' => PhpExtensionIsInstalled::class,
                        'params' => 'gmp'
                    ]
                ];
            } elseif ($this->paymentMethod->gateway->code == 'solana') {
                $validations = [
                    [
                        'class' => PhpExtensionIsInstalled::class,
                        'params' => 'gmp'
                    ],
                    [
                        'class' => PhpExtensionIsInstalled::class,
                        'params' => 'sodium'
                    ]
                ];
            }
        }

        if ($validations) {
            foreach ($validations as $validation) {
                $rule = new $validation['class']($validation['params']);

                if (!$rule->passes()) {
                    $this->message = $rule->message();
                    return FALSE;
                }
            }
        }

        return TRUE;
    }

    
    public function message()
    {
        return $this->message;
    }
}

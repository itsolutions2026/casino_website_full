<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   BlockchainAddressConfirmed.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;

class BlockchainAddressConfirmed implements Rule
{
    protected $user;
    protected $model;

    
    public function __construct(User $user, string $model)
    {
        $this->user = $user;
        $this->model = $model;
    }

    
    public function passes($attribute, $value)
    {
        return $this->model::where('user_id', $this->user->id)->where('address', $value)->confirmed()->count() == 1;
    }

    
    public function message()
    {
        return __('Please confirm that you own this address first.');
    }
}

<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositStatusChanged.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Packages\Payments\Models\Deposit;

class DepositStatusChanged
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $deposit;

    
    public function __construct(Deposit $deposit)
    {
        $this->deposit = $deposit;
    }

    
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}

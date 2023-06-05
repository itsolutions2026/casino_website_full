<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WithdrawalStatusChanged.php
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
use Packages\Payments\Models\Withdrawal;

class WithdrawalStatusChanged
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $withdrawal;

    
    public function __construct(Withdrawal $withdrawal)
    {
        $this->withdrawal = $withdrawal;
    }

    
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}

<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositCancelled.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Packages\Payments\Models\Deposit;

class DepositCancelled extends Notification
{
    use Queueable;

    private $deposit;

    
    public function __construct(Deposit $deposit)
    {
        $this->deposit = $deposit;
    }

    
    public function via($notifiable)
    {
        return ['mail'];
    }

    
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject(__('Deposit request cancelled'))
            ->greeting(__('Hello'))
            ->line(__('Your deposit request of :amount credits is cancelled.', ['amount' => $this->deposit->amount]));
    }

    
    public function toArray($notifiable)
    {
        return [
            
        ];
    }
}

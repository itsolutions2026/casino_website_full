<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   WithdrawalCancelled.php
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
use Packages\Payments\Models\Withdrawal;

class WithdrawalCancelled extends Notification
{
    use Queueable;

    private $withdrawal;

    
    public function __construct(Withdrawal $withdrawal)
    {
        $this->withdrawal = $withdrawal;
    }

    
    public function via($notifiable)
    {
        return ['mail'];
    }

    
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject(__('Withdrawal request cancelled'))
            ->greeting(__('Hello'))
            ->line(__('Your withdrawal request of :amount credits is cancelled.', ['amount' => $this->withdrawal->amount]));
    }

    
    public function toArray($notifiable)
    {
        return [
            
        ];
    }
}

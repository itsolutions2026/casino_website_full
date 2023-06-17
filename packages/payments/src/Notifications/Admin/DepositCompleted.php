<?php
/**
 *   Stake iGaming platform
 *   ----------------------
 *   DepositCompleted.php
 * 
 *   @copyright  Copyright (c) FinancialPlugins, All rights reserved
 *   @author     FinancialPlugins <info@financialplugins.com>
 *   @see        https://financialplugins.com
*/

namespace Packages\Payments\Notifications\Admin;

use App\Notifications\Admin\AdminNotification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Packages\Payments\Models\Deposit;

class DepositCompleted extends AdminNotification
{
    private $deposit;

    
    public function __construct(Deposit $withdrawal)
    {
        parent::__construct();

        $this->deposit = $withdrawal;
    }


    
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject(__('New deposit'))
            ->greeting(__('Hello'))
            ->line(__('User :name (:email) deposited :n credits (:x :ccy).', [
                'name'  => $this->deposit->account->user->name,
                'email' => $this->deposit->account->user->email,
                'n'     => $this->deposit->amount,
                'x'     => $this->deposit->payment_amount,
                'ccy'   => $this->deposit->payment_currency,
            ]))
            ->line(__('Current user balance is :n credits.', [
                'n'  => $this->deposit->account->balance,
            ]))
            ->action(__('View deposit'), url(sprintf('admin/deposits/%d', $this->deposit->id)));
    }
}

import React from 'react';
import { PaymentHistoryView } from './PaymentHistoryView'
import { LoyaltyCardMemberView } from './LoyaltyCardMemberView'



interface AccountViewProps {
  payment: number
  cardHolder: boolean
}

const AccountView: React.FC<AccountViewProps> = ({payment, cardHolder}) => {
  return (
    <div>
    <PaymentHistoryView payment={payment} />
    <LoyaltyCardMemberView isCardHolder={cardHolder} />
    </div>
  )
} 

export { AccountView }
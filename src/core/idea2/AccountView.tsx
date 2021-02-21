import React from 'react';
import { PaymentHistoryView } from './PaymentHistoryView'
import { LoyaltyCardMemberView } from './LoyaltyCardMemberView'



interface AccountViewProps {
  payment: number
  cardHolder: boolean
  
  handleAccount: (payment: number, cardHolder: boolean) => void;
}

const AccountView: React.FC<AccountViewProps> = ({payment, cardHolder, handleAccount}) => {
  return (
    <div onClick={() => {handleAccount(payment, cardHolder)}}>
    <PaymentHistoryView payment={payment} />
    <LoyaltyCardMemberView isCardHolder={cardHolder} />
    </div>
  )
} 

export { AccountView }
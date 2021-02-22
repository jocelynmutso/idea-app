import React from 'react';
import { PaymentHistoryView } from './PaymentHistoryView';
import { LoyaltyCardMemberView } from './LoyaltyCardMemberView';
import { DomainModel } from './DomainModel';



interface AccountViewProps {
  account: DomainModel.Account
  payment: DomainModel.PaymentHistory
  handleAccount: (account: DomainModel.Account) => void;
}

const AccountView: React.FC<AccountViewProps> = ({account, handleAccount}) => {
  return (
    <div onClick={() => {handleAccount(account)}}>
    <PaymentHistoryView payment={payment]} />
    <LoyaltyCardMemberView isCardHolder={cardHolder} />
    </div>
  )
} 

export { AccountView }
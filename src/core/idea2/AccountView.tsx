import React from 'react';
import { LoyaltyCardMemberView } from './LoyaltyCardMemberView';
import { DomainModel } from './DomainModel';



interface AccountViewProps {
  account: DomainModel.Account;
  payment: DomainModel.Account;  
  
  handleAccount: (account: DomainModel.Account) => void;
  handlePayment: (payment: DomainModel.Account) =>  void;
  handlePurchase: (purchase: DomainModel.PurchaseHistory) => void;
}

const AccountView: React.FC<AccountViewProps> = ({account, payment, handleAccount, handlePayment}) => {
  return (
    <div>
      <div onClick={() => {handleAccount(account)}} />
      <div onClick={() => {handlePayment(payment)}} />
    </div>
  )
} 

export { AccountView }
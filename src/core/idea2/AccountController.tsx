import React from 'react';
import { ClientView } from './ClientView';
import { PurchaseHistoryView } from './PurchaseHistoryView';
import { AccountView } from './AccountView';

interface AccountControllerProps {

}


interface ClientDetails {
  name: string,
  id: string
}

interface AccountDetails {
  payment: number,
  cardHolder: boolean
}

interface PurchaseHistoryDetails {
  purchase: string
}

const AccountController: React.FC<AccountControllerProps> = ({}) => {
  
  const newClientDetails: ClientDetails = {name: "Amanda Jerimiah", id: "FA009"}
  const newAccountDetails: AccountDetails = {payment: 542, cardHolder: true}
  const newPurchaseDetails: PurchaseHistoryDetails = {purchase: "Stuffed Trout"}
  
  return (
    <div>
      <div>
        Client Account Details
        <ClientView name={newClientDetails.name} id={newClientDetails.id} />
        <AccountView payment={newAccountDetails.payment} cardHolder={newAccountDetails.cardHolder}/>
        <PurchaseHistoryView purchase = {newPurchaseDetails.purchase} />
      </div>
    </div>
  )
}

export { AccountController }
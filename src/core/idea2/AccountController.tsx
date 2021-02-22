import React from 'react';
import { ClientView } from './ClientView';
import { PurchaseHistoryView } from './PurchaseHistoryView';
import { AccountView } from './AccountView';
import { DomainModel } from './DomainModel';

interface AccountControllerProps {

}

const AccountController: React.FC<AccountControllerProps> = ({ }) => {

  const umbrella: DomainModel.Umbrella = {
    client: {name: "Amanda Jerimiah", id: "FA009" },
    account: { payment: 542, cardHolder: true, id: "ACCT: 4300ig" },
    purchase: { purchase: "Stuffed Trout", id: "PUR-4122/56" }
  }

  const handleClient = (client: DomainModel.Client) => {
    console.log("Client details: ", client)
  }
  
  const handleAccount = (payment: number, cardHolder: boolean) => {
    console.log("Account details: " + " Payment: " ,payment, " Cardholder?: ", cardHolder )
  }
  
  const handlePurchaseHistory = (purchase: string) => {
    console.log("Purchase history: " , purchase )
  }


  return (
    <div>
      <div>
        Client Account Details
        <ClientView client={umbrella.client} handleClient={handleClient}/>
        <AccountView payment={umbrella.account.payment} cardHolder={umbrella.account.cardHolder} handleAccount={handleAccount} />
        <PurchaseHistoryView purchase={umbrella.purchaseHistory.purchase} handlePurchaseHistory={handlePurchaseHistory}/>
      </div>
    </div>
  )
}

export { AccountController }
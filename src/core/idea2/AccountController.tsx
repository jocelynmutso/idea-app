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
    account: { payment: 542, id: "ACCT: 4300ig" },
    purchase: { purchase: "Stuffed Trout", id: "PUR-4122/56" }
  }

  const handleClient = (client: DomainModel.Client) => {
    console.log("Client details: ", client)
  }
  
  const handleAccount = (account: DomainModel.Account, payment: DomainModel.Account, id: DomainModel.Account) => {
    console.log("Account details: " + " Payment: " , payment)
  }
  
  const handlePayment = (payment: DomainModel.Account) => {
    console.log(payment)
  }
  
  const handlePurchaseHistory = (purchase: string) => {
    console.log("Purchase history: " , purchase )
  }
  
 

  return (
    <div>
      <div>
        Client Account Details
        <ClientView client={umbrella.client} handleClient={handleClient}/>
        <AccountView account={umbrella.account} payment={umbrella.account.payment} handleAccount={handleAccount} handlePayment={handlePayment} />
        <PurchaseHistoryView purchase={umbrella.purchaseHistory.purchase} handlePurchaseHistory={handlePurchaseHistory}/>
      </div>
    </div>
  )
}

export { AccountController }
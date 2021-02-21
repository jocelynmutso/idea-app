import React from 'react';
import { ClientView } from './ClientView';
import { PurchaseHistoryView } from './PurchaseHistoryView';
import { AccountView } from './AccountView';

interface AccountControllerProps {

}

interface AccountUmbrella {
  client: ClientDetails,
  account: AccountDetails,
  purchaseHistory: PurchaseHistoryDetails
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


const AccountController: React.FC<AccountControllerProps> = ({ }) => {

  const umbrella: AccountUmbrella = {
    client: {name: "Amanda Jerimiah", id: "FA009" },
    account: { payment: 542, cardHolder: true },
    purchaseHistory: { purchase: "Stuffed Trout" }
  }

  const handleClient = (name: string, id: string) => {
    console.log("Client details: ", name, id)
  }


  return (
    <div>
      <div>
        Client Account Details
        <ClientView name={umbrella.client.name} id={umbrella.client.id} handleClient={handleClient}/>
        <AccountView payment={umbrella.account.payment} cardHolder={umbrella.account.cardHolder} />
        <PurchaseHistoryView purchase={umbrella.purchaseHistory.purchase} />
      </div>
    </div>
  )
}

export { AccountController }
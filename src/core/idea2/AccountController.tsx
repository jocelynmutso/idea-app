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

  const handleClient = (client: ClientDetails) => {
    console.log("Client details: ", client)
  }


  return (
    <div>
      <div>
        Client Account Details
        <ClientView client={umbrella.client} handleClient={handleClient}/>
        <AccountView payment={umbrella.account.payment} cardHolder={umbrella.account.cardHolder} />
        <PurchaseHistoryView purchase={umbrella.purchaseHistory.purchase} />
      </div>
    </div>
  )
}

export { AccountController }
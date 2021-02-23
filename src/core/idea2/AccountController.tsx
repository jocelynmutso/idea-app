import React from 'react';
import { ClientView } from './ClientView';
import { AccountView } from './AccountView';
import { DomainModel } from './DomainModel';

interface AccountControllerProps {

}

const AccountController: React.FC<AccountControllerProps> = ({ }) => {

  const umbrella: DomainModel.Umbrella = {
    client: { name: "Amanda Jerimiah", id: "FA009" },
    account: { payment: 5432, id: "ACCT: 4300ig" },
    purchase: { purchase: "Stuffed Trout", id: "PUR-4122/56" }
  }

  const handleClient = (client: DomainModel.Client) => {
    console.log("Client details: ", client)
  }

  const handleAccount = (account: DomainModel.Account) => {
    console.log("Account details: ", account)
  }

  const handlePayment = (payment: number) => {
    console.log(payment)
  }

 
  return (
    <div>
      <div>
        Client Account Details
        <ClientView client={umbrella.client} handleClient={handleClient} />
        <AccountView account={umbrella.account} payment={umbrella.account.payment} handlePayment={handlePayment} handleAccount={handleAccount} />
      </div>
    </div>
  )
}

export { AccountController }
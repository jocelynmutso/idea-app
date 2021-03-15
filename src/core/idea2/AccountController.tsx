import React from 'react';
import { ClientView } from './ClientView';
import { AccountView } from './AccountView';
import { DomainModel } from './DomainModel';
import { useContext } from './Context';

interface AccountControllerProps {

}

const AccountController: React.FC<AccountControllerProps> = ({ }) => {

  const umbrella = useContext().umbrella;

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
import React from 'react';
import { AccountOwnerView } from './AccountOwnerView';
import { BankAccountView } from './BankAccountView';
import { AccountServicesView } from './AccountServicesView';
import { DomainModel } from './DomainModel';


interface BankAccountControllerProps {

}


const BankAccountController: React.FC<BankAccountControllerProps> = ({ }) => {

  const umbrella: DomainModel.Umbrella = {
    accountOwners: [{ name: "John Smith", id: "FD-332" }, { name: "Dan Smith", id: "FD-157" }, { name: "Duch Smith", id: "FD-100" }],
    account: { id: "gf-43321", accountNumber: "scct-09377", balance: 433},
    service: {service: "Hurricane Insurance Service"}

  }

  const handleAccountOwner = (owner: DomainModel.AccountOwner) => {
    console.log("Account owner details: ", owner.name, owner.id)
  }

  const handleService = (service: DomainModel.Service) => {
    console.log("Services: ", service)
  }

  return (
    <div>
      {umbrella.accountOwners.map((accountOwner, index) => <AccountOwnerView key={index} owner={accountOwner} handleAccountOwner={handleAccountOwner} />)}
      <BankAccountView account={umbrella.account} />
      <AccountServicesView service={umbrella.service} handleService={handleService} />
    </div>
  )
}


export { BankAccountController }
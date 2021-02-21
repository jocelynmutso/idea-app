import React from 'react';
import { AccountOwnerView } from './AccountOwnerView';
import { BankAccountView } from './BankAccountView';
import { AccountServicesView } from './AccountServicesView';


interface BankAccountControllerProps {

}

interface AccountUmbrella {
  ownerData: OwnerData[];
  servicesData: ServicesData;
  bankAccountData: BankAccountData;
}

interface OwnerData {
  name: string,
  id: string
}

interface ServicesData {
  serviceName: string
}

interface BankAccountData {
  account: {
    id: string,
    balance: number,
  }
}

const BankAccountController: React.FC<BankAccountControllerProps> = ({ }) => {

  const umbrella: AccountUmbrella = {
    ownerData: [{ name: "John Smith", id: "FD-332" }, { name: "Dan Smith", id: "FD-157" }, { name: "Duch Smith", id: "FD-100" }],
    bankAccountData: { account: { id: "gf-43321", balance: 433 }},
    servicesData: {serviceName: "Hurricane Insurance Service"}

  }

  const handleAccountOwner = (ownerData: OwnerData) => {
    console.log("Account owner details: ", ownerData.name, ownerData.id)
  }

  const handleService = (servicesData: ServicesData) => {
    console.log("Services: ", servicesData)
  }

  return (
    <div>
      {umbrella.ownerData.map((owner, index) => <AccountOwnerView key={index} owner={owner} handleAccountOwner={handleAccountOwner} />)}
      <BankAccountView account={umbrella.bankAccountData.account} />
      <AccountServicesView serviceType={umbrella.servicesData} handleService={handleService} />
    </div>
  )
}


export { BankAccountController }
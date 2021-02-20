import React from 'react';
import { AccountOwnerView } from './AccountOwnerView';
import { BankAccountView } from './BankAccountView';
import { AccountServicesView } from './AccountServicesView';


interface BankAccountControllerProps {

}

interface AccountUmbrella {
  ownerData: OwnerData;
  servicesData: ServicesData;
  bankAccountData: BankAccountData;
}

interface OwnerData {
  name: string,
  id: string
}

interface ServicesData {
  service: string
}

interface BankAccountData {
  account: {
    id: string,
    balance: number,
    service: string,
  }
}

const BankAccountController: React.FC<BankAccountControllerProps> = ({ }) => {

  const umbrella: AccountUmbrella = {
    ownerData: { name: "John Smith", id: "FD-332" },
    servicesData: { service: "Loan Auto-repayment" },
    bankAccountData: { account: { id: "gf-43321", balance: 433, service: "No Active Service" } }
  }


  return (
    <div>
      <AccountOwnerView owner={umbrella.ownerData} />
      <AccountServicesView service={umbrella.servicesData.service} />
      <BankAccountView account={umbrella.bankAccountData.account} />
    </div>
  )
}


export { BankAccountController }
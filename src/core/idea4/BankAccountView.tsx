import React from 'react';
import { AccountServicesView  } from './AccountServicesView';

interface BankAccountViewProps {
  account: {
   id: string,
   balance: number,
   service: string
  }
}

const BankAccountView: React.FC<BankAccountViewProps> = ({ account }) => {
  return (
    <div>
      Account id: {account.id}
      Account balance: {account.balance}
      Active services: {account.service}
      <AccountServicesView service={account.service} />
    </div>
  )
}


export { BankAccountView }
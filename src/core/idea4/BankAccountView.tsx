import React from 'react';
import {AccountServicesView} from './AccountServicesView';

interface BankAccountViewProps {
  id: string,
  balance: number,
  service: string
}

const BankAccountView: React.FC<BankAccountViewProps> = ({ id, balance, service }) => {
  return (
    <div>
      Account ID: {id}
      Balance: {balance}
      <AccountServicesView service={service} />
    </div>
  )
}


export { BankAccountView }
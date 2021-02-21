import React from 'react';

interface BankAccountViewProps {
  account: {
   id: string,
   balance: number
  }
}

const BankAccountView: React.FC<BankAccountViewProps> = ({ account }) => {
  return (
    <div>
      Account id: {account.id}
      Account balance: {account.balance}
    </div>
  )
}


export { BankAccountView }
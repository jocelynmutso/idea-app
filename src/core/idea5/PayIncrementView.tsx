import React from 'react';
import { DomainModel } from './DomainModel';


interface PayIncrementViewProps {
  amount: DomainModel.PayIncrement,
  handleAmount: (amount: DomainModel.PayIncrement) => void
}


const PayIncrementView: React.FC<PayIncrementViewProps> = ({ amount, handleAmount }) => {
  return (
    <div onClick={() => handleAmount(amount)} >
      Pay increment per hour of night shift: {amount.payIncrement}
    </div>
  )
}

export { PayIncrementView }
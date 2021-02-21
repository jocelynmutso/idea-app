import React from 'react';


interface PayIncrementViewProps {
  amount: number,
  handleAmount: (amount: number) => void
}


const PayIncrementView: React.FC<PayIncrementViewProps> = ({ amount, handleAmount }) => {
  return (
    <div onClick={() => handleAmount(amount)} >
      Pay increment per hour of night shift: {amount}
    </div>
  )
}

export { PayIncrementView }
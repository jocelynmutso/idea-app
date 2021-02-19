import React from 'react';


interface PayIncrementViewProps {
  amount: number
}


const PayIncrementView: React.FC<PayIncrementViewProps> = ({ amount }) => {
  return (
    <div>
      Pay increment per hour of night shift: {amount}
    </div>
  )
}

export { PayIncrementView }
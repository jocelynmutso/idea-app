import React from 'react';


interface PaymentHistoryViewProps {
  payment: number
}

const PaymentHistoryView: React.FC<PaymentHistoryViewProps> = ({ payment }) => {
  return (
    <div>
    Payment: {payment}
    </div>
  )

}


export { PaymentHistoryView }
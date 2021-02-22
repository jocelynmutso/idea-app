import React from 'react';
import { DomainModel } from './DomainModel';


interface PaymentHistoryViewProps {
  payment: DomainModel.PaymentHistory
}

const PaymentHistoryView: React.FC<PaymentHistoryViewProps> = ({ payment }) => {
  return (
    <div>
    Payment: {payment}
    </div>
  )

}


export { PaymentHistoryView }
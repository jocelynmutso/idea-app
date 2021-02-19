import React from 'react';


interface PurchaseHistoryViewProps {
  purchase: string,
}


const PurchaseHistoryView: React.FC<PurchaseHistoryViewProps> = ({purchase}) => {
  return (
    <div>
    Purchase: {purchase}
    </div>
  )
}

export { PurchaseHistoryView }
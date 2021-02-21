import React from 'react';


interface PurchaseHistoryViewProps {
  purchase: string,
  
  handlePurchaseHistory: (purchase: string) => void;
}


const PurchaseHistoryView: React.FC<PurchaseHistoryViewProps> = ({purchase, handlePurchaseHistory}) => {
  return (
    <div onClick={()=> {handlePurchaseHistory(purchase)}}>
    Purchase: {purchase}
    </div>
  )
}

export { PurchaseHistoryView }
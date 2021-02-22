import React from 'react';
import { DomainModel } from './DomainModel';


interface PurchaseHistoryViewProps {
  purchase: DomainModel.PurchaseHistory;
  handlePurchaseHistory: (purchase: DomainModel.PurchaseHistory) => void;
}


const PurchaseHistoryView: React.FC<PurchaseHistoryViewProps> = ({purchase, handlePurchaseHistory}) => {
  return (
    <div onClick={()=> {handlePurchaseHistory(purchase)}}>
    Purchase: {purchase}
    </div>
  )
}

export { PurchaseHistoryView }
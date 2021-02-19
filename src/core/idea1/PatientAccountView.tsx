import React from 'react';


interface PatientAccountViewProps {
  account: {
    amount: number,
    accountNumber: string
  }
}


const PatientAccountView: React.FC<PatientAccountViewProps> = ({account}) => {
  
  return (
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      account: {account.accountNumber}, amount: {account.amount}
    </div>
  )
  
  
}



export { PatientAccountView }
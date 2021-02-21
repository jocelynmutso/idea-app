import React from 'react';


interface PatientAccountViewProps {
    amount: number,
    accountNumber: string,
    handleAccount:(amount: number, accountNumber: string) => void;
}



const PatientAccountView: React.FC<PatientAccountViewProps> = ({amount, accountNumber, handleAccount}) => {
  
  return (
    <div onClick={() => handleAccount(amount, accountNumber)}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      account: {accountNumber}, amount: {amount}
    </div>
  )
  
  
}



export { PatientAccountView }
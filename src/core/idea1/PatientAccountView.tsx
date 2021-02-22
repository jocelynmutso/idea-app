import React from 'react';
import { DomainModel } from './DomainModel';


interface PatientAccountViewProps {
  account: DomainModel.PatientAccountDetails
  handleAccount: (account: DomainModel.PatientAccountDetails) => void;
}



const PatientAccountView: React.FC<PatientAccountViewProps> = ({ account, handleAccount }) => {

  return (
    <div onClick={() => handleAccount(account)}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      account: {account.accountNumber}, amount: {account.amount}
    </div>
  )


}



export { PatientAccountView }
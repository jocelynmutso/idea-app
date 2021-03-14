import React from 'react';
import { DomainModel } from './DomainModel';
import { useContext } from './Context'

interface PatientAccountViewProps {
  handleAccount: (account: DomainModel.PatientAccountDetails) => void;
}



const PatientAccountView: React.FC<PatientAccountViewProps> = ({ handleAccount }) => {
  const account = useContext().umbrella.account

  return (
    <div onClick={() => handleAccount(account)}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      account: {account.accountNumber}, amount: {account.amount}
    </div>
  )


}



export { PatientAccountView }
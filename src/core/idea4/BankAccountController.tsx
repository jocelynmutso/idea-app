import React from 'react';
import { AccountOwnerView } from './AccountOwnerView';
import { BankAccountView } from './BankAccountView';


interface BankAccountControllerProps {

}


const BankAccountController: React.FC<BankAccountControllerProps> = ({ }) => {
  return (
    <div>
      <AccountOwnerView ownerName={"Rick"} ownerId={"FG-99002"} />
      <BankAccountView id={"333ffff888igk"} balance={1200} service={"Loan auto-repayment"} />
    </div>
  )
}


export { BankAccountController }
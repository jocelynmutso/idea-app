import React from 'react';
import { ClientView } from './ClientView';
import { PurchaseHistoryView } from './PurchaseHistoryView';
import { AccountView } from './AccountView';

interface AccountControllerProps {

}

const AccountController: React.FC<AccountControllerProps> = () => {
  return (
    <div>
      <div>
        Client Account Details
        <ClientView name={"Jerry Smith"} id={"GF33455"} />
        <AccountView payment={450} cardHolder={true}/>
        <PurchaseHistoryView purchase = {"Stuffed animals"} />
      </div>
    </div>
  )
}

export { AccountController }
import React from 'react';
import { DomainModel } from './DomainModel';


interface AccountOwnerViewProps {
  owner: DomainModel.AccountOwner
  handleAccountOwner: (owner: DomainModel.AccountOwner) => void;
}

const AccountOwnerView: React.FC<AccountOwnerViewProps> = ({ owner, handleAccountOwner }) => {
  return (
    <div onClick={() => {handleAccountOwner(owner)}}>
      Account Owner Name: {owner.name},
      Account Owner ID: {owner.id}
    </div>
  )
}

export { AccountOwnerView }
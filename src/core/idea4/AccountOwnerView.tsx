import React from 'react';


interface AccountOwner {
  name: string,
  id: string,
}

interface AccountOwnerViewProps {
  owner: AccountOwner,
  handleAccountOwner: (owner: AccountOwner) => void;
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
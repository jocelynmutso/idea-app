import React from 'react';


interface AccountOwnerViewProps {
  owner: {
   name: string,
   id: string,
  }
}

const AccountOwnerView: React.FC<AccountOwnerViewProps> = ({ owner }) => {
  return (
    <div>
      Account Owner Name: {owner.name},
      Account Owner ID: {owner.id}
    </div>
  )
}

export { AccountOwnerView }
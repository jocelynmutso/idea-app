import React from 'react';


interface AccountOwnerViewProps {
  ownerName: string,
  ownerId: string,
}

const AccountOwnerView: React.FC<AccountOwnerViewProps> = ({ ownerName, ownerId }) => {
  return (
    <div>
      Account Owner Name: {ownerName},
      Account Owner ID: {ownerId}
    </div>
  )
}

export { AccountOwnerView }
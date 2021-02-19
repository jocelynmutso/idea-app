import React from 'react';


interface LoyaltyCardMemberViewProps {
  isCardHolder: boolean
}

const LoyaltyCardMemberView: React.FC<LoyaltyCardMemberViewProps> = ({ isCardHolder }) => {
  return (
    <div>
      Loyalty Card Holder: { isCardHolder + "" }
    </div>
  )
}

export { LoyaltyCardMemberView }
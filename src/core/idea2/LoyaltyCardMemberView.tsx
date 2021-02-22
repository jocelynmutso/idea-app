import React from 'react';


interface LoyaltyCardMemberViewProps {
  cardHolder: 
}

const LoyaltyCardMemberView: React.FC<LoyaltyCardMemberViewProps> = ({ cardHolder }) => {
  return (
    <div>
      Loyalty Card Holder: { cardHolder + "" }
    </div>
  )
}

export { LoyaltyCardMemberView }
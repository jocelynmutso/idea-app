import React from 'react';
import { DomainModel } from './DomainModel';


interface LoyaltyCardMemberViewProps {
  cardHolder: DomainModel.LoyaltyCardMember
}

const LoyaltyCardMemberView: React.FC<LoyaltyCardMemberViewProps> = ({ cardHolder }) => {
  return (
    <div>
      Loyalty Card Holder: { cardHolder + "" }
    </div>
  )
}

export { LoyaltyCardMemberView }
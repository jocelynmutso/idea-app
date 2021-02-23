import React from 'react';
import { PolicyDatesView } from './PolicyDatesView';
import { DomainModel } from './DomainModel';


interface PolicyViewProps {
  policy: DomainModel.Policy,
  handlePolicy:(policy: DomainModel.Policy) => void;

}


const PolicyView: React.FC<PolicyViewProps> = ({ policy, handlePolicy }) => {
  return (
    <div onClick={() => handlePolicy(policy)}>
      &nbsp; &nbsp; &nbsp; &nbsp;
      Policy Type: {policy.type},
      Policy Price: {policy.price}
      <PolicyDatesView date={policy.effectiveDate} />
    </div>
  )
}

export { PolicyView }
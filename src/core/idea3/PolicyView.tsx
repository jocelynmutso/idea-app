import React from 'react'
import { PolicyDatesView } from './PolicyDatesView'


interface Policy {
  type: string,
  price: number,
  effectiveDate: Date,
}

interface PolicyViewProps {
  policy: Policy,
  handlePolicy:(policy: Policy) => void;

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
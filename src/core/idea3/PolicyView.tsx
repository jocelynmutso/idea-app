import React from 'react'
import { PolicyDatesView } from './PolicyDatesView'


interface PolicyViewProps {
  policy: {
   type: string,
   price: number,
   effectiveDate: Date,
  }
  
}


const PolicyView: React.FC<PolicyViewProps> = ({ policy }) => {
  return (
    <div>
      &nbsp; &nbsp; &nbsp; &nbsp;
      Policy Type: {policy.type},
      Policy Price: {policy.price}
      <PolicyDatesView date={policy.effectiveDate} />
    </div>
  )
}

export { PolicyView }
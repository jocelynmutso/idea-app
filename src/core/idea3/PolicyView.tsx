import React from 'react'
import { PolicyDatesView } from './PolicyDatesView'


interface PolicyViewProps {
  type: string,
  price: number,
  effectiveDate: Date,
}


const PolicyView: React.FC<PolicyViewProps> = ({ type, price, effectiveDate }) => {
  return (
    <div>
      Policy Type: {type},
      Policy Price: {price}
      <PolicyDatesView date={effectiveDate} />
    </div>
  )
}

export { PolicyView }
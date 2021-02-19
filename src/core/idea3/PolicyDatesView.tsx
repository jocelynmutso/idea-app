import React from 'react';


interface PolicyDatesViewProps {
  date: Date
}

const PolicyDatesView: React.FC<PolicyDatesViewProps> = ({ date }) => {
  return (
    <div>
      Effective Date = {date.toISOString()}
    </div>
  )
}


export { PolicyDatesView }
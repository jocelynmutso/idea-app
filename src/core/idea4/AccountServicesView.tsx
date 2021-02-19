import React from 'react';


interface AccountServicesViewProps {
  service: string
}


const AccountServicesView: React.FC<AccountServicesViewProps> = ({ service }) => {
  return (
    <div>
      Active services: {service}
    </div>
  )
}


export { AccountServicesView }
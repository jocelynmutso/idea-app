import React from 'react';


interface Service {
  serviceName: string
}


interface AccountServicesViewProps {
 serviceType: Service
 handleService: (service: Service) => void;
}


const AccountServicesView: React.FC<AccountServicesViewProps> = ({ serviceType, handleService }) => {
  return (
    <div onClick={() => {handleService(serviceType)}}>
      Active services: {serviceType.serviceName}
    </div>
  )
}


export { AccountServicesView }
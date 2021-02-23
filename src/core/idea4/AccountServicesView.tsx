import React from 'react';
import { DomainModel } from './DomainModel';


interface AccountServicesViewProps {
 service: DomainModel.Service
 handleService: (service: DomainModel.Service) => void;
}


const AccountServicesView: React.FC<AccountServicesViewProps> = ({ service, handleService }) => {
  return (
    <div onClick={() => {handleService(service)}}>
      Active services: {service.service}
    </div>
  )
}


export { AccountServicesView }
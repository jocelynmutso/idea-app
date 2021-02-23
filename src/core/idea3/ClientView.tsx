import React from 'react';
import { DomainModel } from './DomainModel';



interface ClientViewProps {
  client: DomainModel.Client
  handleClient:(client: DomainModel.Client) => void;
 
}

const ClientView: React.FC<ClientViewProps> = ({ client, handleClient }) => {
  return (
    <div>
      <div>Policy Controller</div>
        <div onClick={() => handleClient(client)}>
          &nbsp; &nbsp; &nbsp; &nbsp;
          Client name: {client.name},
          Client id: {client.id}
        </div>
    </div>
  )
}

export { ClientView }
import React from 'react';
import { DomainModel } from './DomainModel';


interface ClientViewProps {
  client: DomainModel.Client;
  handleClient: (client: DomainModel.Client) => void;

}

const ClientView: React.FC<ClientViewProps> = ({ client, handleClient }) => {
  return (
    <div onClick={() => handleClient(client)}>
       Client Name: {client.name}
       Client ID: {client.id}
    </div>
  )
}


export { ClientView }
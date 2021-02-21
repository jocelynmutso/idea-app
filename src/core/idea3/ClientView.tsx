import React from 'react';

interface Client {
  name: string,
  id: string
}

interface ClientViewProps {
  client: Client
  handleClient:(client: Client) => void;
 
}

const ClientView: React.FC<ClientViewProps> = ({ client, handleClient }) => {
  return (
    <div>
      <div>Policy Controller</div>
        <div onClick={() => handleClient(client)}>
          &nbsp; &nbsp; &nbsp; &nbsp;
          Client name: {client.name},
          Client ID: {client.id}
        </div>
    </div>
  )
}

export { ClientView }
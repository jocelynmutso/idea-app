import React from 'react';


interface ClientViewProps {
  client: {
   name: string,
   id: string,
  }

  handleClient:(client: { name: string, id: string }) => void;

}

const ClientView: React.FC<ClientViewProps> = ({ client, handleClient}) => {
  return (
    <div onClick={()=> handleClient(client)}>
      Client Name: {client.name}
      Client ID: {client.id}
    </div>
  )
}


export { ClientView }
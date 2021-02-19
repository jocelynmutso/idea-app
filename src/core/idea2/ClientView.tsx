import React from 'react';


interface ClientViewProps {
  name: string,
  id: string,

}

const ClientView: React.FC<ClientViewProps> = ({ name, id }) => {
  return (
    <div>
      Client Name: {name}
    Client ID: {id}
    </div>
  )
}


export { ClientView }
import React from 'react';


interface ClientViewProps {
   name: string,
   id: string,
  

  handleClient:(name: string, id: string ) => void;

}

const ClientView: React.FC<ClientViewProps> = ({ name, id, handleClient}) => {
  return (
    <div onClick={()=> handleClient(name, id)}>
      Client Name: {name}
      Client ID: {id}
    </div>
  )
}


export { ClientView }
import React from 'react';



interface ClientViewProps {
  name: string,
  id: string
}

const ClientView: React.FC<ClientViewProps> = ({ name, id }) => {
  return (
    <div>
      <div>Policy Controller</div>
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          Client name: {name},
          Client ID: {id}
        </div>
    </div>
  )
}

export { ClientView }
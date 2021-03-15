import React from 'react';
import { ClientView } from './ClientView';
import { PolicyView } from './PolicyView';
import { DomainModel } from './DomainModel';
import { useContext } from './Context';

interface PolicyControllerProps {

}


const PolicyController: React.FC<PolicyControllerProps> = ({ }) => {
  
  const umbrella = useContext().umbrella;
  
  const handleClient = (client: DomainModel.Client) => {
    console.log("Client info: " + client.name, client.id)
  }

  const handlePolicy = (policy: DomainModel.Policy) => {
    console.log("Policy info: " + policy)
  }

  return (
    <div>
      <ClientView client={umbrella.client} handleClient={handleClient} />
      <PolicyView policy={umbrella.policy} handlePolicy={handlePolicy} />
    </div>
  )
}





export { PolicyController }
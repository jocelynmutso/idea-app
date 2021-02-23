import React from 'react';
import { ClientView } from './ClientView';
import { PolicyView } from './PolicyView';
import { DomainModel } from './DomainModel';

interface PolicyControllerProps {

}


const PolicyController: React.FC<PolicyControllerProps> = ({ }) => {

  const date = new Date(2019, 11, 13)

  const umbrella: DomainModel.Umbrella = {
    client: { name: "Morty Smith", id: "R2D2" },
    policy: { type: "fire", id: "FR-412", price: 5000, effectiveDate: date }
  }

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
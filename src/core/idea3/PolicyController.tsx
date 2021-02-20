import React from 'react';
import { ClientView } from './ClientView';
import { PolicyView } from './PolicyView'


interface PolicyControllerProps {

}

interface PolicyUmbrella {
  client: ClientData,
  policy: Policy,
}

interface ClientData {
  name: string
  id: string
}

interface Policy {
  policyInfo: {
    type: string,
    price: number,
    effectiveDate: Date
  }
}



const PolicyController: React.FC<PolicyControllerProps> = ({ }) => {

const date = new Date(2019, 11, 13)

const policyUmbrella: PolicyUmbrella = {
 client: {name: "Morty Smith", id: "R2D2"},
 policy: {policyInfo: {type: "fire", price: 5000, effectiveDate: date}}
}

  return (
    <div>
      <ClientView name={policyUmbrella.client.name} id={policyUmbrella.client.id} />
      <PolicyView policy={policyUmbrella.policy.policyInfo}/>
    </div>
  )
}

export { PolicyController }
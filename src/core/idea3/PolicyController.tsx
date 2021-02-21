import React from 'react';
import { ClientView } from './ClientView';
import { PolicyView } from './PolicyView'


interface PolicyControllerProps {

}

interface PolicyUmbrella {
  client: ClientData,
  policy: PolicyData,
}

interface ClientData {
  name: string
  id: string
}

interface PolicyData {
  policyInfo: {
    type: string,
    price: number,
    effectiveDate: Date
  }
}



const PolicyController: React.FC<PolicyControllerProps> = ({ }) => {

  const date = new Date(2019, 11, 13)

  const policyUmbrella: PolicyUmbrella = {
    client: { name: "Morty Smith", id: "R2D2" },
    policy: { policyInfo: { type: "fire", price: 5000, effectiveDate: date } }

  }

  const handleClient = (client: ClientData) => {
    console.log("Client info: " + client.name, client.id)
  }

  const handlePolicy = (arg: {type: string, price: number, effectiveDate: Date }) => {
    console.log("Policy info: " + arg)
  }

  return (
    <div>
      <ClientView client={policyUmbrella.client} handleClient={handleClient} />
      <PolicyView policy={policyUmbrella.policy.policyInfo} handlePolicy={handlePolicy} />
    </div>
  )
}

export { PolicyController }
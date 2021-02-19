import React from 'react';
import { ClientView } from './ClientView';
import { PolicyView } from './PolicyView'


interface PolicyControllerProps {

}

const PolicyController: React.FC<PolicyControllerProps> = ({ }) => {
const date = new Date(2019, 11, 13)

  return (
    <div>
      <ClientView name={"john"} id={"YF-440"} />
      <PolicyView type={"fire policy"} price={500} effectiveDate={date} />
    </div>
  )
}

export { PolicyController }
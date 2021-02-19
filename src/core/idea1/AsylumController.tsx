import React from 'react';
import {PatientView} from './PatientView'

interface AsylumControllerProps {
  
}


const AsylumController: React.FC<AsylumControllerProps> = ({}) => {
  
  return (
    <div>
      <div>Welcome to the asylum</div>
      <PatientView name="john doe" />
      <PatientView name="jane doe" />
      <PatientView name="jane smith" />
    </div>
  )
}



export { AsylumController }
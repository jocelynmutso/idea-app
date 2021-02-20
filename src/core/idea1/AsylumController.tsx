import React from 'react';
import { PatientAccountView } from './PatientAccountView';
import {PatientView} from './PatientView'

interface AsylumControllerProps {
  
}

interface PatientDetails {
  name: string
}

interface PatientAccountDetails {
  account: {
    amount: number,
    accountNumber: string
  }
}

interface TreatmentDetails {
  type: string
}


const AsylumController: React.FC<AsylumControllerProps> = ({}) => {
  
  const newPatient: PatientDetails = {name: "Crazy Jebediah"};
  const newPatient1: PatientDetails = {name: "Lunatic Larry"};
  const newPatient2: PatientDetails = {name: "Insane Ivan"};
  
  const jebediahAccount: PatientAccountDetails = {
    account: {
      amount: 500,
      accountNumber: "JB-00331"
    }
  }
  
  const larryAccount: PatientAccountDetails = {
    account: {
      amount: 4110,
      accountNumber: "LL-33122"
    }
  }
  
  const ivanAccount: PatientAccountDetails = {
    account: {
      amount: 10,
      accountNumber: "II-512"
    }
  }
  
  const treatment: TreatmentDetails = {type: "electroshock therapy"}
  
  
  
  
  return (
    <div>
      <div>Welcome to the asylum</div>
      <PatientView name={newPatient.name} treatment={treatment.type}/>
        <PatientAccountView account={jebediahAccount.account} />
            
      <PatientView name={newPatient1.name} treatment={treatment.type} />
        <PatientAccountView account={larryAccount.account}/>
        
      <PatientView name={newPatient2.name} treatment={treatment.type}/>
        <PatientAccountView account={ivanAccount.account} />
      

    </div>
  )
}



export { AsylumController }
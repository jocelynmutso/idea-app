import React from 'react';
import { PatientAccountView } from './PatientAccountView';
import { PatientView } from './PatientView'
import { TreatmentView } from './TreatmentView';

interface AsylumControllerProps {

}

interface Umbrella {
  patients: PatientDetails[],
  account: PatientAccountDetails,
  treatment: TreatmentDetails,
}

interface PatientDetails {
  name: string
}

interface PatientAccountDetails {
  amount: number,
  accountNumber: string

}

interface TreatmentDetails {
  type: string
}


const AsylumController: React.FC<AsylumControllerProps> = ({ }) => {

  const umbrella: Umbrella = {

    patients: [
      { name: "Crazy Jebediah" },
      { name: "Lunatic Larry" },
      { name: "Insane Ivan" }
    ],

    account: {amount: 5402, accountNumber: "Fg3048ea"},
    
    treatment: {type: "hydrotherapy"}
  }

  const handlePatient = (name: string) => {
    console.log("Patient Name ", name)
  }
  
  const handleAccount = (amount: number, accountNumber: string) => {
    console.log("Account Balance: " , amount, "Account number: ", accountNumber )
  }
  
  const handleTreatment = (treatment: string) => {
    console.log("Treatment selected: " , treatment)
  }


  return (
    <div>
      <div>Welcome to the asylum</div>
      {umbrella.patients.map((patient, index) => (<PatientView name={patient.name} key={index} handlePatient={handlePatient}/>))}
      <PatientAccountView amount={umbrella.account.amount} accountNumber={umbrella.account.accountNumber} handleAccount={handleAccount} />
      <TreatmentView treatmentType={umbrella.treatment.type} handleTreatment={handleTreatment}/>
    </div>
  )
}



export { AsylumController }
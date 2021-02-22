import React from 'react';
import { PatientAccountView } from './PatientAccountView';
import { PatientView } from './PatientView'
import { TreatmentView } from './TreatmentView';
import { DomainModel } from './DomainModel';

interface AsylumControllerProps {

}

const AsylumController: React.FC<AsylumControllerProps> = ({ }) => {

  const umbrella: DomainModel.Umbrella = {

    patients: [
    {name: "Crazy Jebadiah", id: "6533388fff" },
    {name: "Lunactic Larry", id: "4262h7774" },
    {name: "Insane Ivan", id: "774hhfa723" },
    ],

    account: { amount: 5402, accountNumber: "Fg3048ea" },

    treatment: { type: "hydrotherapy" }
  }

  const handlePatient = (patients: DomainModel.PatientDetails) => {
    console.log("Patient Name ", patients)
  }

  const handleAccount = (amount: number, accountNumber: string) => {
    console.log("Account Balance: ", amount, "Account number: ", accountNumber)
  }

  const handleTreatment = (treatment: string) => {
    console.log("Treatment selected: ", treatment)
  }


  return (
    <div>
      <div>Welcome to the asylum</div>
      {umbrella.patients.map((patient, index) => (<PatientView patients={patient} key={index} handlePatient={handlePatient} />))}
      <PatientAccountView amount={umbrella.account.amount} accountNumber={umbrella.account.accountNumber} handleAccount={handleAccount} />
      <TreatmentView treatmentType={umbrella.treatment.type} handleTreatment={handleTreatment} />
    </div>
  )
}



export { AsylumController }
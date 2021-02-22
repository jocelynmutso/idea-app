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

    account: { amount: 5402, id: "654", accountNumber: "Fg3048ea" },

    treatment: { type: "hydrotherapy", id: "TR-001"}
  }

  const handlePatient = (patients: DomainModel.PatientDetails) => {
    console.log("Patient Name ", patients)
  }

  const handleAccount = (account: DomainModel.PatientAccountDetails) => {
    console.log("Account details: ", account)
  }

  const handleTreatment = (treatment: DomainModel.TreatmentDetails) => {
    console.log("Treatment selected: ", treatment)
  }


  return (
    <div>
      <div>Welcome to the asylum</div>
      {umbrella.patients.map((patient, index) => (<PatientView patient={patient} key={index} handlePatient={handlePatient} />))}
      <PatientAccountView account={umbrella.account} handleAccount={handleAccount} />
      <TreatmentView treatment={umbrella.treatment} handleTreatment={handleTreatment} />
    </div>
  )
}



export { AsylumController }
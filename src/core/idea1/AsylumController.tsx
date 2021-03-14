import React from 'react';
import { PatientAccountView } from './PatientAccountView';
import { PatientView } from './PatientView'
import { TreatmentView } from './TreatmentView';
import { DomainModel } from './DomainModel';
import { useContext } from './Context'

interface AsylumControllerProps {

}

const AsylumController: React.FC<AsylumControllerProps> = ({ }) => {

  const umbrella = useContext().umbrella;


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
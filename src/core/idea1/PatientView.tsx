import React from 'react';
import { DomainModel } from './DomainModel';


interface PatientViewProps {
  patient: DomainModel.PatientDetails,
  handlePatient: (patients: DomainModel.PatientDetails) => void;
}


const PatientView: React.FC<PatientViewProps> = ({ patient, handlePatient }) => {

  return (
    <div onClick={() => handlePatient(patient)}>
      <div>
        Patient Name: {patient.name}
        Patient ID: {patient.id}
      </div>
    </div>
  )
}



export { PatientView }
import React from 'react';
import {DomainModel} from './DomainModel';


interface PatientViewProps {
 patients: DomainModel.PatientDetails,
 handlePatient: (patients: DomainModel.PatientDetails) => void;
}


const PatientView: React.FC<PatientViewProps> = ({ patients, handlePatient }) => {

  return (
    <div onClick={() => handlePatient(patients)}>
    </div>
  )
}



export { PatientView }
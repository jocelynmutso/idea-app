import React from 'react';
import {TreatmentView} from './TreatmentView'



interface PatientViewProps {
  name: string
  treatment: string
}


const PatientView: React.FC<PatientViewProps> = ({ name, treatment }) => {

  return (
    <div>
      <div>patient: {name}</div>
      <TreatmentView treatmentType={treatment} />
    </div>
  )
}



export { PatientView }
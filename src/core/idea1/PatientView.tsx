import React from 'react';
import { PatientAccountView } from './PatientAccountView'
import {TreatmentView} from './TreatmentView'


interface PatientViewProps {
  name: string
}


const PatientView: React.FC<PatientViewProps> = ({ name }) => {

  return (
    <div>
      <div>patient: {name}</div>
      <PatientAccountView account={{ amount: 500, accountNumber: '18fdhjf' }} />
      <TreatmentView treatmentType={"electro-shock therapy"} />
    </div>
  )


}



export { PatientView }
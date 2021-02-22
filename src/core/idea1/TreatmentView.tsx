import React from 'react';
import { DomainModel } from './DomainModel'


interface TreatmentViewProps {
  treatment: DomainModel.TreatmentDetails
  handleTreatment:(treatment: DomainModel.TreatmentDetails) => void;
}


const TreatmentView: React.FC<TreatmentViewProps> = ({ treatment, handleTreatment }) => {
  return (
    <div onClick={() => {handleTreatment(treatment)}}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Treatment type: {treatment}
    </div>
  )
}


export { TreatmentView }
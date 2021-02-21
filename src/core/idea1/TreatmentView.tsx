import React from 'react';


interface TreatmentViewProps {
  treatmentType: string,
  handleTreatment:(treatmentType: string) => void;
}


const TreatmentView: React.FC<TreatmentViewProps> = ({ treatmentType, handleTreatment }) => {
  return (
    <div onClick={() => {handleTreatment(treatmentType)}}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Treatment type: {treatmentType}
    </div>
  )
}


export { TreatmentView }
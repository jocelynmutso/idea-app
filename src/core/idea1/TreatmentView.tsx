import React from 'react';


interface TreatmentViewProps {
  treatmentType: string,

}


const TreatmentView: React.FC<TreatmentViewProps> = ({ treatmentType }) => {
  return (
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Treatment type: {treatmentType}
    </div>
  )
}


export { TreatmentView }
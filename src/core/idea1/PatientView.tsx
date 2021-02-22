import React from 'react';


interface PatientViewProps {
  name: string
  handlePatient: (name: string) => void;
}


const PatientView: React.FC<PatientViewProps> = ({ name, handlePatient }) => {

  return (
    <div onClick={() => handlePatient(name)}>
      <div>patient: {name}</div>
    </div>
  )
}



export { PatientView }
import React from 'react';


interface EmployeeViewProps {
  name: string,
  id: string,
  availableShifts: string[],
  hourlyWage: number
}

const EmployeeView: React.FC<EmployeeViewProps> = ({ name, id, availableShifts, hourlyWage }) => {
  return (
    <div>
      Employee name: {name},
      ID: {id},
      Available shifts: {availableShifts.join(", ")},
      Hourly wage: {hourlyWage.toPrecision(4)}
    </div>
  )
}


export { EmployeeView }
import React from 'react';


interface EmployeeViewProps {
  employee: {
    name: string,
    id: string,
    availableShifts: string[],
    hourlyWage: number
  }
}

const EmployeeView: React.FC<EmployeeViewProps> = ({employee}) => {
  return (
    <div>
      Employee name: {employee.name},
      ID: {employee.id},
      Available shifts: {employee.availableShifts.join(", ")},
      Hourly wage: {employee.hourlyWage.toPrecision(4)}
    </div>
  )
}


export { EmployeeView }
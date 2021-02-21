import React from 'react';


 interface Employee {
  name: string,
  id: string,
  availableShifts: string[],
  hourlyWage: number
}

interface EmployeeViewProps {
  employee: Employee,
  handleEmployee: (employee: Employee) => void;
}

const EmployeeView: React.FC<EmployeeViewProps> = ({employee, handleEmployee}) => {
 
  
  return (
    <div onClick={() => handleEmployee(employee)}>
      Employee name: {employee.name},
      ID: {employee.id},
      Available shifts: {employee.availableShifts.join(", ")},
      Hourly wage: {employee.hourlyWage.toPrecision(4)}
    </div>
  )
}


export { EmployeeView }
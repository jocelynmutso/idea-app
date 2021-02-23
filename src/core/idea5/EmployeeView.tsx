import React from 'react';
import { DomainModel } from './DomainModel';


interface EmployeeViewProps {
  employee: DomainModel.Employee,
  handleEmployee: (employee: DomainModel.Employee) => void;
}

const EmployeeView: React.FC<EmployeeViewProps> = ({ employee, handleEmployee }) => {


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
import React from 'react';
import { EmployeeView } from './EmployeeView';
import { ShiftsView } from './ShiftsView';
import { PayIncrementView } from './PayIncrementView';
import { DomainModel } from './DomainModel';



interface ShiftControllerProps {

}


const ShiftController: React.FC<ShiftControllerProps> = ({ }) => {
  const umbrella: DomainModel.Umbrella = {
    employees: [
      { name: "Jenny Carver", id: "0043g", availableShifts: ["morning", "afternoon"], hourlyWage: 9.00 },
      { name: "Adam Smith", id: "02982f", availableShifts: ["morning", "evening"], hourlyWage: 8.00 },
      { name: "Shaniqua Apple", id: "0323h", availableShifts: ["morning", "evening"], hourlyWage: 11.50 },
    ],
    shifts: [
      { morning: "4am-12pm", afternoon: "12pm-9pm", night: "9pm-4am" }
    ],
    increment: { payIncrement: 1.75 }
  }

  const handlePayIncrement = (payIncrement: DomainModel.PayIncrement) => {
    console.log("payincrement", payIncrement);
  }

  const handleEmployee = (employee: DomainModel.Employee) => {
    console.log("employee Data", employee)
  }

  const handleShift = (shift: DomainModel.Shift) => {
    console.log("Available Shifts: ", shift)
  }

  return (
    <div>
      {umbrella.employees.map((empl, index) => (<EmployeeView employee={empl} key={index} handleEmployee={handleEmployee} />))}
      {umbrella.shifts.map((shift, index) => (<ShiftsView shift={shift} key={index} handleShift={handleShift} />))}
      <PayIncrementView amount={umbrella.increment} handleAmount={handlePayIncrement} />
    </div>
  )
}

export { ShiftController }
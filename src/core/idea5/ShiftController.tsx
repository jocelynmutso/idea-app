import React from 'react';
import { EmployeeView } from './EmployeeView';
import { ShiftsView } from './ShiftsView';
import { PayIncrementView } from './PayIncrementView';



interface ShiftControllerProps {

}

interface Umbrella {
  employees: EmployeeData[];
  pay: PayData;
  shifts: ShiftData[];
}

interface EmployeeData {
  id: string;
  name: string;
  availableShifts: string[];
  hourlyWage: number;
}

interface ShiftData {
  morning: string;
  afternoon: string;
  night: string;
}

interface PayData {
  payIncrement: number
}


const ShiftController: React.FC<ShiftControllerProps> = ({ }) => {
  const umbrella: Umbrella = {
    employees: [
      {name: "Jenny Carver",   id: "0043g", availableShifts: ["morning", "afternoon"], hourlyWage: 9.00},
      {name: "Adam Smith",     id: "02982f",availableShifts: ["morning", "evening"],   hourlyWage: 8.00},
      {name: "Shaniqua Apple", id: "0323h", availableShifts: ["morning", "evening"],   hourlyWage: 11.50},
    ],
    shifts: [
      {morning: "4am-12pm", afternoon: "12pm-9pm", night: "9pm-4am" }
    ],
    pay: {
      payIncrement: 1.75
    }
  }
  
  
  return (
    <div>
      {umbrella.employees.map(empl => (<EmployeeView employee={empl}/>))}
      {umbrella.shifts.map(shift => (<ShiftsView shift={shift} /> ))}
      <PayIncrementView amount={umbrella.pay.payIncrement}/>
    </div>
  )
}

export { ShiftController }
import React from 'react';
import { EmployeeView } from './EmployeeView';
import { ShiftsView } from './ShiftsView';
import { PayIncrementView } from './PayIncrementView';



interface ShiftControllerProps {

}

const ShiftController: React.FC<ShiftControllerProps> = ({ }) => {
  return (
    <div>
      <EmployeeView name={"Jenny Carver"} id={"0043g"} availableShifts={["morning", "afternoon"]} hourlyWage={9.00} />
      <EmployeeView name={"Adam Smith"} id={"02982f"} availableShifts={["afternoon", "evening"]} hourlyWage={8.00} />
      <EmployeeView name={"Shaniqua Apple"} id={"0323h"} availableShifts={["morning", "evening"]} hourlyWage={11.50} />
        <ShiftsView morning={"4am to 12pm"} afternoon={"12pm-9pm"} night={"9pm to 4am"} />
          <PayIncrementView amount={1.50}/>
        
      
    </div>
  )
}

export { ShiftController }
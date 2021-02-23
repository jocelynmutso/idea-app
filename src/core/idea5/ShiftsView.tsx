import React from 'react';
import { DomainModel } from './DomainModel';



interface ShiftsViewProps {
  shift: DomainModel.Shift,
  handleShift: (shiftS: DomainModel.Shift) => void;
}


const ShiftsView: React.FC<ShiftsViewProps> = ({ shift, handleShift }) => {
  return (
    <div onClick={() => handleShift(shift)}>
      Available Shifts:
      Morning: {shift.morning},
      Afternoon: {shift.afternoon}
      Night: {shift.night}

    </div>
  )
}


export { ShiftsView }
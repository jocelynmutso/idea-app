import React from 'react';


interface Shift {
  morning: string,
  afternoon: string,
  night: string,
}

interface ShiftsViewProps {
  shift: Shift,
  handleShift: (shift: Shift) => void;
}


const ShiftsView: React.FC<ShiftsViewProps> = ({shift, handleShift }) => {
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
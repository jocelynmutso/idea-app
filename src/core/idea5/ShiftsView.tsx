import React from 'react';


interface ShiftsViewProps {
  shift: {
    morning: string,
    afternoon: string,
    night: string
  }

}

const ShiftsView: React.FC<ShiftsViewProps> = ({ shift }) => {
  return (
    <div>
      Available Shifts:
      Morning: {shift.morning},
      Afternoon: {shift.afternoon},
      Night: {shift.night}
    </div>
  )
}


export { ShiftsView }
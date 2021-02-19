import React from 'react';


interface ShiftsViewProps {
  morning: string,
  afternoon: string,
  night: string
}

const ShiftsView: React.FC<ShiftsViewProps> = ({ morning, afternoon, night }) => {
  return (
    <div>
      Available Shifts:
      Morning: {morning},
      Afternoon: {afternoon},
      Night: {night}
    </div>
  )
}


export { ShiftsView }
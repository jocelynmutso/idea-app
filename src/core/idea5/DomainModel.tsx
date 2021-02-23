declare namespace DomainModel {


interface Umbrella {
  employees: Employee[];
  shifts: Shift[];
  increment: PayIncrement
}

interface Employee {
  id: string;
  name: string;
  availableShifts: string[];
  hourlyWage: number
}

interface Shift {
  morning: string;
  afternoon: string;
  night: string
}

interface PayIncrement {
  payIncrement: number
}


}

export type { DomainModel }
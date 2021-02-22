
declare namespace DomainModel {

  interface Umbrella {
    patients: PatientDetails[],
    account: PatientAccountDetails,
    treatment: TreatmentDetails
  }

  interface PatientDetails {
    name: string,
    id: string
  }

  interface PatientAccountDetails {
    amount: number,
    accountNumber: string,
    id: string
  }

  interface TreatmentDetails {
    type: string,
    id: string
  }




}

export type { DomainModel }

declare namespace DomainModel {


  interface Umbrella {
    client: Client,
    account: Account,
    purchase: PurchaseHistory
  }

  interface Client {
    name: string,
    id: string
  }

  interface Account {
    payment: number,
    cardHolder: boolean,
    id: string
  }

  interface PurchaseHistory {
    purchase: string
  }
  
  interface PaymentHistory {
    payment: number
  }


}

export type { DomainModel }

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
    id: string
  }

  interface PurchaseHistory {
    purchase: string,
    id: string,
  }
  
  interface LoyaltyCardMember {
     cardHolder: boolean,
  }
  


}

export type { DomainModel }
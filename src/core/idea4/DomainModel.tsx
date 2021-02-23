declare namespace DomainModel {


interface Umbrella {
  accountOwners: AccountOwner[],
  account: Account,
  service: Service
}

interface AccountOwner {
  name: string,
  id: string
}

interface Account {
  accountNumber: string,
  id: string,
  balance: number
}

interface Service {
  service: string
}


}

export type { DomainModel }
declare namespace DomainModel {


interface Umbrella {
  policy: Policy,
  client: Client
}

interface Policy {
  type: string,
  id: string,
  price: number,
  effectiveDate: Date
}

interface Client {
  name: string,
  id: string
}


}


export type { DomainModel }
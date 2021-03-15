import { DomainModel } from './DomainModel';

const date = new Date(2019, 11, 13)

const umbrella: DomainModel.Umbrella = {
  client: { name: "Morty Smith", id: "R2D2" },
  policy: { type: "fire", id: "FR-412", price: 5000, effectiveDate: date }
}

async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

class API {
  constructor(creds: string) {
   console.log("Built API for Idea3")
  }
  async getUmbrella(): Promise<DomainModel.Umbrella> {
    await wait(6000)
    
    return umbrella;
  }
}

export default API



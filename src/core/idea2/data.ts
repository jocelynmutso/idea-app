import { DomainModel } from './DomainModel';


const umbrella: DomainModel.Umbrella = {
  client: { name: "Amanda Jerimiah", id: "FA009" },
  account: { payment: 5432, id: "ACCT: 4300ig" },
  purchase: { purchase: "Stuffed Trout", id: "PUR-4122/56" }
}

async function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}


class API {
  constructor(creds: string) {
    console.log("Created API", creds)
  }
  async getUmbrella(): Promise<DomainModel.Umbrella> {
    await wait(6000);

    return umbrella
  }
}



export default API
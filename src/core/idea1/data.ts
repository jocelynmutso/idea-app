import { DomainModel } from './DomainModel';

const umbrella: DomainModel.Umbrella = {
  patients: [
    { name: "Crazy Jebadiah", id: "6533388fff" },
    { name: "Lunactic Larry", id: "4262h7774" },
    { name: "Insane Ivan", id: "774hhfa723" },
  ],
  account: { amount: 5402, id: "654", accountNumber: "Fg3048ea" },
  treatment: { type: "hydrotherapy", id: "TR-001" }
}

async function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

class API {
  constructor(creds: string) {
    console.log("created API", creds);
  }
  async getUmbrella(): Promise<DomainModel.Umbrella> {
    await wait(6000);
    
    return umbrella;
  }
}

export default API;

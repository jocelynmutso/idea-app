import React from 'react';

import { DomainModel } from './DomainModel';
import API from './data';


type ContextType = {
  umbrella: DomainModel.Umbrella;
}

const initData = {} as DomainModel.Umbrella;
const Context = React.createContext<ContextType>({
  umbrella: initData
})


interface ProviderProps {
  children: React.ReactNode,
  creds: string
}

const Provider: React.FC<ProviderProps> = ({ children, creds }) => {
  const api: API = React.useMemo(() => new API(creds), [creds])
  const [data, setData] = React.useState<DomainModel.Umbrella>();


  React.useEffect(() => {

    console.log("loading context idea1")

    api.getUmbrella().then(umbrella => setData(umbrella))

  }, [setData, api]);



  return (
    <Context.Provider value={{ umbrella: data ? data : initData }}>
      { data ? children : <div>loading idea1...</div>}
    </Context.Provider>

  )
}

const useContext = () => {
  const result: ContextType = React.useContext(Context);
  return result;
}

export { Provider, useContext }

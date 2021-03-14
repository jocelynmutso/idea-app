import React from 'react';

import {DomainModel} from './DomainModel';
import API from './data'


type ContextType = {
  umbrella: DomainModel.Umbrella;
}

const emptyFake = {} as DomainModel.Umbrella;
const Context = React.createContext<ContextType>({
  umbrella: emptyFake
})

interface ProviderProps {
  creds: string;
  children: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({children, creds}) => {
  const api: API = React.useMemo(() => new API(creds), [creds])
  const [data, setData] = React.useState<DomainModel.Umbrella>();
  
  React.useEffect(() => {
    console.log("loading data");
    api.getUmbrella().then(umbrella => setData(umbrella))
  }, [setData, api]);
  
  console.log("rendering context");
  
  return (
    <Context.Provider value={{umbrella: data ? data : emptyFake}}>
      {data ? children : "loading...." }
    </Context.Provider>
  )
}

const useContext = () => {
  const result: ContextType = React.useContext(Context);
  return result;
}

export { Provider, useContext };
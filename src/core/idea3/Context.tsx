import React from 'react';
import { DomainModel } from './DomainModel';
import API from './data';



type ContextType = {
  umbrella: DomainModel.Umbrella
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
  const api: API = React.useMemo(() => new API (creds), [creds]); 
  const [data, setData] = React.useState<DomainModel.Umbrella>(); 
 
  React.useEffect(() => {
    api.getUmbrella().then(umbrella => setData(umbrella))
  }, [setData, api])
  
  
  return (
  <Context.Provider value={{umbrella: data ? data: initData}}>
    {data ? children : "loading idea4..."}
  </Context.Provider>  
  )
}

const useContext = () => {
  const result: ContextType = React.useContext(Context)
  return result;
}

export { useContext, Provider }
import { createContext, useState, useEffect } from "react";
const URL = 'http://localhost:9000'

const CitiesContext = createContext();

function CitiesProvider({children}) {
      const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading]= useState(false);

  useEffect(()=>{
    async function fetchCities(){
      try {
      setIsLoading(true);
      const res= await fetch(`${URL}/cities`);
      const data = await res.json();
      setCities(data);
    } catch {
      alert('there was an error loading data')
    } finally {
      setIsLoading(false);
    }
  }
  fetchCities();
  },[])

  return <CitiesContext.Provider value={{cities, isLoading}}> 
    {children}
  </CitiesContext.Provider>
}

export {CitiesContext, CitiesProvider}
import { createContext, useState, useEffect, useContext } from "react";
const URL = 'http://localhost:9000'

const CitiesContext = createContext();

function CitiesProvider({children}) {
      const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading]= useState(false);
  const [currentCity, setCurrentCity] = useState({});

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

  async function getCity(id) {
    try {
        setIsLoading(true);
        const res = await fetch(`${URL}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data)
    } catch {
        alert("there was an error loading data...")
    } finally{
        setIsLoading(false);
    }
  }

  return <CitiesContext.Provider 
  value={{
    cities, 
    isLoading,
    currentCity,
    getCity
    }}> 
    {children}
  </CitiesContext.Provider>
}

function useCities(){
    const context = useContext(CitiesContext);
    if(context===undefined) throw new Error("CitiesContext was used outside the cities provider");
    
    return context
}
export {useCities, CitiesProvider}
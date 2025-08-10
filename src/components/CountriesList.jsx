import PropTypes from 'prop-types'
import styles from './CountriesList.module.css'
import Spinner from './Spinner'
import Message from './Message'
import CountryItem from './CountryItem'
import { useCities } from '../context/CitiesContext'

function CountriesList() {
    const {cities, isLoading} = useCities();
    if(isLoading) return <Spinner />
    if(!cities.length) return <Message message="Add your first city clicking on a city on the map"/>
    
  const countries = cities.reduce((arr, city) => {
  // 1. Check the correct property: el.country
  // 2. Check if the country is NOT already included: !arr.map(...).includes(...)
  if (!arr.map((el) => el.country).includes(city.country)) {
    // If it's a new country, add it to our array
    return [...arr, { country: city.country, emoji: city.emoji }];
  } else {
    // If we've already seen this country, do nothing and return the array as is
    return arr;
  }
}, []);
    return (
        <ul className={styles.countriesList}>
           {countries.map(country=> <CountryItem country={country} key={country.country}/>)}
        </ul>
    )
}


CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CountriesList

import PropTypes from "prop-types";
import styles from './CityItem.module.css'

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));


function CityItem({city}) {
    const {cityName, emoji, date} = city;
    return (
        <li className={styles.cityItem}>
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{formatDate(date)}</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    )
}

CityItem.propTypes = {
    city: PropTypes.shape({
        cityName: PropTypes.string,
        emoji: PropTypes.string,
        date: PropTypes.string,
        // Add other properties of the city object here
    })
};
export default CityItem

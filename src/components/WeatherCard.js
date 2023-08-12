import React from 'react';
import styles from './WeatherCard.module.css';


const WeatherCard = ({ weather }) => {
    return (
        <div className={styles.weatherCard}>
          <h3>{weather.date} - {weather.time}</h3> {/* Display the time here */}
          <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="Weather Icon" />
          <p>{weather.description}</p>
          <p>Temperature: {weather.temp}°F</p>
        </div>
    );
};

export default WeatherCard;

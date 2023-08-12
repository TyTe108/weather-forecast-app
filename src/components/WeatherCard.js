import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h3>{weather.date}</h3>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="Weather Icon" />
      <p>{weather.description}</p>
      <p>Temperature: {weather.temp}°C</p>
    </div>
  );
};

export default WeatherCard;

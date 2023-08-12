import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import styles from './components/App.module.css';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeather = async (city) => {
    const API_KEY = '1abea428bf2a65fd7d8e5def6a9deaef';
    //const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`);
    if (!response.ok) {
      console.error("Error fetching weather data:", await response.text());
      alert("City not found. Please try a different city or use a zip code.");
      return; // Exit the function if there's an error
    }
  
    const data = await response.json(); // Read the response body only once
  
    // Transform the data to a more usable format
    const transformedData = data.list.map(item => ({
      date: new Date(item.dt * 1000).toLocaleDateString(),
      time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // This line adds the time
      temp: item.main.temp,
      description: item.weather[0].description,
      icon: item.weather[0].icon
  }));
    setWeatherData(transformedData);
  };
  

  return (
    <div className={styles.app}>
      <SearchBar onSearch={fetchWeather} />
      {weatherData.map((weather, index) => (
        <WeatherCard key={index} weather={weather} />
      ))}
    </div>
  );
};

export default App;

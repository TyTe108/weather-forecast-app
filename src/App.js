import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeather = async (city) => {
    const API_KEY = '1abea428bf2a65fd7d8e5def6a9deaef';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await response.json();

    console.log(data);
    if (response.ok) {
      const data = await response.json();
      // rest of the code
    } else {
      console.error("Error fetching weather data:", await response.text());
    }
  
    // Transform the data to a more usable format
    const transformedData = data.list.map(item => ({
      date: new Date(item.dt * 1000).toLocaleDateString(),
      temp: item.main.temp,
      description: item.weather[0].description,
      icon: item.weather[0].icon
    }));
    setWeatherData(transformedData);
  };

  return (
    <div className="app">
      <SearchBar onSearch={fetchWeather} />
      {weatherData.map((weather, index) => (
        <WeatherCard key={index} weather={weather} />
      ))}
    </div>
  );
};

export default App;

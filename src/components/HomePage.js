import React, { useState, useEffect } from 'react';
import { getWeatherByCity, getWeatherByCoords } from '../api/API-weather';
import { Link } from 'react-router-dom';

const HomePage = () => {
  console.log('HomePage rendered');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await getWeatherByCoords(latitude, longitude, unit);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    });
  }, [unit]);

  const handleSearch = async () => {
    console.log('Search clicked');
    try {
      const response = await getWeatherByCity(city, unit);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <button onClick={handleUnitToggle}>
        Toggle to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
        </div>
      )}
      
    </div>
  );
};

export default HomePage;

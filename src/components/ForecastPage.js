import React, { useState } from 'react';
import { getForecastByCity } from '../api/API-weather';

const ForecastPage = () => {
  console.log('ForecastPage rendered');
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

  const handleSearch = async () => {
    console.log('Search clicked');
    try {
      const response = await getForecastByCity(city, unit); // Pass unit
      console.log(response.data);
      setForecast(response.data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <div>
      <h1>5-Day Forecast</h1>
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
      {forecast && (
        <div>
          {forecast.list.map((item) => (
            <div key={item.dt}>
              <p>{new Date(item.dt * 1000).toLocaleString()}</p>
              <p>{item.weather[0].description}</p>
              <p>{item.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForecastPage;

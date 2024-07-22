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
      const response = await getForecastByCity(city, unit);
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
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Date and Time</th>
              <th>Description</th>
              <th>Temperature (°{unit === 'metric' ? 'C' : 'F'})</th>
            </tr>
          </thead>
          <tbody>
            {forecast.list.map((item) => (
              <tr key={item.dt}>
                <td>{new Date(item.dt * 1000).toLocaleString()}</td>
                <td>{item.weather[0].description}</td>
                <td>{item.main.temp}°{unit === 'metric' ? 'C' : 'F'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ForecastPage;

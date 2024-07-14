import axios from 'axios';

const API_KEY = '6d6602bdc7e3608fd3b2a42f30f1c04c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = (city, unit) => {
  return axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: unit,
    }
  });
};

export const getWeatherByCoords = (lat, lon, unit) => {
  return axios.get(`${BASE_URL}/weather`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: unit,
    }
  });
};

export const getForecastByCity = (city,unit) => {
  return axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: unit,
    }
  });
};

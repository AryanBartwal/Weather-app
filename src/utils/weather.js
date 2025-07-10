import axios from 'axios';

export const API_KEY = "085590031a30567d9813303060a2063c";
export const API_URL = "https://api.openweathermap.org";
export const [autoLat, autoLong] = [30.3165, 78.0322]; // Dehradun coords
export const defaultCityName = "Dehradun";

// Cache utilities
class WeatherCache {
  static cacheKey(type, location) {
    return `weather_${type}_${location}`;
  }

  static getItem(key) {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;
      
      const parsed = JSON.parse(item);
      const now = new Date().getTime();
      
      // Cache expires after 10 minutes
      if (now - parsed.timestamp > 10 * 60 * 1000) {
        localStorage.removeItem(key);
        return null;
      }
      
      return parsed.data;
    } catch (error) {
      return null;
    }
  }

  static setItem(key, data) {
    try {
      const item = {
        data,
        timestamp: new Date().getTime()
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      // Handle storage errors silently
    }
  }
}

export const getWeather = async (latitude, longitude) => {
  try {
    const units = "metric";
    const cacheKeyForecast = WeatherCache.cacheKey('forecast', `${latitude},${longitude}`);
    const cacheKeyCurrent = WeatherCache.cacheKey('current', `${latitude},${longitude}`);
    
    // Try to get data from cache first
    const cachedForecast = WeatherCache.getItem(cacheKeyForecast);
    const cachedCurrent = WeatherCache.getItem(cacheKeyCurrent);
    
    if (cachedForecast && cachedCurrent) {
      return { forecast: cachedForecast, current: cachedCurrent };
    }
    
    // If not in cache, fetch from API
    const [weekForecast, currentDay] = await Promise.all([
      axios.get(
        `${API_URL}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units}&appid=${API_KEY}`
      ),
      axios.get(
        `${API_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${API_KEY}`
      )
    ]);
    
    // Cache the results
    WeatherCache.setItem(cacheKeyForecast, weekForecast.data);
    WeatherCache.setItem(cacheKeyCurrent, currentDay.data);
    
    return { forecast: weekForecast.data, current: currentDay.data };
  } catch (error) {
    let errorMessage = "Unable to fetch weather data. ";
    
    if (error.response) {
      // API error response
      switch (error.response.status) {
        case 401:
          errorMessage += "Invalid API key.";
          break;
        case 404:
          errorMessage += "Location not found.";
          break;
        case 429:
          errorMessage += "Too many requests. Please try again later.";
          break;
        default:
          errorMessage += "Please try again later.";
      }
    } else if (error.request) {
      // Network error
      errorMessage += "Please check your internet connection.";
    } else {
      errorMessage += "An unexpected error occurred.";
    }
    
    throw new Error(errorMessage);
  }
};

export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const getWeatherIcon = (weatherCode, isDay = true) => {
  const iconMap = {
    200: isDay ? '⛈️' : '🌩️', // thunderstorm with light rain
    201: '⛈️', // thunderstorm with rain
    202: '⛈️', // thunderstorm with heavy rain
    210: '🌩️', // light thunderstorm
    211: '⛈️', // thunderstorm
    212: '⛈️', // heavy thunderstorm
    221: '⛈️', // ragged thunderstorm
    230: '🌩️', // thunderstorm with light drizzle
    231: '⛈️', // thunderstorm with drizzle
    232: '⛈️', // thunderstorm with heavy drizzle
    300: '🌦️', // light intensity drizzle
    301: '🌦️', // drizzle
    302: '🌧️', // heavy intensity drizzle
    310: '🌦️', // light intensity drizzle rain
    311: '🌧️', // drizzle rain
    312: '🌧️', // heavy intensity drizzle rain
    313: '🌧️', // shower rain and drizzle
    314: '🌧️', // heavy shower rain and drizzle
    321: '🌧️', // shower drizzle
    500: '🌦️', // light rain
    501: '🌧️', // moderate rain
    502: '🌧️', // heavy intensity rain
    503: '🌧️', // very heavy rain
    504: '🌧️', // extreme rain
    511: '🌨️', // freezing rain
    520: '🌦️', // light intensity shower rain
    521: '🌧️', // shower rain
    522: '🌧️', // heavy intensity shower rain
    531: '🌧️', // ragged shower rain
    600: '🌨️', // light snow
    601: '❄️', // snow
    602: '❄️', // heavy snow
    611: '🌨️', // sleet
    612: '🌨️', // light shower sleet
    613: '🌨️', // shower sleet
    615: '🌨️', // light rain and snow
    616: '🌨️', // rain and snow
    620: '🌨️', // light shower snow
    621: '❄️', // shower snow
    622: '❄️', // heavy shower snow
    701: '🌫️', // mist
    711: '💨', // smoke
    721: '🌫️', // haze
    731: '💨', // sand/dust whirls
    741: '🌫️', // fog
    751: '💨', // sand
    761: '💨', // dust
    762: '🌋', // volcanic ash
    771: '💨', // squalls
    781: '🌪️', // tornado
    800: isDay ? '☀️' : '🌙', // clear sky
    801: isDay ? '🌤️' : '☁️', // few clouds
    802: '⛅', // scattered clouds
    803: '☁️', // broken clouds
    804: '☁️', // overcast clouds
  };
  
  return iconMap[weatherCode] || (isDay ? '☀️' : '🌙');
};

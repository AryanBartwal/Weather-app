import React, { useState, useEffect } from 'react';
import { getWeather, getUserLocation, autoLat, autoLong, API_KEY } from '../utils/weather';
import WeatherHeader from './WeatherHeader';
import SearchBar from './SearchBar';
import ErrorMessage from './ErrorMessage';
import CurrentWeatherCard from './CurrentWeatherCard';
import WeatherSidePanel from './WeatherSidePanel';
import ForecastSection from './ForecastSection';
import BackgroundEffects from './BackgroundEffects';
import LoadingOverlay from './LoadingOverlay';
import ScrollToTopButton from './ScrollToTopButton';

function WeatherApp() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const loadInitialWeather = async () => {
    try {
      const coords = await getUserLocation();
      await loadWeather(coords.latitude, coords.longitude);
    } catch {
      await loadWeather(autoLat, autoLong);
    }
  };

  const loadWeather = async (latitude, longitude) => {
    try {
      setLoading(true);
      setError('');
      const data = await getWeather(latitude, longitude);
      setCurrentWeather(data.current);
      setForecast(data.forecast);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationClick = async () => {
    try {
      setLoading(true);
      const coords = await getUserLocation();
      await loadWeather(coords.latitude, coords.longitude);
    } catch {
      setError('Unable to get your location. Please check your browser settings.');
      setLoading(false);
    }
  };

  const handleSearch = async (cityName) => {
    try {
      setLoading(true);
      setError('');
      
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
      if (!response.ok) throw new Error('City not found');
      
      const data = await response.json();
      await loadWeather(data.coord.lat, data.coord.lon);
      setSearchQuery('');
    } catch {
      setError('City not found. Please try a different search.');
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  useEffect(() => {
    loadInitialWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading && !currentWeather) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-white/20 rounded-full animate-spin border-t-white mx-auto mb-6"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent rounded-full animate-ping border-t-white/50 mx-auto"></div>
          </div>
          <p className="text-xl font-light animate-pulse">Loading weather data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10 container mx-auto px-6 py-8 max-w-6xl">
        <WeatherHeader />
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          handleSearch={handleSearch} 
          handleLocationClick={handleLocationClick} 
          loading={loading}
        />
        
        <ErrorMessage error={error} />

        {currentWeather && (
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            <CurrentWeatherCard currentWeather={currentWeather} formatDate={formatDate} />
            <WeatherSidePanel currentWeather={currentWeather} formatTime={formatTime} />
          </div>
        )}

        {forecast && (
          <ForecastSection forecast={forecast} />
        )}
      </div>

      <LoadingOverlay loading={loading} />
      <ScrollToTopButton />
    </div>
  );
}

export default WeatherApp;

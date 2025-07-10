import React from 'react';
import { getWeatherIcon } from '../utils/weather';

const CurrentWeatherCard = ({ currentWeather, formatDate }) => {
  return (
    <div className="lg:col-span-2 xl:col-span-3">
      <div className="group relative glass-card glass-card-hover p-5 sm:p-7 md:p-9 shadow-card hover:shadow-card-hover transition-all duration-500 cyber-border">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold neon-text">{currentWeather.name}</h2>
            <span className="px-4 py-1 bg-night-800/60 border border-cyber-500/30 rounded-full text-xs sm:text-sm font-medium animate-shimmer shadow-neon">{currentWeather.sys.country}</span>
          </div>
          <p className="text-cyber-200/80 mb-5 sm:mb-8 text-base sm:text-lg">{formatDate(currentWeather.dt)}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-10 gap-6 sm:gap-10">
            <div className="text-7xl sm:text-9xl animate-float-wave filter drop-shadow-2xl">
              {getWeatherIcon(currentWeather.weather[0].id)}
            </div>
            <div className="text-center sm:text-left">
              <div className="text-6xl sm:text-8xl font-extralight mb-2 gradient-text animate-neon-pulse">{Math.round(currentWeather.main.temp)}°</div>
              <div className="text-xl sm:text-2xl text-white/90 capitalize font-medium">{currentWeather.weather[0].description}</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            <WeatherStat emoji="🌡️" label="Feels like" value={`${Math.round(currentWeather.main.feels_like)}°`} />
            <WeatherStat emoji="💧" label="Humidity" value={`${currentWeather.main.humidity}%`} />
            <WeatherStat emoji="💨" label="Wind Speed" value={`${Math.round(currentWeather.wind.speed)} m/s`} />
            <WeatherStat emoji="📊" label="Pressure" value={`${currentWeather.main.pressure} mb`} />
          </div>
        </div>
      </div>
    </div>
  );
};

const WeatherStat = ({ emoji, label, value }) => {
  return (
    <div className="stat-card group hover:bg-night-800/60 backdrop-blur-xl hover:scale-105 border border-cyber-500/20 hover:border-cyber-500/40">
      <div className="text-2xl sm:text-3xl mb-3 group-hover:animate-bounce-slow filter drop-shadow-lg">{emoji}</div>
      <div className="text-cyber-300/80 text-xs sm:text-sm mb-1 font-medium">{label}</div>
      <div className="text-lg sm:text-xl font-bold gradient-text animate-shimmer">{value}</div>
    </div>
  );
};

export default CurrentWeatherCard;

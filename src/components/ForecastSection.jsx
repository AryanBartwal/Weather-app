import React from 'react';
import { getWeatherIcon } from '../utils/weather';

const ForecastSection = ({ forecast }) => {
  return (
    <div className="mt-10 sm:mt-14">
      <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">
        <span className="gradient-text-sunset inline-block relative animate-neon-pulse">
          5-Day Forecast
          <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-500/70 to-transparent"></div>
        </span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
        {forecast.list.filter((_, index) => index % 8 === 0).slice(0, 5).map((day, index) => (
          <ForecastCard key={index} day={day} index={index} />
        ))}
      </div>
    </div>
  );
};

const ForecastCard = ({ day, index }) => {
  return (
    <div className="group glass-card glass-card-hover p-5 sm:p-6 text-center text-white shadow-cyber hover:shadow-cyber-hover border border-cyber-500/20 hover:border-cyber-500/40">
      {/* Top indicator line */}
      <div className="bg-gradient-to-r from-transparent via-cyber-500/50 to-transparent rounded-t-2xl h-0.5 w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="text-cyber-200/90 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">
        {index === 0 ? 'Today' : new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
      </div>
      <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:animate-bounce-slow filter drop-shadow-xl transition-all duration-500">
        {getWeatherIcon(day.weather[0].id)}
      </div>
      <div className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 gradient-text animate-shimmer">
        {Math.round(day.main.temp)}°
      </div>
      <div className="text-white/80 text-xs sm:text-sm capitalize leading-relaxed min-h-[2.5rem]">
        {day.weather[0].description}
      </div>
      
      <div className="mt-4 pt-4 border-t border-cyber-500/20">
        <div className="flex justify-between text-xs sm:text-sm text-cyber-300/80">
          <span className="flex items-center"><span className="mr-1">💧</span> {day.main.humidity}%</span>
          <span className="flex items-center"><span className="mr-1">💨</span> {Math.round(day.wind.speed)}m/s</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastSection;

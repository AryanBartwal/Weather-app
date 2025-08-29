import React from 'react';

const WeatherSidePanel = ({ currentWeather, formatTime }) => {
  return (
    <div className="space-y-6">
      <SunMoonPanel currentWeather={currentWeather} formatTime={formatTime} />
      <DetailsPanel currentWeather={currentWeather} />
    </div>
  );
};

const SunMoonPanel = ({ currentWeather, formatTime }) => {
  return (
    <div className="glass-card backdrop-blur-xl p-6 border border-cyber-500/30 hover:border-cyber-500/50 transition-all duration-300 shadow-cyber hover:shadow-cyber-hover">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl animate-pulse-slow">🌅</span>
        <h3 className="gradient-text text-xl font-bold">Sun & Moon</h3>
      </div>
      <div className="space-y-4 text-white">
        <InfoRow icon="🌅" label="Sunrise" value={formatTime(currentWeather.sys.sunrise)} />
        <InfoRow icon="🌇" label="Sunset" value={formatTime(currentWeather.sys.sunset)} />
        <InfoRow icon="👁️" label="Visibility" value={`${(currentWeather.visibility / 1000).toFixed(1)} km`} />
      </div>
    </div>
  );
};

const DetailsPanel = ({ currentWeather }) => {
  return (
    <div className="glass-card backdrop-blur-xl p-6 border border-cyber-500/30 hover:border-cyber-500/50 transition-all duration-300 shadow-cyber hover:shadow-cyber-hover">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl animate-pulse-slow">📈</span>
        <h3 className="gradient-text-tropical text-xl font-bold">Details</h3>
      </div>
      <div className="space-y-4 text-white">
        <InfoRow label="Min Temp" value={`${Math.round(currentWeather.main.temp_min)}°`} />
        <InfoRow label="Max Temp" value={`${Math.round(currentWeather.main.temp_max)}°`} />
        <InfoRow label="Clouds" value={`${currentWeather.clouds.all}%`} />
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value }) => {
  return (
    <div className="flex justify-between items-center p-3 rounded-xl hover:bg-cyber-500/10 transition-all duration-200 border border-transparent hover:border-cyber-500/20">
      <div className="flex items-center gap-3">
        {icon && <span className="text-xl">{icon}</span>}
        <span className="text-cyber-200/80">{label}</span>
      </div>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
};

export default WeatherSidePanel;

import React from 'react';

function WeatherApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-8 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              WeatherVibe
            </span>
          </h1>
          <p className="text-blue-100 text-xl font-light tracking-wide">Your premium weather experience</p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-4"></div>
        </header>
        
        <div className="text-center text-white p-12">
          <p className="text-2xl">Coming soon with weather updates</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;

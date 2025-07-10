import React from 'react';

const WeatherHeader = () => {
  return (
    <header className="text-center mb-8 sm:mb-12 relative">
      {/* Background glow effect */}
      <div className="absolute -inset-10 bg-glow-gradient opacity-50 blur-3xl"></div>
      
      <div className="relative">
        {/* Logo */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent animate-reveal-text relative z-10 inline-block">
            WeatherVibe
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-sky-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent blur-md opacity-30">
            WeatherVibe
          </span>
        </h1>
        
        {/* Tagline */}
        <p className="text-sky-100 text-lg sm:text-xl font-light tracking-wide mb-3 sm:mb-5">
          Your premium weather experience
        </p>
        
        {/* Accent line */}
        <div className="w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-sky-400/20 via-sky-400/40 to-sky-400/20 mx-auto mt-3 sm:mt-4 rounded-full shadow-glow"></div>
        
        {/* Weather icons */}
        <div className="flex justify-center gap-4 mt-5 items-center">
          <span className="text-lg sm:text-xl opacity-60 animate-float" style={{animationDelay: '0.1s'}}>☁️</span>
          <span className="text-xs text-sky-400/60">•</span>
          <span className="text-lg sm:text-xl opacity-80 animate-float" style={{animationDelay: '0.7s'}}>☀️</span>
          <span className="text-xs text-sky-400/60">•</span>
          <span className="text-lg sm:text-xl opacity-70 animate-float" style={{animationDelay: '1.3s'}}>🌧️</span>
          <span className="text-xs text-sky-400/60">•</span>
          <span className="text-lg sm:text-xl opacity-60 animate-float" style={{animationDelay: '0.5s'}}>❄️</span>
        </div>
        
        {/* Version tag */}
        <div className="absolute top-0 right-0 sm:right-2 transform translate-x-8 sm:translate-x-12">
          <span className="bg-sky-500/10 backdrop-blur-md text-xs text-sky-300/90 px-2 py-0.5 rounded-full border border-sky-400/20 shadow-inner-glow">
            v2.0
          </span>
        </div>
      </div>
    </header>
  );
};

export default WeatherHeader;

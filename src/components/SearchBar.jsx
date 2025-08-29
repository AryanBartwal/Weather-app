import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch, handleLocationClick, loading }) => {
  return (
    <div className="mb-8 sm:mb-12 px-2">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-3xl mx-auto">
        <div className="relative flex-1 group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-sm group-hover:blur-none transition-all duration-300"></div>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && searchQuery.trim() && handleSearch(searchQuery.trim())}
              placeholder="Search for any city..."
              className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-12 sm:pl-14 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-blue-100/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-300 text-base sm:text-lg hover:bg-white/15 shadow-md hover:shadow-lg"
            />
            <svg className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-blue-100/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <button
          onClick={handleLocationClick}
          disabled={loading}
          className="group px-5 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-3xl hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:hover:scale-100 font-medium shadow-md hover:shadow-glow"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm sm:text-base">Use My Location</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

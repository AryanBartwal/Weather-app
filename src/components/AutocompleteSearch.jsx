import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

// Common city list for autocomplete suggestions
const popularCities = [
  "Dehradun", "New York", "London", "Tokyo", "Paris", "Dubai", 
  "Singapore", "Barcelona", "Los Angeles", "Mumbai", "Sydney", 
  "Hong Kong", "Istanbul", "Rome", "Bangkok", "Toronto",
  "Berlin", "Madrid", "Delhi", "Shanghai", "Moscow",
  "Amsterdam", "Chicago", "Seoul", "Las Vegas", "Miami",
  "San Francisco", "Boston", "Melbourne", "Cairo", "Rio de Janeiro",
  "Cape Town", "Vienna", "Athens", "Dublin", "Prague",
  "Vancouver", "Budapest", "Munich", "Copenhagen", "Warsaw",
  "Stockholm", "Oslo", "Helsinki", "Zurich", "Geneva",
  "Brussels", "Milan", "Florence", "Venice", "Naples"
];

const AutocompleteSearch = ({ searchQuery, setSearchQuery, handleSearch, handleLocationClick, loading }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef(null);
  const suggestionRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Memoized filtered suggestions with debouncing for mobile performance
  const filteredSuggestions = useMemo(() => {
    if (searchQuery.trim() === '') return [];

    return popularCities
      .filter(city => city.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
        // Prioritize matches at beginning of word
        const aStartsWith = a.toLowerCase().startsWith(searchQuery.toLowerCase()) ? 0 : 1;
        const bStartsWith = b.toLowerCase().startsWith(searchQuery.toLowerCase()) ? 0 : 1;
        return aStartsWith - bStartsWith || a.localeCompare(b);
      })
      .slice(0, isMobile ? 3 : 5); // Reduce suggestions on mobile
  }, [searchQuery, isMobile]);

  // Update suggestions with debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuggestions(filteredSuggestions);
    }, isMobile ? 150 : 100); // Longer debounce on mobile

    return () => clearTimeout(timer);
  }, [filteredSuggestions, isMobile]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
    setActiveSuggestion(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    handleSearch(suggestion);
  };

  const handleKeyDown = (e) => {
    // Enter key
    if (e.key === 'Enter') {
      if (activeSuggestion >= 0 && activeSuggestion < suggestions.length) {
        handleSuggestionClick(suggestions[activeSuggestion]);
      } else if (searchQuery.trim()) {
        handleSearch(searchQuery.trim());
        setShowSuggestions(false);
      }
    }
    // Arrow down
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    }
    // Arrow up
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion(prev => (prev > 0 ? prev - 1 : 0));
    }
    // Escape
    else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="mb-8 sm:mb-12 px-2">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-3xl mx-auto">
        <div className="relative flex-1 group" ref={suggestionRef}>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-indigo-400/5 rounded-3xl blur-sm group-hover:blur-none transition-all duration-300"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400/30 to-indigo-400/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
          
          {/* Input field with icon */}
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowSuggestions(searchQuery.trim() !== '')}
              placeholder="Search for any city..."
              className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-12 sm:pl-14 rounded-3xl bg-night-800/60 backdrop-blur-lg border border-cyber-500/30 text-white placeholder-cyber-200/60 focus:outline-none focus:ring-2 focus:ring-cyber-500/50 focus:border-cyber-400/50 transition-all duration-300 text-base sm:text-lg hover:bg-night-800/70 shadow-cyber hover:shadow-cyber-hover"
            />
            <svg className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-cyber-400/80 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            
            {/* Clear button */}
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  inputRef.current?.focus();
                }}
                className="absolute right-4 sm:right-5 top-1/2 transform -translate-y-1/2 text-sky-400/70 hover:text-sky-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-20 w-full mt-2 search-suggestions max-h-60 overflow-auto">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className={`suggestion-item ${
                    index === activeSuggestion ? 'suggestion-item-active' : ''
                  }`}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 mr-3 rounded-full flex items-center justify-center bg-night-800/80 border border-cyber-500/40 shadow-neon">
                      <svg className="w-4 h-4 text-cyber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-medium">{suggestion}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          
          {/* No results message */}
          {showSuggestions && searchQuery && suggestions.length === 0 && (
            <div className="absolute z-20 w-full mt-2 py-3 px-4 search-suggestions text-white">
              <div className="flex items-center text-sm">
                <div className="flex-shrink-0 w-8 h-8 mr-3 rounded-full flex items-center justify-center bg-night-800/60 border border-cyber-500/30 shadow-neon">
                  <svg className="w-4 h-4 text-cyber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <span className="text-cyber-300/90">No cities found. Try a different search term.</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Location button */}
        <button
          onClick={handleLocationClick}
          disabled={loading}
          className="btn-primary group px-5 sm:px-8 py-3 sm:py-4 border border-cyber-500/40 text-white rounded-3xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:hover:scale-100 font-medium shadow-cyber hover:shadow-cyber-hover"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-70"></div>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:animate-pulse text-cyber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-sm sm:text-base animate-shimmer">Use My Location</span>
        </button>
      </div>
      
      {/* Recent searches */}
      <RecentSearches handleSearch={handleSearch} />
    </div>
  );
};

// Component for showing recent searches
const RecentSearches = ({ handleSearch }) => {
  const [recentSearches, setRecentSearches] = useState([]);
  
  useEffect(() => {
    try {
      const savedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
      setRecentSearches(savedSearches.slice(0, 5)); // Get latest 5 searches
    } catch (error) {
      // Silently fail and show no recent searches
      setRecentSearches([]);
    }
  }, []);
  
  if (recentSearches.length === 0) return null;
  
  return (
    <div className="mt-4">
      <div className="text-xs text-cyber-400/80 mb-2 text-center uppercase tracking-wider font-medium">Recent Searches</div>
      <div className="flex justify-center flex-wrap gap-2">
        {recentSearches.map((city, index) => (
          <button
            key={index}
            onClick={() => handleSearch(city)}
            className="text-xs px-4 py-1.5 bg-night-800/60 backdrop-blur-lg rounded-full text-cyber-200 hover:text-cyber-400 hover:bg-night-800/80 transition-all duration-200 border border-cyber-500/30 shadow-cyber hover:shadow-cyber-hover flex items-center gap-2"
          >
            <span className="text-[10px]">📍</span>
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AutocompleteSearch;

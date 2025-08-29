import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 w-12 sm:w-14 h-12 sm:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center group shadow-2xl hover:shadow-glow ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;

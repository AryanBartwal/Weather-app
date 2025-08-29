// Performance optimization hook for mobile devices
import { useState, useEffect } from 'react';

export const usePerformanceOptimization = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Check if device is mobile
      setIsMobile(window.innerWidth <= 768);
      
      // Check if user prefers reduced motion
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      
      // Check if device has limited resources
      if ('deviceMemory' in navigator) {
        setIsLowPower(navigator.deviceMemory <= 4);
      } else if ('hardwareConcurrency' in navigator) {
        setIsLowPower(navigator.hardwareConcurrency <= 2);
      }
    };

    checkDevice();
    
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleResize = () => checkDevice();
    
    mediaQuery.addEventListener('change', handleResize);
    motionQuery.addEventListener('change', handleResize);
    window.addEventListener('resize', handleResize);
    
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
      motionQuery.removeEventListener('change', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Return optimization flags
  return {
    isMobile,
    isLowPower,
    reducedMotion,
    shouldReduceAnimations: isMobile || isLowPower || reducedMotion,
    shouldReduceParticles: isMobile || isLowPower,
    shouldReduceBlur: isMobile && isLowPower
  };
};

export default usePerformanceOptimization;

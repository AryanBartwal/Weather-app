import React from 'react';

const LoadingOverlay = ({ loading }) => {
  if (!loading) return null;
  
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 text-white text-center border border-white/20 shadow-2xl animate-shimmer">
        <div className="relative mb-5 sm:mb-6">
          <div className="w-12 h-12 border-4 border-white/20 rounded-full animate-spin border-t-white mx-auto"></div>
          <div className="absolute inset-0 w-12 h-12 border-4 border-transparent rounded-full animate-ping border-t-white/50 mx-auto"></div>
          <div className="absolute -inset-2 w-16 h-16 border border-white/5 rounded-full animate-pulse mx-auto"></div>
        </div>
        <p className="text-lg font-medium mb-1">Updating weather...</p>
        <p className="text-blue-100/70 text-sm">Almost there</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;

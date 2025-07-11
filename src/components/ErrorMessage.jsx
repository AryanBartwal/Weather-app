import React from 'react';

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  
  return (
    <div className="mb-8 max-w-2xl mx-auto">
      <div className="bg-red-500/20 backdrop-blur-xl border border-red-300/50 rounded-3xl p-6 text-white text-center animate-shake">
        <div className="flex items-center justify-center gap-3">
          <svg className="w-6 h-6 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <span className="font-medium">{error}</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;

import React from 'react';

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-night-900 via-night-800 to-night-900 opacity-90"></div>
      
      {/* Cyber grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEguNVY1OS41aDU5VjYwem0wLTU5LjVoLTU5Vi4xaDU5VjEuNXptLTU5IC41SDBoNjB2NThoLTYwVi41em0uNSAwaC02MFY2MEguNVYuNXpNNjAgNjBWMGg1OXY2MEg2MHoiIGZpbGw9InJnYmEoMCwgMjU1LCAyNDAsIDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=')] opacity-30"></div>
      
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-radial from-cyber-500/10 to-transparent opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-radial from-azure-500/10 to-transparent opacity-30"></div>
      
      {/* Ambient neon lights */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyber-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-azure-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Digital horizon line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-500/50 to-transparent opacity-70 animate-pulse-glow"></div>
      <div className="absolute bottom-[1px] left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-400/30 to-transparent opacity-50 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-[2px] left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-300/20 to-transparent opacity-30 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      {/* Large floating cyber orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-cyber-500/5 to-transparent rounded-full blur-3xl animate-float-wave"></div>
      <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-radial from-azure-400/5 to-transparent rounded-full blur-2xl animate-float-wave" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-radial from-azure-300/5 to-transparent rounded-full blur-xl animate-float-wave" style={{ animationDelay: '4s' }}></div>
      
      {/* Neon particles */}
      <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-cyber-400/20 rounded-full blur-md animate-pulse-glow shadow-glow"></div>
      <div className="absolute top-2/3 left-1/5 w-8 h-8 bg-cyber-300/20 rounded-full blur-md animate-pulse-slow shadow-glow" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-azure-400/20 rounded-full blur-md animate-pulse-glow shadow-glow" style={{ animationDelay: '3s' }}></div>
      
      {/* Tiny glowing particles */}
      {Array.from({ length: 25 }).map((_, index) => (
        <div 
          key={index}
          className="absolute w-1.5 h-1.5 bg-cyber-400/40 rounded-full animate-pulse-slow shadow-glow"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 7}s`
          }}
        ></div>
      ))}
      
      {/* Digital haze */}
      <div className="absolute inset-0 bg-night-900/10 mix-blend-overlay backdrop-blur-[1px]"></div>
      
      {/* Horizontal scan lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,240,0.01)_50%)] bg-[length:100%_4px]"></div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyber-500/30 rounded-tl-lg opacity-70"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyber-500/30 rounded-tr-lg opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyber-500/30 rounded-bl-lg opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyber-500/30 rounded-br-lg opacity-70"></div>
    </div>
  );
};

export default BackgroundEffects;

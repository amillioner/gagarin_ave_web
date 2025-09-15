import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ className = "", onClick }) => {
  return (
    <div 
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Logo Image */}
      <img 
        src="/GagarinLogo.png" 
        alt="Gagarin Avenue Logo" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;

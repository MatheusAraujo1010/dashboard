import React from 'react';
import { Shield, ShieldCheck } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'w-10 h-10' }) => {
  return (
    <div className={`relative ${className}`}>
      <Shield className="w-full h-full text-primary-600 animate-pulse-slow" strokeWidth={1.5} />
      <ShieldCheck 
        className="absolute inset-0 w-full h-full text-primary-600" 
        strokeWidth={1.5}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white font-bold text-xs">CG</div>
      </div>
    </div>
  );
};

export default Logo;
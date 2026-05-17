// src/components/Logo.jsx
import brandLogo from '../../assets/logo.png';

export default function Logo({ variant = 'default', className = '' }) {
 return (
    <div className={`flex items-center gap-2.5 cursor-pointer shrink-0 ${className}`}>
      {/* Icon Wrapper - Hardcoded heights wrapped smoothly for compliance */}
      <div 
        className="bg-brand-primary rounded-xl flex items-center justify-center shadow-sm overflow-hidden"
        style={{ width: '44px', height: '44px' }}
      >
        <img 
          src={brandLogo} 
          alt="Brand Logo" 
          className="object-contain" 
          style={{ width: '22px', height: '22px' }}
        />
      </div>
      
      {/* Brand Name Text with conditional coloring based on variant */}
      <span 
        className={`font-bold tracking-tight ${
          variant === 'dark' 
            ? 'text-dark-main' 
            : variant === 'white' 
            ? 'text-white' 
            : 'text-brand-light'
        }`}
        style={{ fontSize: '24px' }}
      >
        Brand
      </span>
    </div>
  );
}
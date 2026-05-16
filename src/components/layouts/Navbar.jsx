import brandLogo from '../../assets/logo.png'; 
import { User, MessageSquare, Heart, ShoppingCart, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    // Figma Border Color Used Here
    <header className="w-full bg-white border-b border-border-gray">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px] h-[86px] flex items-center justify-between gap-4">
        
        {/* 1. LOGO SECTION */}
        <div className="flex items-center gap-2.5 cursor-pointer shrink-0">
          {/* Brand Primary Background */}
          <div className="w-[44px] h-[44px] bg-brand-primary rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
            <img 
              src={brandLogo} 
              alt="Brand Logo" 
              className="w-[22px] h-[22px] object-contain" 
            />
          </div>
          {/* Brand Light Text */}
          <span className="text-[24px] font-bold text-brand-light tracking-tight">
            Brand
          </span>
        </div>

        {/* 2. CENTER SEARCH BAR */}
        {/* Brand Primary Border */}
        <div className="flex flex-1 max-w-[665px] h-[44px] border-2 border-brand-primary rounded-lg overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 text-[16px] text-dark-main placeholder-gray-400 focus:outline-none"
          />
          
          <div className="flex items-center gap-2 px-4 border-l border-border-gray bg-white cursor-pointer select-none shrink-0 hover:bg-gray-50">
            <span className="text-[16px] text-dark-main">All category</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>

          {/* Brand Primary Button */}
          <button className="bg-brand-primary hover:bg-blue-700 text-white font-medium text-[16px] px-6 h-full transition-colors shrink-0">
            Search
          </button>
        </div>

        {/* 3. RIGHT NAVIGATION ACTIONS */}
        <div className="flex items-center gap-5 sm:gap-7 shrink-0">
          {/* Profile */}
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <User className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
            <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Profile</span>
          </div>

          {/* Message */}
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <MessageSquare className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
            <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Message</span>
          </div>

          {/* Orders */}
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <Heart className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
            <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Orders</span>
          </div>

          {/* My Cart */}
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
            <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">My cart</span>
          </div>
        </div>

      </div>
    </header>
  );
}
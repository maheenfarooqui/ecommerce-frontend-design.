import brandLogo from '../../assets/logo.png';
import Container from '../common/Container';
import { useState } from 'react';
import { User, MessageSquare, Heart, X,ShoppingCart, ChevronDown, Menu, Search } from 'lucide-react';

// export default function Navbar() {
//   return (
//     // Figma Border Color Used Here
//     <header className="w-full bg-white border-b border-border-gray">
//       <Container className="flex h-20 items-center justify-between gap-4">
        
//         {/* 1. LOGO SECTION */}
//         <div className="flex items-center gap-2.5 cursor-pointer shrink-0">
//           {/* Brand Primary Background */}
//           <div className="w-[44px] h-[44px] bg-brand-primary rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
//             <img 
//               src={brandLogo} 
//               alt="Brand Logo" 
//               className="w-[22px] h-[22px] object-contain" 
//             />
//           </div>
//           {/* Brand Light Text */}
//           <span className="text-[24px] font-bold text-brand-light tracking-tight">
//             Brand
//           </span>
//         </div>

//         {/* 2. CENTER SEARCH BAR */}
//         {/* Brand Primary Border */}
//         <div className="flex flex-1 max-w-[665px] h-[44px] border-2 border-brand-primary rounded-lg overflow-hidden bg-white">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full px-4 text-[16px] text-dark-main placeholder-gray-400 focus:outline-none"
//           />
          
//           <div className="flex items-center gap-2 px-4 border-l border-border-gray bg-white cursor-pointer select-none shrink-0 hover:bg-gray-50">
//             <span className="text-[16px] text-dark-main">All category</span>
//             <ChevronDown className="w-4 h-4 text-gray-500" />
//           </div>

//           {/* Brand Primary Button */}
//           <button className="bg-brand-primary hover:bg-blue-700 text-white font-medium text-[16px] px-6 h-full transition-colors shrink-0">
//             Search
//           </button>
//         </div>

//         {/* 3. RIGHT NAVIGATION ACTIONS */}
//         <div className="flex items-center gap-5 sm:gap-7 shrink-0">
//           {/* Profile */}
//           <div className="flex flex-col items-center gap-1 cursor-pointer group">
//             <User className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
//             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Profile</span>
//           </div>

//           {/* Message */}
//           <div className="flex flex-col items-center gap-1 cursor-pointer group">
//             <MessageSquare className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
//             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Message</span>
//           </div>

//           {/* Orders */}
//           <div className="flex flex-col items-center gap-1 cursor-pointer group">
//             <Heart className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
//             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Orders</span>
//           </div>

//           {/* My Cart */}
//           <div className="flex flex-col items-center gap-1 cursor-pointer group">
//             <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
//             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">My cart</span>
//           </div>
//         </div>

//       </Container>

//     </header>
//   );
// }
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-border-gray sticky top-0 z-50">
      
      {/* 1. MAIN DESKTOP & MOBILE BAR */}
      <Container className="h-[86px] flex items-center justify-between gap-4">
        
        {/* LEFT: Menu Button (Mobile Only) + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu (Mobile Only) */}
          <button
            type="button"
            className="lg:hidden text-dark-main p-1 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Brand Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer shrink-0">
            <div className="w-[44px] h-[44px] bg-brand-primary rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
              <img src={brandLogo} alt="Brand Logo" className="w-[22px] h-[22px] object-contain" />
            </div>
            <span className="text-[24px] font-bold text-brand-light tracking-tight">
              Brand
            </span>
          </div>
        </div>

        {/* CENTER: Search Bar (Desktop Only) */}
        <div className="hidden lg:flex flex-1 max-w-[665px] h-[44px] border-2 border-brand-primary rounded-lg overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 text-[16px] text-dark-main placeholder-gray-400 focus:outline-none"
          />
          <div className="flex items-center gap-2 px-4 border-l border-border-gray bg-white cursor-pointer select-none shrink-0 hover:bg-gray-50">
            <span className="text-[16px] text-dark-main">All category</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <button className="bg-brand-primary hover:bg-blue-700 text-white font-medium text-[16px] px-6 h-full transition-colors shrink-0">
            Search
          </button>
        </div>

        {/* RIGHT: Actions (Desktop Navigation / Mobile Quick Icons) */}
        {/* Desktop View Icons */}
        <div className="hidden lg:flex items-center gap-7 shrink-0">
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <User className="w-5 h-5 text-gray-muted group-hover:text-brand-primary transition-colors" />
            <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Profile</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <MessageSquare className="w-5 h-5 text-gray-muted group-hover:text-brand-primary transition-colors" />
            <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Message</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <Heart className="w-5 h-5 text-gray-muted group-hover:text-brand-primary transition-colors" />
            <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Orders</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <ShoppingCart className="w-5 h-5 text-gray-muted group-hover:text-brand-primary transition-colors" />
            <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">My cart</span>
          </div>
        </div>

        {/* Mobile View Quick Icons (Cart & Profile - As per your screenshot) */}
        <div className="flex items-center gap-4 lg:hidden">
          <button className="text-dark-main p-1">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="text-dark-main p-1">
            <User className="w-6 h-6" />
          </button>
        </div>

      </Container>

      {/* MOBILE LOWER SEARCH BAR (Only visible on mobile screens, beneath main bar) */}
      <div className="block lg:hidden px-4 pb-3 bg-white">
        <div className="w-full h-[40px] flex items-center bg-[#F7FAFC] border border-border-gray rounded-lg overflow-hidden px-3">
          <Search className="w-5 h-5 text-gray-400 shrink-0 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-[14px] text-dark-main placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>


      {/* 2. MOBILE OVERLAY DRAWER (Aside Component) */}
      <aside
        className={`fixed inset-0 z-50 flex h-screen flex-col overflow-hidden bg-white px-5 py-6 transition-all duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between gap-4 border-b border-border-gray pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-[36px] h-[36px] bg-brand-primary rounded-lg flex items-center justify-center">
              <img src={brandLogo} alt="Brand Logo" className="w-[18px] h-[18px] object-contain" />
            </div>
            <span className="text-[20px] font-bold text-brand-primary tracking-tight">
              Brand Menu
            </span>
          </div>
          
          {/* Close Button */}
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border-gray text-dark-main transition hover:bg-gray-50"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links / Navigation Categories */}
        <nav className="mt-6 grid gap-2" aria-label="Mobile primary navigation">
          <a href="#" className="flex items-center justify-between border-b border-slate-100 py-3.5 font-medium text-dark-main hover:text-brand-primary" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#" className="flex items-center justify-between border-b border-slate-100 py-3.5 font-medium text-dark-main hover:text-brand-primary" onClick={() => setIsOpen(false)}>
            All Categories
          </a>
          <a href="#" className="flex items-center justify-between border-b border-slate-100 py-3.5 font-medium text-dark-main hover:text-brand-primary" onClick={() => setIsOpen(false)}>
            Hot Offers
          </a>
          <a href="#" className="flex items-center justify-between border-b border-slate-100 py-3.5 font-medium text-dark-main hover:text-brand-primary" onClick={() => setIsOpen(false)}>
            Gift Boxes
          </a>
          <a href="#" className="flex items-center justify-between border-b border-slate-100 py-3.5 font-medium text-dark-main hover:text-brand-primary" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </nav>

        {/* Drawer Footer Actions */}
        <div className="mt-auto pt-6 flex flex-col gap-3">
          <div className="flex items-center justify-between border-t border-border-gray pt-4 text-sm text-gray-500">
            <span>Currency: USD</span>
            <span>Ship to: US</span>
          </div>
        </div>
      </aside>

    </header>
  );
}
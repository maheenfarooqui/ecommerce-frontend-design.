
// import Container from '../common/Container';
// import { useState } from 'react';
// import { User, MessageSquare, Heart, X,ShoppingCart, ChevronDown, Menu, Search } from 'lucide-react';
// import Logo from '../common/Logo';
// // export default function Navbar() {
// //   return (
// //     // Figma Border Color Used Here
// //     <header className="w-full bg-white border-b border-border-gray">
// //       <Container className="flex h-20 items-center justify-between gap-4">
        
// //         {/* 1. LOGO SECTION */}
// //         <div className="flex items-center gap-2.5 cursor-pointer shrink-0">
// //           {/* Brand Primary Background */}
// //           <div className="w-[44px] h-[44px] bg-brand-primary rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
// //             <img 
// //               src={brandLogo} 
// //               alt="Brand Logo" 
// //               className="w-[22px] h-[22px] object-contain" 
// //             />
// //           </div>
// //           {/* Brand Light Text */}
// //           <span className="text-[24px] font-bold text-brand-light tracking-tight">
// //             Brand
// //           </span>
// //         </div>

// //         {/* 2. CENTER SEARCH BAR */}
// //         {/* Brand Primary Border */}
// //         <div className="flex flex-1 max-w-[665px] h-[44px] border-2 border-brand-primary rounded-lg overflow-hidden bg-white">
// //           <input
// //             type="text"
// //             placeholder="Search"
// //             className="w-full px-4 text-[16px] text-dark-main placeholder-gray-400 focus:outline-none"
// //           />
          
// //           <div className="flex items-center gap-2 px-4 border-l border-border-gray bg-white cursor-pointer select-none shrink-0 hover:bg-gray-50">
// //             <span className="text-[16px] text-dark-main">All category</span>
// //             <ChevronDown className="w-4 h-4 text-gray-500" />
// //           </div>

// //           {/* Brand Primary Button */}
// //           <button className="bg-brand-primary hover:bg-blue-700 text-white font-medium text-[16px] px-6 h-full transition-colors shrink-0">
// //             Search
// //           </button>
// //         </div>

// //         {/* 3. RIGHT NAVIGATION ACTIONS */}
// //         <div className="flex items-center gap-5 sm:gap-7 shrink-0">
// //           {/* Profile */}
// //           <div className="flex flex-col items-center gap-1 cursor-pointer group">
// //             <User className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
// //             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Profile</span>
// //           </div>

// //           {/* Message */}
// //           <div className="flex flex-col items-center gap-1 cursor-pointer group">
// //             <MessageSquare className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
// //             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Message</span>
// //           </div>

// //           {/* Orders */}
// //           <div className="flex flex-col items-center gap-1 cursor-pointer group">
// //             <Heart className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
// //             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Orders</span>
// //           </div>

// //           {/* My Cart */}
// //           <div className="flex flex-col items-center gap-1 cursor-pointer group">
// //             <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-colors" />
// //             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">My cart</span>
// //           </div>
// //         </div>

// //       </Container>

// //     </header>
// //   );
// // }
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="w-full bg-white border-b border-border-gray sticky top-0 z-50">
      
//       {/* 1. MAIN DESKTOP & MOBILE BAR */}
//       <Container className="h-20 flex items-center justify-between gap-4">
        
//         {/* LEFT: Menu Button (Mobile Only) + Logo */}
//         <div className="flex items-center gap-3">
//           {/* Hamburger Menu (Mobile Only) */}
//           <button
//             type="button"
//             className="lg:hidden text-dark-main p-1 cursor-pointer"
//             onClick={() => setIsOpen(true)}
//           >
//             <Menu className="w-6 h-6" />
//           </button>

//           {/* Brand Logo */}
//           <Logo />
//         </div>

//         {/* CENTER: Search Bar (Desktop Only) */}
//         <div className="hidden lg:flex flex-1 max-w-[665] h-[44] border-2 border-brand-primary rounded-lg overflow-hidden bg-white">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full px-4 text-[16px] text-dark-main placeholder-gray-400 focus:outline-none"
//           />
//           <div className="flex items-center gap-2 px-4 border-l border-border-gray bg-white cursor-pointer select-none shrink-0 hover:bg-gray-50">
//             <span className="text-[16px] text-dark-main">All category</span>
//             <ChevronDown className="w-4 h-4 text-gray-500" />
//           </div>
//           <button className="bg-brand-primary hover:bg-blue-700 text-white font-medium text-[16px] px-6 h-full transition-colors shrink-0">
//             Search
//           </button>
//         </div>

//         {/* RIGHT: Actions (Desktop Navigation / Mobile Quick Icons) */}
//         {/* Desktop View Icons */}
//         <div className="hidden lg:flex items-center gap-7 shrink-0">
//           <div className="flex flex-col items-center gap-1 cursor-pointer group">
//             <User className="w-5 h-5 text-gray-muted group-hover:text-brand-primary transition-colors" />
//             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Profile</span>
//           </div>
//           <div className="flex flex-col items-center gap-1 cursor-pointer group">
//             <MessageSquare className="w-5 h-5 text-gray-muted group-hover:text-brand-primary transition-colors" />
//             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Message</span>
//           </div>
//           <div className="flex flex-col items-center gap-1 cursor-pointer group">
//             <Heart className="w-5 h-5 text-gray-muted group-hover:text-brand-primary transition-colors" />
//             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">Orders</span>
//           </div>
//           <div className="flex flex-col items-center gap-1 cursor-pointer group">
//             <ShoppingCart className="w-5 h-5 text-gray-muted group-hover:text-brand-primary transition-colors" />
//             <span className="text-[12px] text-gray-muted group-hover:text-dark-main transition-colors">My cart</span>
//           </div>
//         </div>

//         {/* Mobile View Quick Icons (Cart & Profile - As per your screenshot) */}
//         <div className="flex items-center gap-4 lg:hidden">
//           <button className="text-dark-main p-1">
//             <ShoppingCart className="w-6 h-6" />
//           </button>
//           <button className="text-dark-main p-1">
//             <User className="w-6 h-6" />
//           </button>
//         </div>

//       </Container>

//       {/* MOBILE LOWER SEARCH BAR (Only visible on mobile screens, beneath main bar) */}
//       <div className="block lg:hidden px-4 pb-3 bg-white">
//         <div className="w-full h-[40] flex items-center bg-bg-gray border border-border-gray rounded-lg overflow-hidden px-3">
//           <Search className="w-5 h-5 text-gray-400 shrink-0 mr-2" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full bg-transparent text-[14px] text-dark-main placeholder-gray-400 focus:outline-none"
//           />
//         </div>
//       </div>


//       {/* 2. MOBILE OVERLAY DRAWER (Aside Component) */}
//       <aside
//         className={`fixed inset-0 z-50 flex h-screen flex-col overflow-hidden bg-white px-5 py-6 transition-all duration-300 lg:hidden ${
//           isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
//         }`}
//         aria-label="Mobile navigation"
//       >
//         {/* Drawer Header */}
//         <div className="flex items-center justify-between gap-4 border-b border-border-gray pb-4">
//          <Logo variant="dark" />
          
//           {/* Close Button */}
//           <button
//             className="grid h-10 w-10 place-items-center rounded-full border border-border-gray text-dark-main transition hover:bg-gray-50"
//             type="button"
//             onClick={() => setIsOpen(false)}
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Drawer Links / Navigation Categories */}
//         <nav className="mt-6 grid gap-2" aria-label="Mobile primary navigation">
//           <a href="#" className="flex items-center justify-between border-b border-slate-100 py-3.5 font-medium text-dark-main hover:text-brand-primary" onClick={() => setIsOpen(false)}>
//             Home
//           </a>
//           <a href="#" className="flex items-center justify-between border-b border-slate-100 py-3.5 font-medium text-dark-main hover:text-brand-primary" onClick={() => setIsOpen(false)}>
//             All Categories
//           </a>
//           <a href="#" className="flex items-center justify-between border-b border-slate-100 py-3.5 font-medium text-dark-main hover:text-brand-primary" onClick={() => setIsOpen(false)}>
//             Hot Offers
//           </a>
//           <a href="#" className="flex items-center justify-between border-b border-slate-100 py-3.5 font-medium text-dark-main hover:text-brand-primary" onClick={() => setIsOpen(false)}>
//             Gift Boxes
//           </a>
//           <a href="#" className="flex items-center justify-between border-b border-slate-100 py-3.5 font-medium text-dark-main hover:text-brand-primary" onClick={() => setIsOpen(false)}>
//             Projects
//           </a>
//         </nav>

//         {/* Drawer Footer Actions */}
//         <div className="mt-auto pt-6 flex flex-col gap-3">
//           <div className="flex items-center justify-between border-t border-border-gray pt-4 text-sm text-gray-500">
//             <span>Currency: USD</span>
//             <span>Ship to: US</span>
//           </div>
//         </div>
//       </aside>

//     </header>
//   );
// }
import { useState } from 'react';
import { User, MessageSquare, Heart, ShoppingCart, ChevronDown, Menu, X, Search, Home, List, Globe, Headphones, Info } from 'lucide-react';
import Logo from '../common/Logo';
import Container from '../common/Container';
import BottomNavbar from '../common/BottomNav';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Icon ke sath wale main menu items
  const menuItems = [
    { label: 'Home', icon: Home, href: '#' },
    { label: 'Categories', icon: List, href: '#' },
    { label: 'Favorites', icon: Heart, href: '#' },
    { label: 'My orders', icon: ShoppingCart, href: '#' },
    { label: 'English | USD', icon: Globe, href: '#' },
    { label: 'Contact us', icon: Headphones, href: '#' },
    { label: 'About', icon: Info, href: '#' },
  ];

  // Niche wale plain text links
  const subLinks = [
    { label: 'User agreement', href: '#' },
    { label: 'Partnership', href: '#' },
    { label: 'Privacy policy', href: '#' },
  ];

  return (
    <header className="w-full bg-white border-b border-border-gray sticky top-0 z-50">
      
      {/* 1. MAIN DESKTOP & MOBILE BAR */}
      <Container className="h-20 flex items-center justify-between gap-4">
        
        {/* LEFT: Menu Button (Mobile Only) + Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="lg:hidden text-dark-main p-1 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <Logo />
        </div>

        {/* CENTER: Search Bar (Desktop Only) */}
        <div 
          className="hidden lg:flex border-2 border-brand-primary rounded-lg overflow-hidden bg-white"
          style={{ height: '44px', width: '100%', maxWidth: '665px' }}
        >
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

        {/* RIGHT: Actions (Desktop Only) */}
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

        {/* Mobile Quick Action Icons */}
        <div className="flex items-center gap-4 lg:hidden">
          <button className="text-dark-main p-1">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="text-dark-main p-1">
            <User className="w-6 h-6" />
          </button>
        </div>

      </Container>

      {/* MOBILE LOWER SEARCH BAR */}
      <div className="block lg:hidden px-4 pb-3 bg-white">
        <div 
          className="w-full flex items-center bg-bg-gray border border-border-gray rounded-lg overflow-hidden px-3"
          style={{ height: '40px' }}
        >
          <Search className="w-5 h-5 text-gray-400 shrink-0 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-[14px] text-dark-main placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>


      {/* 2. FIXED MOBILE OVERLAY DRAWER (Figma Match) */}
      <aside
        className={`fixed inset-0 z-50 flex h-screen flex-col overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto translate-x-0 opacity-100' : 'pointer-events-none -translate-x-full opacity-0'
        }`}
        aria-label="Mobile navigation"
      >
        
        {/* Drawer Header (Light Grey Profile Box) */}
        <div className="bg-bg-gray p-5 border-b border-border-gray relative">
          {/* Close X Button top-right */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-dark-main cursor-pointer"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* User Icon & Sign in Area */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="w-[44] h-[44] bg-[#DEE2E7] rounded-full flex items-center justify-center text-gray-600">
              <User className="w-6 h-6" />
            </div>
            <div className="text-[16px] text-dark-main font-medium">
              <span className="cursor-pointer hover:text-brand-primary">Sign in</span>
              <span className="text-gray-400 mx-1.5">|</span>
              <span className="cursor-pointer hover:text-brand-primary">Register</span>
            </div>
          </div>
        </div>

        {/* Drawer Main Links Scroll Area */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          
          {/* Main List items with Icons */}
          <nav className="flex flex-col" aria-label="Mobile primary navigation">
            {menuItems.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className={`flex items-center gap-4 py-3.5 text-[16px] text-dark-main hover:bg-gray-50 active:bg-gray-100 transition-colors ${
                    item.label === 'English | USD' ? 'border-t border-slate-100 mt-2 pt-5' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="w-5 h-5 shrink-0" style={{ color: '#8B96A5' }}/>
                  <span className="font-normal">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Bottom Plain Sub-links */}
          <div className="border-t border-slate-100 mt-4 pt-4 flex flex-col gap-4">
            {subLinks.map((sub, idx) => (
              <a
                key={idx}
                href={sub.href}
                className="text-[16px] text-dark-main font-normal hover:text-brand-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {sub.label}
              </a>
            ))}
          </div>

        </div>
      </aside>
      <Container>
        <BottomNavbar />
      </Container>

    </header>
  );
}
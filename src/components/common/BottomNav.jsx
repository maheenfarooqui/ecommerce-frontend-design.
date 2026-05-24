import { Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export default function BottomNavbar() {
  // ⚡ DRY Approach: Array ko objects mein badla taake har link ka apna path ho
  const leftLinks = [
    { name: 'Hot offers', path: '#' },
    { name: 'Gift boxes', path: '#' },
    { name: 'Projects', path: '#' },
    { name: 'Menu item', path: '/products' }, // 👈 Is link par listing page ka path set kar diya
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <Container className="h-14 hidden lg:flex items-center justify-between">
        
        {/* LEFT SIDE: Hamburger Menu + Links */}
        <div className="flex items-center gap-6">
          {/* All Category With Hamburger */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-brand-primary transition-colors">
            <Menu className="w-5 h-5 text-dark-main" />
            <span className="text-[16px] font-medium text-dark-main">
              All category
            </span>
          </div>

          {/* Dynamic Left Links */}
          <ul className="flex items-center gap-6 m-0 p-0 list-none">
            {leftLinks.map((link, idx) => (
              <li key={idx}>
                {/* 🔗 HTML <a> tag ko React Router ke <Link> se badal diya */}
                <Link
                  to={link.path}
                  className="text-[16px] font-medium hover:text-brand-primary transition-colors no-underline"
                  style={{ color: '#1C1C1C' }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            
            {/* Help Dropdown Option */}
            <li className="flex items-center gap-1 cursor-pointer hover:text-brand-primary transition-colors">
              <span className="text-[16px] font-medium" style={{ color: '#1C1C1C' }}>
                Help
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE: Language & Shipping Dropdowns */}
        <div className="flex items-center gap-6">
          {/* Currency / Language Selector */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-brand-primary transition-colors">
            <span className="text-[16px] font-medium text-dark-main">
              English, USD
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>

          {/* Ship To Destination */}
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-brand-primary transition-colors">
            <span className="text-[16px] font-medium text-dark-main">
              Ship to
            </span>
            <span className="text-[18px] leading-none flex items-center">
              🇩🇪
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>

      </Container>
      
      {/* Mobile Responsive Tabs View */}
      <div className="w-full bg-white py-3 px-4 overflow-x-auto flex items-center gap-2.5 block lg:hidden" style={{ scrollbarWidth: 'none' }}>
        {['All category', 'Gadgets', 'Clothes', 'Accessories'].map((tab, idx) => (
          <button
            key={idx}
            className="px-3 py-1.5 bg-[#EFF2F4] text-[15px] font-medium rounded-md whitespace-nowrap border-none outline-none active:bg-gray-200 transition-colors"
            style={{ color: '#0D6EFD' }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
import { ChevronUp } from 'lucide-react';
import Logo from '../common/Logo';
import Container from '../common/Container';
import appStoreBtn from '../../assets/apple.png';
import googlePlayBtn from '../../assets/google.png';

export default function Footer() {
  const socialIcons = [
    {
      name: 'Facebook',
      href: '#',
      // ⚡ FIX: l-[.443] ko badal kar standard valid path numbers kar diye hain taake error na aaye
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
    },
    {
      name: 'Twitter',
      href: '#',
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    {
      name: 'Linkedin',
      href: '#',
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    },
    {
      name: 'Instagram',
      href: '#',
      svg: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    },
    {
      name: 'Youtube',
      href: '#',
      svg: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    }
  ];

  const footerLinks = [
    {
      title: 'About',
      links: ['About Us', 'Find store', 'Categories', 'Blogs'],
    },
    {
      title: 'Partnership',
      links: ['About Us', 'Find store', 'Categories', 'Blogs'],
    },
    {
      title: 'Information',
      links: ['Help Center', 'Money Refund', 'Shipping', 'Contact us'],
    },
    {
      title: 'For users',
      links: ['Login', 'Register', 'Settings', 'My Orders'],
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-border-gray">
      {/* TOP FOOTER SECTION */}
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          
          {/* Column 1: Logo, Info and Social Media */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Logo/>
            <p 
              className="text-[16px] text-[#505050] leading-relaxed"
              style={{ maxWidth: '250px' }}
            >
              Best information about the company gies here but now lorem ipsum is
            </p>
            {/* Social Icons Wrapper */}
            <div className="flex items-center gap-2.5 mt-2">
              {socialIcons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="w-8 h-8 bg-[#BDC4CD] hover:bg-brand-primary text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={item.name}
                >
                  {item.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2-5: Dynamic Link Groups */}
          {footerLinks.map((group, idx) => (
            <div key={idx} className="flex flex-col gap-3 min-w-0">
              <h3 className="text-[16px] font-medium text-dark-main whitespace-nowrap">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="whitespace-nowrap">
                    <a
                      href="#"
                      className="text-[16px] text-gray-muted hover:text-brand-primary transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 6: App Downloads */}
          <div className="flex flex-col gap-3 min-w-0">
            <h3 className="text-[16px] font-medium text-dark-main whitespace-nowrap">
              Get app
            </h3>
            <div className="flex flex-col gap-2.5 mt-1">
              <a href="#" className="inline-block transition-transform hover:scale-[1.02] shrink-0">
                <img
                  src={appStoreBtn}
                  alt="Download on the App Store"
                  className="object-contain" 
                  style={{ width: '124px', height: '40px' }}
                />
              </a>
              <a href="#" className="inline-block transition-transform hover:scale-[1.02] shrink-0">
                <img
                  src={googlePlayBtn}
                  alt="Get it on Google Play"
                  className="object-contain"
                  style={{ width: '124px', height: '40px' }}
                />
              </a>
            </div>
          </div>

        </div>
      </Container>

      {/* BOTTOM FOOTER SECTION */}
      <div 
        className="w-full bg-[#EEF2F4] border-t border-border-gray flex items-center"
        style={{ height: '68px' }}
      >
        <Container className="flex items-center justify-between text-[16px] text-[#606060]">
          <div>
            © 2023 Ecommerce.
          </div>

          {/* Language Selector Dropdown */}
          <div className="flex items-center gap-2 cursor-pointer select-none hover:text-dark-main transition-colors">
            <span className="text-[18px]">🇺🇸</span>
            <span>English</span>
            <ChevronUp className="w-4 h-4 text-gray-500" />
          </div>
        </Container>
      </div>
    </footer>
  );
}
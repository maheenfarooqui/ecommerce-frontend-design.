import Container from '../common/Container';
import { servicesData } from '../../utils/data';
import { Search, Box, Send, ShieldCheck } from 'lucide-react';

// ⚡ Safe Icon Mapping Function (No dangerous SVG string paths!)
const renderIcon = (type) => {
  const baseClass = "w-5 h-5 text-[#1C1C1C]";
  switch (type) {
    case 'search': return <Search className={baseClass} />;
    case 'box': return <Box className={baseClass} />;
    case 'send': return <Send className={baseClass} />;
    case 'shield': return <ShieldCheck className={baseClass} />;
    default: return <Search className={baseClass} />;
  }
};

export default function ServicesSection() {
  return (
    <div className="w-full bg-[#F7FAFC] pb-10">
      <Container>
        
        {/* Section Title */}
        <h2 className="text-[24px] font-bold text-[#1C1C1C] m-0 mb-6">
          Our extra services
        </h2>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData?.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden relative group hover:shadow-md transition-shadow cursor-pointer"
            >
              
              {/* Image Block */}
              <div className="w-full h-[120px] bg-gray-100 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Blue Circle Icon Badge */}
              <div className="absolute top-[96px] right-5 w-11 h-11 rounded-full bg-[#D1E7FF] border-[2px] border-white flex items-center justify-center shadow-sm z-10">
                {renderIcon(service.iconType)}
              </div>

              {/* Card Text */}
              <div className="p-5 pt-6 max-w-[85%]">
                <p className="text-[16px] font-medium text-[#1C1C1C] m-0 leading-snug">
                  {service.title}
                </p>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </div>
  );
}
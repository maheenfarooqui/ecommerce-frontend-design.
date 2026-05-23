import Container from '../common/Container';
import { regionsData } from '../../utils/data';

export default function RegionSuppliersSection() {
  return (
    <div className="w-full bg-[#F7FAFC] pb-12">
      <Container>
        
        {/* Section Title */}
        <h2 className="text-[24px] font-bold text-[#1C1C1C] m-0 mb-6">
          Suppliers by region
        </h2>

        {/* Responsive Grid Layout (Max 5 columns layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 gap-x-4">
          {regionsData?.map((region) => (
            <div 
              key={region.id} 
              className="flex items-start gap-3 p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
            >
              
              {/* 🏳️ Flag Wrapper Container */}
              <div className="w-7 h-5 overflow-hidden rounded-sm border border-gray-100 shrink-0 mt-0.5">
                <img 
                  src={region.flag} 
                  alt={region.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* 📋 Content Text (Name & Dynamic Link) */}
              <div className="flex flex-col min-w-0">
                <span className="text-[15px] text-[#1C1C1C] font-normal leading-tight group-hover:text-[#0D6EFD] transition-colors truncate">
                  {region.name}
                </span>
                <span className="text-[12px] text-gray-400 font-normal mt-0.5 truncate">
                  {region.site}
                </span>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </div>
  );
}
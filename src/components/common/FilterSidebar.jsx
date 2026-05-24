import { useState } from 'react';
import { ChevronUp, ChevronDown, Star } from 'lucide-react';

export default function FilterSidebar() {
  // ⚡ Single Object State Map managing open/close toggles cleanly (DRY principle)
  const [openSections, setOpenSections] = useState({
    category: true,
    brands: true,
    features: true,
    priceRange: true,
    condition: true,
    ratings: true,
  });

  // Toggle Section Handlers Function
  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const categories = ['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'];
  const brands = ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'];
  const features = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'];
  const conditions = ['Any', 'Refurbished', 'Brand new', 'Old items'];

  return (
    <aside className="w-full lg:w-[240px] shrink-0 flex flex-col gap-1 select-none">
      
      {/* 🧭 1. Category Section */}
      <div className="border-t border-gray-200 py-3">
        <div 
          onClick={() => toggleSection('category')} 
          className="flex items-center justify-between mb-3 cursor-pointer hover:opacity-80"
        >
          <h4 className="text-[16px] font-semibold text-[#1C1C1C] m-0">Category</h4>
          {openSections.category ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
        </div>
        {openSections.category && (
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5 transition-all">
            {categories.map((cat, i) => (
              <li key={i} className="text-[16px] text-[#505050] hover:text-[#0D6EFD] cursor-pointer">
                {cat}
              </li>
            ))}
            <li className="text-[16px] text-[#0D6EFD] cursor-pointer mt-0.5 font-medium">See all</li>
          </ul>
        )}
      </div>

      {/* 🏷️ 2. Brands Section */}
      <div className="border-t border-gray-200 py-3">
        <div 
          onClick={() => toggleSection('brands')} 
          className="flex items-center justify-between mb-3 cursor-pointer hover:opacity-80"
        >
          <h4 className="text-[16px] font-semibold text-[#1C1C1C] m-0">Brands</h4>
          {openSections.brands ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
        </div>
        {openSections.brands && (
          <div className="flex flex-col gap-2.5 transition-all">
            {brands.map((brand, i) => (
              <label key={i} className="flex items-center gap-3 text-[16px] text-[#1C1C1C] cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded border-gray-300" />
                <span className="text-[#1C1C1C] font-normal">{brand}</span>
              </label>
            ))}
            <span className="text-[16px] text-[#0D6EFD] cursor-pointer mt-0.5 font-medium">See all</span>
          </div>
        )}
      </div>

      {/* 🛠️ 3. Features Section */}
      <div className="border-t border-gray-200 py-3">
        <div 
          onClick={() => toggleSection('features')} 
          className="flex items-center justify-between mb-3 cursor-pointer hover:opacity-80"
        >
          <h4 className="text-[16px] font-semibold text-[#1C1C1C] m-0">Features</h4>
          {openSections.features ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
        </div>
        {openSections.features && (
          <div className="flex flex-col gap-2.5 transition-all">
            {features.map((feat, i) => (
              <label key={i} className="flex items-center gap-3 text-[16px] text-[#1C1C1C] cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded border-gray-300" />
                <span className="text-[#1C1C1C] font-normal">{feat}</span>
              </label>
            ))}
            <span className="text-[16px] text-[#0D6EFD] cursor-pointer mt-0.5 font-medium">See all</span>
          </div>
        )}
      </div>

      {/* 💰 4. Price Range Section Block */}
      <div className="border-t border-gray-200 py-3">
        <div 
          onClick={() => toggleSection('priceRange')} 
          className="flex items-center justify-between mb-3 cursor-pointer hover:opacity-80"
        >
          <h4 className="text-[16px] font-semibold text-[#1C1C1C] m-0">Price range</h4>
          {openSections.priceRange ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
        </div>
        {openSections.priceRange && (
          <div className="flex flex-col gap-3 transition-all">
            {/* Custom Range Sliders Bar Layout */}
            <div className="relative w-full h-1 bg-blue-200 rounded-md my-2">
              <div className="absolute left-[15%] right-[20%] h-full bg-[#0D6EFD] rounded-md"></div>
              <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#0D6EFD] rounded-full cursor-pointer shadow-sm"></div>
              <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#0D6EFD] rounded-full cursor-pointer shadow-sm"></div>
            </div>
            
            {/* Range Input Display Blocks Row */}
            <div className="flex gap-2 items-center w-full">
              <div className="flex flex-col flex-1 gap-1">
                <span className="text-[14px] text-gray-600 font-normal">Min</span>
                <input type="number" placeholder="0" className="w-full h-10 px-3 text-[15px] border border-gray-300 rounded-lg bg-white outline-none focus:border-blue-500 box-border text-[#1C1C1C]" />
              </div>
              <div className="flex flex-col flex-1 gap-1">
                <span className="text-[14px] text-gray-600 font-normal">Max</span>
                <input type="number" placeholder="999999" className="w-full h-10 px-3 text-[15px] border border-gray-300 rounded-lg bg-white outline-none focus:border-blue-500 box-border text-[#1C1C1C]" />
              </div>
            </div>

            {/* Custom Interactive Action Button */}
            <button className="w-full h-10 text-[15px] font-medium text-[#0D6EFD] bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors active:scale-[0.98]">
              Apply
            </button>
          </div>
        )}
      </div>

      {/* 🌀 5. Condition Section Block */}
      <div className="border-t border-gray-200 py-3">
        <div 
          onClick={() => toggleSection('condition')} 
          className="flex items-center justify-between mb-3 cursor-pointer hover:opacity-80"
        >
          <h4 className="text-[16px] font-semibold text-[#1C1C1C] m-0">Condition</h4>
          {openSections.condition ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
        </div>
        {openSections.condition && (
          <div className="flex flex-col gap-2.5 transition-all">
            {conditions.map((cond, i) => (
              <label key={i} className="flex items-center gap-3 text-[16px] text-[#1C1C1C] cursor-pointer">
                {/* Custom radio layout button indicators */}
                <input 
                  type="radio" 
                  name="condition" 
                  defaultChecked={i === 0} 
                  className="w-4 h-4 accent-blue-600 cursor-pointer" 
                />
                <span className="text-[#1C1C1C] font-normal">{cond}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ⭐ 6. Ratings Section Block */}
      <div className="border-t border-gray-200 py-3">
        <div 
          onClick={() => toggleSection('ratings')} 
          className="flex items-center justify-between mb-3 cursor-pointer hover:opacity-80"
        >
          <h4 className="text-[16px] font-semibold text-[#1C1C1C] m-0">Ratings</h4>
          {openSections.ratings ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
        </div>
        {openSections.ratings && (
          <div className="flex flex-col gap-2 transition-all">
            {[5, 4, 3, 2].map((starsCount) => (
              <label key={starsCount} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded border-gray-300" />
                <div className="flex items-center text-[#FF9017]">
                  {[...Array(5)].map((_, idx) => (
                    <Star 
                      key={idx} 
                      className={`w-4 h-4 ${idx < starsCount ? 'fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

    </aside>
  );
}
import { Grid, List } from 'lucide-react';

export default function FilterTopBar({ totalItems, view, setView }) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-3 flex items-center justify-between mb-4">
      
      {/* Left Details */}
      <div className="text-[16px] text-dark-main">
        {totalItems} items in <span className="font-semibold">Mobile accessory</span>
      </div>

      {/* Right Controls Container */}
      <div className="flex items-center gap-3">
        {/* Verification Checkbox */}
        <label className="flex items-center gap-2 text-[16px] text-dark-main cursor-pointer select-none">
          <input type="checkbox" className="w-4 h-4 accent-blue-600" defaultChecked />
          <span>Verified only</span>
        </label>

        {/* Sorting Dropdown */}
        <select className="border border-gray-300 rounded-md p-1.5 bg-white text-[15px] text-dark-main outline-none">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>

        {/* Dynamic View Buttons Wrapper */}
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          {/* Grid View Toggle Icon */}
          <button 
            onClick={() => setView('grid')}
            className={`p-2 cursor-pointer border-none transition-colors ${
              view === 'grid' ? 'bg-gray-100 text-dark-main' : 'bg-white text-gray-400 hover:text-gray-600'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          
          {/* List View Toggle Icon */}
          <button 
            onClick={() => setView('list')}
            className={`p-2 cursor-pointer border-none border-l border-gray-300 transition-colors ${
              view === 'list' ? 'bg-gray-100 text-dark-main' : 'bg-white text-gray-400 hover:text-gray-600'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
}
import { ShieldCheck, Globe } from 'lucide-react';

export default function SupplierCard() {
  return (
    <div className="w-full lg:w-[280px] border border-gray-200 rounded-xl bg-white p-5 flex flex-col gap-4 shadow-sm">
      
      {/* Header Block Row */}
      <div className="flex gap-3 items-center">
        <div className="w-11 h-11 bg-[#E3F2FD] text-[#0D6EFD] font-bold text-[20px] rounded-lg flex items-center justify-center">
          R
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] font-medium text-[#1C1C1C] leading-tight">Supplier</span>
          <span className="text-[14px] text-gray-500">Guanjoi Trading LLC</span>
        </div>
      </div>

      <hr className="border-0 border-b border-gray-100 m-0" />

      {/* Meta Features Bullet List Rows */}
      <div className="flex flex-col gap-2.5 text-[15px] text-gray-500">
        <div className="flex items-center gap-3">
          <span className="text-[18px] leading-none">🇩🇪</span>
          <span>Germany, Berlin</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-gray-400" />
          <span>Verified Seller</span>
        </div>
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-gray-400" />
          <span>Worldwide shipping</span>
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-col gap-2 mt-2">
        <button className="w-full h-10 bg-[#0D6EFD] hover:bg-blue-700 text-white font-medium text-[15px] rounded-lg border-none cursor-pointer shadow-sm transition-colors">
          Send inquiry
        </button>
        <button className="w-full h-10 bg-white hover:bg-gray-50 text-[#0D6EFD] border border-gray-300 font-medium text-[15px] rounded-lg cursor-pointer transition-colors">
          Seller's profile
        </button>
      </div>

    </div>
  );
}
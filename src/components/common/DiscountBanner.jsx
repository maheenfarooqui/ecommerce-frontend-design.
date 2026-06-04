export default function DiscountBanner() {
  return (
    <div className="w-full rounded-sm relative overflow-hidden bg-linear-to-r from-[#237CFF] to-[#005ADE] px-6 lg:px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm text-left">
      
    
      <div 
        className="absolute top-0 right-0 bottom-0 w-[40%] bg-[#005ADE] hidden sm:block opacity-60"
        style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      ></div>

      {/* Left side Call To Action Title headings */}
      <div className="flex flex-col gap-1 z-10">
        <h2 className="text-[20px] lg:text-[24px] font-semibold text-white m-0 tracking-tight">
          Super discount on more than 100 USD
        </h2>
        <p className="text-[15px] text-white/80 m-0 font-normal">
          Have you ever finally just write dummy info
        </p>
      </div>

      {/* Right side CTA Orange Action Button */}
      <button className="h-10 px-5 bg-[#FF9017] hover:bg-orange-600 text-white font-medium text-[15px] rounded-lg border-none shadow-sm cursor-pointer transition-all active:scale-95 z-10 whitespace-nowrap">
        Shop now
      </button>

    </div>
  );
}
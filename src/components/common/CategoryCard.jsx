export default function CategoryCard({ title, price, img }) {
  return (
    <div className="bg-white p-4 flex justify-between items-start border-r border-b border-gray-200 min-h-[130px] sm:min-h-[140px] hover:bg-gray-50 transition-colors cursor-pointer group">
      
      {/* 📝 Left Content Block */}
      <div className="flex flex-col gap-1 pr-2">
        <h3 className="text-[16px] font-medium text-[#1C1C1C] m-0 leading-snug group-hover:text-brand-primary transition-colors">
          {title}
        </h3>
        <span className="text-[13px] text-gray-400 font-normal block">
          From <br className="hidden sm:inline" /> USD {price}
        </span>
      </div>

      {/* 📸 Right Image Block */}
      <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] flex items-center justify-center shrink-0 self-end mix-blend-multiply">
        <img 
          src={img} 
          alt={title} 
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </div>

    </div>
  );
}
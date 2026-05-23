export default function RecommendedCard({ price, title, img }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer min-h-[300px]">
      
      {/* 📸 Top Image Wrapper */}
      <div className="w-full h-[150px] flex items-center justify-center mb-4 mix-blend-multiply">
        <img 
          src={img} 
          alt={title} 
          className="max-w-[130px] max-h-[130px] object-contain"
        />
      </div>

      {/* 🏷️ Bottom Content Block */}
      <div className="flex flex-col gap-1 mt-auto">
        {/* Price Bold Text */}
        <span className="text-[16px] font-semibold text-[#1C1C1C]">
          ${price}
        </span>
        
        {/* Description Details Text */}
        <p className="text-[14px] text-gray-400 font-normal m-0 leading-normal line-clamp-2">
          {title}
        </p>
      </div>

    </div>
  );
}
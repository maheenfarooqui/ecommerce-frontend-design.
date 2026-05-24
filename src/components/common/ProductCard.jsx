import { Heart, Star } from 'lucide-react';

export default function ProductCard({ product, view }) {
  const isList = view === 'list';

  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md relative ${
      isList ? 'flex flex-row gap-6 items-center w-full' : 'flex flex-col justify-between'
    }`}>
      
      {/* ❤️ Wishlist Heart Button */}
      <button className="absolute top-4 right-4 p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-blue-600 transition-colors">
        <Heart className="w-5 h-5 fill-current" />
      </button>

      {/* 📸 Image Block */}
      <div className={`flex items-center justify-center shrink-0 mix-blend-multiply ${
        isList ? 'w-[180px] h-[180px]' : 'w-full h-[180px] mb-4'
      }`}>
        <img 
          src={product.img} 
          alt={product.title} 
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* 📝 Content Body */}
      <div className="flex-1 flex flex-col justify-between h-full">
        <div>
          {/* Title - List view mein size thoda bara hota hy */}
          <h3 className={`font-medium text-[#1C1C1C] m-0 hover:text-blue-600 cursor-pointer ${
            isList ? 'text-[18px] mb-2' : 'text-[16px] line-clamp-2 mb-1'
          }`}>
            {product.title}
          </h3>

          {/* Price & Old Price Row */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[18px] font-bold text-[#1C1C1C]">${product.price}</span>
            {product.oldPrice && (
              <span className="text-[14px] text-gray-400 line-through">${product.oldPrice}</span>
            )}
          </div>

          {/* Ratings & Orders Meta Row */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center text-[#FF9017]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
              ))}
            </div>
            <span className="text-[#FF9017] text-[14px] font-medium">{product.rating}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500 text-[14px]">{product.orders} orders</span>
            <span className="text-gray-300">•</span>
            <span className="text-[#00B517] text-[14px] font-medium">Free Shipping</span>
          </div>

          {/* Description Paragraph - ONLY shows in List View! */}
          {isList && (
            <p className="text-[15px] text-gray-500 m-0 leading-normal max-w-[600px] line-clamp-2 mb-4">
              {product.description || "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            </p>
          )}
        </div>

        {/* View Details Button - ONLY shows in List View! */}
        {isList && (
          <button className="w-fit text-[#0D6EFD] text-[16px] font-medium bg-transparent border-none p-0 cursor-pointer hover:underline">
            View details
          </button>
        )}
      </div>

    </div>
  );
}
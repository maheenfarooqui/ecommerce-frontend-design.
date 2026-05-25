import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, view }) {
  const isList = view === 'list';

return (
    // 2. Pure card div ko hum link bana sakte hain taake kahin bhi click ho toh details page khule
    <Link 
      to={`/products/${product.id}`} // ⚡ Tumhara dynamic path yahan bany ga
      className={`bg-white border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md relative no-underline block ${
        isList ? 'flex flex-row gap-6 items-center w-full' : 'flex flex-col justify-between'
      }`}
    >
      
      {/* ⚠️ Wishlist button par click ho to link trigger NA ho, isliye stopPropagation lagate hain */}
      <button 
        onClick={(e) => {
          e.preventDefault(); // Yeh link ko rokega
          e.stopPropagation(); // Yeh click ko card tak jaane se rokega
        }}
        className="absolute top-4 right-4 p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-blue-600 z-10"
      >
        <Heart className="w-5 h-5 fill-current" />
      </button>

      {/* 📸 Image Block */}
      <div className={`flex items-center justify-center shrink-0 mix-blend-multiply ${
        isList ? 'w-[180px] h-[180px]' : 'w-full h-[180px] mb-4'
      }`}>
        <img src={product.img} alt={product.title} className="max-w-full max-h-full object-contain" />
      </div>

      {/* 📝 Content Body */}
      <div className="flex-1 flex flex-col justify-between h-full text-left">
        <div>
          <h3 className={`font-medium text-[#1C1C1C] m-0 hover:text-blue-600 cursor-pointer ${
            isList ? 'text-[18px] mb-2' : 'text-[16px] line-clamp-2 mb-1'
          }`}>
            {product.title}
          </h3>
          
          {/* Prices, Ratings & Description Code (Baaki bilkul same rahega) */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[18px] font-bold text-[#1C1C1C]">${product.price}</span>
          </div>
        </div>
      </div>

    </Link>
  );
}

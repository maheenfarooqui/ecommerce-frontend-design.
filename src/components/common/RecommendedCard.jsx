import { useCart } from "../../context/CartContext";
import { ShoppingCart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RecommendedCard({ id, price, title, img }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition-all duration-300 cursor-pointer min-h-75 relative group overflow-hidden"
      onClick={() => navigate(`/products/${id}`)} // 🎯 Pure card par click karne se bhi detail page khulega
    >
      {/* Top Image Wrapper */}
      <div className="w-full h-37.5 flex items-center justify-center mb-4 mix-blend-multiply">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* 🏷️ Bottom Content Block */}
      <div className="flex flex-col gap-1 mt-auto">
        {/* Price Bold Text */}
        <span className="text-[16px] font-semibold text-dark-main">
          ${price}
        </span>

        {/* Description Details Text */}
        <p className="text-[14px] text-gray-400 font-normal m-0 leading-normal line-clamp-2">
          {title}
        </p>
      </div>

      {/* ⚡ HOVER OVERLAY MODULE (Dual Action Layout) */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2.5 z-20">
        
        {/* 🔥 BUTTON 1: PRODUCT DETAILS BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            navigate(`/products/${id}`);
          }}
          className="w-35 bg-white border border-solid border-[#0D6EFD] text-[#0D6EFD] hover:bg-blue-50/50 p-2.5 rounded-md shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-[13px] font-medium px-4"
        >
          <Eye className="w-4 h-4" />
          <span>View Details</span>
        </button>

        {/* 🛒 BUTTON 2: ADD TO CART BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            addToCart({
              id: id,
              title: title,
              price: price,
              img: img,
              quantity: 1,
            });
          }}
          className="w-35 bg-[#0D6EFD] hover:bg-blue-700 text-white p-2.5 rounded-md shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer border-none flex items-center justify-center gap-2 text-[13px] font-medium px-4"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to cart</span>
        </button>

      </div>
    </div>
  );
}
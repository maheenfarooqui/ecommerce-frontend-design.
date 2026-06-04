import { useCart } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function RecommendedCard({ id, price, title, img }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition-all duration-300 cursor-pointer min-h-75 relative group overflow-hidden">
      {/* Top Image Wrapper */}
      <div className="w-full h-37.5 flex items-center justify-center mb-4 mix-blend-multiply">
        <img
          src={img}
          alt={title}
          className="max-w-32.5 max-h-32.5 object-contain group-hover:scale-105 transition-transform duration-300"
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

      {/* ⚡ 4. HOVER OVERLAY MODULE (Add to Cart Action Frame) */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
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
          className="bg-[#0D6EFD] hover:bg-blue-700 text-white p-2.5 rounded-md shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer border-none flex items-center justify-center gap-2 text-[13px] font-medium px-4"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { useCart } from "../../context/CartContext";
import { ShoppingCart, Eye } from "lucide-react"; 
import { useNavigate } from "react-router-dom"; 

export default function CategoryCard({ id, title, price, img }) {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // 🔥 Router Init

  return (
    <div 
      onClick={() => navigate(`/products/${id}`)}
      className="p-4 flex flex-col justify-between items-start border-r border-b border-solid border-gray-100 bg-white relative group hover:bg-slate-50/50 transition-colors duration-200 h-31.75 cursor-pointer"
    >
      {/* Upper text content */}
      <div className="w-full text-left z-10">
        <h4
          className="text-[16px] text-dark-main font-normal m-0 truncate w-full"
          title={title}
        >
          {title}
        </h4>
        <p className="text-[14px] text-gray-400 m-0 mt-1 font-medium">
          From USD {price || "10"}
        </p>
      </div>

      {/* Bottom image block with custom absolute button layer */}
      <div className="w-25 h-18.75 flex items-center justify-center absolute bottom-2 right-2 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* ⚡ HOVER DUAL-ACTION OVERLAY MODULE */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 z-20">
          
          {/* 🔥 ICON 1: VIEW DETAILS BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Event bubbling stop ki
              navigate(`/products/${id}`);
            }}
            className="bg-white border border-solid border-[#0D6EFD] text-[#0D6EFD] hover:bg-blue-50 p-2 rounded-md shadow-md transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 cursor-pointer flex items-center justify-center"
            title="View Details"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>

          {/* 🛒 ICON 2: ADD TO CART BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Event bubbling stop ki
              addToCart({
                id: id,
                title: title,
                price: price || 10,
                img: img,
                quantity: 1,
              });
            }}
            className="bg-[#0D6EFD] hover:bg-blue-700 text-white p-2 rounded-md shadow-md transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 cursor-pointer border-none flex items-center justify-center"
            title="Add to cart"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </div>
  );
}
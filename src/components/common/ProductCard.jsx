import { useCart } from "../../context/CartContext";
import { ShoppingCart, Heart, Eye } from "lucide-react"; // ⚡ Eye icon details ke liye lagaya
import { useNavigate } from "react-router-dom"; // ⚡ Navigation hook setup kiya bhae

export default function ProductCard({ product, view }) {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // 🔥 Router Hook Init

  const {
    id,
    title = "GoPro HERO6 4K Action Camera - Black",
    price = 99.5,
    oldPrice = 1128.0,
    img,
    rating = "7.5",
    orders = "154 orders",
    shipping = "Free Shipping",
  } = product;

  
  if (view === "grid") {
    return (
      <div 
        onClick={() => navigate(`/products/${id}`)} // 🎯 Matrix Link: Card navigation shortcut
        className="border border-solid border-[#DEE2E7] rounded-md p-5 flex flex-col justify-between relative group hover:shadow-md transition-all duration-300 h-101.25 w-full sm:max-w-73.5 box-border overflow-hidden bg-white cursor-pointer"
      >
        <button 
          onClick={(e) => e.stopPropagation()} // Click conflict lock
          className="absolute bottom-20 right-3 p-2 bg-white border border-solid border-[#DEE2E7] rounded-md text-[#0D6EFD] hover:bg-blue-50 transition-colors cursor-pointer z-10 shadow-xs"
        >
          <Heart className="w-5 h-5 text-[#0D6EFD]" />
        </button>

        {/* 📸 Image Box - High Resolution Framing */}
        <div className="w-full h-55 flex items-center justify-center mix-blend-multiply relative mt-2">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-contain p-2 group-hover:scale-103 transition-transform duration-300"
          />
        </div>

        {/* Separator block space structure */}
        <div className="w-full border-t border-solid border-[#EFF2F4] my-2"></div>

        {/* 🏷️ Bottom Meta Specs Block */}
        <div className="flex flex-col gap-1.5 text-left w-full">
          {/* Price Container */}
          <div className="flex items-baseline gap-2">
            <span className="text-[18px] font-semibold text-dark-main">
              ${Number(price).toFixed(2)}
            </span>
            {oldPrice && (
              <span className="text-[14px] text-[#9A9A9A] line-through font-normal">
                ${Number(oldPrice).toFixed(2)}
              </span>
            )}
          </div>

          {/* Stars Matrix */}
          <div className="flex items-center gap-1.5 text-[14px] font-normal">
            <div className="flex text-[#FF9017] gap-0.5">
              {"★★★★★".split("").map((star, i) => (
                <span
                  key={i}
                  className={`${i < 4 ? "text-[#FF9017]" : "text-[#D5D7DB]"}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-[#FF9017] font-medium pt-0.5">{rating}</span>
          </div>

          {/* Title description alignment */}
          <p
            className="text-[14px] text-[#606060] font-normal m-0 leading-normal line-clamp-2"
            title={title}
          >
            {title}
          </p>
        </div>

        {/* ⚡ HOVER OVERLAY MODULE (Grid Dual Action Frame) */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2.5 z-20 rounded-md">
          
          {/* 🔥 GRID BUTTON 1: PRODUCT DETAILS BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/products/${id}`);
            }}
            className="w-35 bg-white border border-solid border-[#0D6EFD] text-[#0D6EFD] hover:bg-blue-50/50 p-2.5 rounded-md shadow-sm transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 text-[13px] font-medium px-4"
          >
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </button>

          {/* 🛒 GRID BUTTON 2: ADD TO CART BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({ id, title, price, img, quantity: 1 });
            }}
            className="w-35 bg-[#0D6EFD] hover:bg-blue-700 text-white p-2.5 rounded-md shadow-md transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 cursor-pointer border-none flex items-center justify-center gap-2 text-[13px] font-medium px-4"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    );
  }

  
  return (
    <div 
      onClick={() => navigate(`/products/${id}`)} // 🎯 Matrix Link: Pure list item navigation
      className="w-full lg:max-w-230 h-auto lg:h-57.5 bg-white border border-solid border-[#DEE2E7] rounded-md p-5 flex flex-col sm:flex-row items-center gap-6 relative group hover:shadow-xs transition-shadow box-border overflow-hidden cursor-pointer"
    >
      {/* Left side: Balanced Big Image Frame */}
      <div className="w-full sm:w-52.5 h-47.5 shrink-0 bg-transparent flex items-center justify-center mix-blend-multiply">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-300"
        />
      </div>

      {/* Right side: Detailed Specs Metadata Pane */}
      <div className="flex-1 flex flex-col justify-start h-full text-left w-full pr-12 relative pt-1">
        {/* Heart/Favorite Icon top right corner inside bounds */}
        <button 
          onClick={(e) => e.stopPropagation()} // Click bubble freeze
          className="absolute top-1 right-1 p-2 bg-white border border-solid border-[#DEE2E7] rounded-md text-[#0D6EFD] hover:bg-blue-50 transition-colors cursor-pointer z-10 shadow-xs"
        >
          <Heart className="w-4 h-4 text-[#0D6EFD]" />
        </button>

        {/* Product Heading Title */}
        <h4 className="text-[16px] text-dark-main font-medium m-0 leading-snug hover:text-[#0D6EFD] cursor-pointer transition-colors line-clamp-1">
          {title}
        </h4>

        {/* Price Matrix block row */}
        <div className="flex items-center gap-2.5 mt-2">
          <span className="text-[20px] font-bold text-dark-main">
            ${Number(price).toFixed(2)}
          </span>
          {oldPrice && (
            <span className="text-[14px] text-[#A9B4CD] line-through font-normal">
              ${Number(oldPrice).toFixed(2)}
            </span>
          )}
        </div>

        {/* Rating stars + Orders + Shipping metadata layout */}
        <div className="flex flex-wrap items-center gap-2 text-[14px] my-2 select-none">
          <div className="flex text-[#FF9017]">
            {"★★★★★".split("").map((star, i) => (
              <span
                key={i}
                className={`${i < 4 ? "text-[#FF9017]" : "text-[#D5D7DB]"}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-[#FF9017] font-medium">{rating}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-muted">{orders}</span>
          <span className="text-gray-300">•</span>
          <span className="text-[#00B517] font-medium">{shipping}</span>
        </div>

        {/* Dynamic Lorem Description block */}
        <p className="text-[14px] text-[#505050] m-0 leading-relaxed font-normal line-clamp-2 md:line-clamp-3 text-justify mt-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>

        {/* 🔥 LIST VIEW ACTION TEXT CONTROL */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/products/${id}`);
          }}
          className="text-[14px] text-[#0D6EFD] font-medium bg-transparent border-none outline-none mt-3 cursor-pointer self-start p-0 hover:underline"
        >
          View details
        </button>
      </div>

      {/* 🛒 CENTRAL ADD TO CART BUTTON ACTION FOR LIST VIEW */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hidden sm:block">
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart({ id, title, price, img, quantity: 1 });
          }}
          className="bg-[#0D6EFD] hover:bg-blue-700 text-white p-2 px-4 rounded-md shadow-md cursor-pointer border-none flex items-center justify-center gap-1.5 text-[13px] font-medium transition-transform"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
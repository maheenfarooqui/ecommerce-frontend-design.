import { ShoppingCart, Eye } from 'lucide-react';
// ⚡ React Router DOM ka navigation hook un-comment kar lo bhae
import { useNavigate } from 'react-router-dom';

// Apni assets images dynamically import karlena bhae
import tabletImg from '../../assets/iphone.png'; 
import phoneImg from '../../assets/4.png'; 
import watchImg from '../../assets/watch.png'; 
import laptopImg from '../../assets/laptop.png'; 

export default function RelatedProducts() {
  const navigate = useNavigate(); // 🔥 Navigation engine initialized

  const relatedData = [
    { id: 1, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: tabletImg },
    { id: 2, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: phoneImg },
    { id: 3, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: watchImg },
    { id: 4, title: 'GoPro HERO6 4K Action Camera - Black', price: '99.50', img: laptopImg },
  ];

  const handleDetailNavigation = (productId) => {
    // 🔥 Aapke project ke route ke mutabiq ye dynamic ID pass karega
    navigate(`/products/${productId}`);
  };

  return (
    <div className="w-full bg-white border border-solid border-[#E0E0E0] rounded-sm p-6 box-border mb-6 text-left">
      
      <h3 className="text-[20px] font-semibold text- m-0 mb-5 tracking-tight">
        Saved for later
      </h3>
      
      {/* 🚀 Outer layout flexible grid container */}
      <div className="flex flex-wrap gap-5 justify-start">
        {relatedData.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col group bg-white border border-solid border-[#DEE2E7] rounded-md p-3 box-border overflow-hidden transition-all duration-300 hover:shadow-md select-none"
            style={{ width: '270px', height: '383px' }}
          >
            
            {/* 📸 Image Box - Exact Figma Dimensions Locked + Smooth Details Overlay */}
            <div 
              className="bg-[#F7F7F7] rounded-md p-4 flex items-center justify-center mix-blend-multiply overflow-hidden relative cursor-pointer"
              style={{ width: '244px', height: '240px' }} 
              onClick={() => handleDetailNavigation(item.id)}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-103" 
              />

              {/* ⚡ HOVER OVERLAY */}
              <div className="absolute inset-0 bg-[#0d6efd]/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {/* 🔥 Is button par click karne se bhi ab perfectly page routing chalegi */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation(); // Event bubbling stop ki
                    handleDetailNavigation(item.id);
                  }}
                  className="bg-white text-[#0D6EFD] border border-solid border-[#0D6EFD] px-3 py-1.5 rounded-md text-[13px] font-medium flex items-center gap-1.5 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#0D6EFD] hover:text-white cursor-pointer outline-none"
                >
                  <Eye className="w-4 h-4" />
                  <span>Product Details</span>
                </button>
              </div>
            </div>
            
            {/* 🏷️ Product Metadata Details Layout */}
            <div className="mt-3 flex flex-col justify-between flex-1">
              <div>
                {/* Real Price Format */}
                <span className="text-[16px] text-dark-main font-semibold block">
                  ${Number(item.price).toFixed(2)}
                </span>
                
                {/* Title text */}
                <p 
                  className="text-[14px] text-[#606060] font-normal m-0 mt-1 leading-snug line-clamp-2 cursor-pointer hover:text-[#0D6EFD] transition-colors" 
                  title={item.title}
                  onClick={() => handleDetailNavigation(item.id)}
                >
                  {item.title}
                </p>
              </div>
              
              {/* ⚡ THE EXACT FIGMA "Move to cart" OUTLINE BUTTON */}
              <button className="mb-1 mt-4 w-fit border border-solid border-[#DEE2E7] hover:border-[#0D6EFD] bg-white hover:bg-blue-50/30 text-[#0D6EFD] rounded-md h-9 px-4 flex items-center justify-center gap-2 text-[14px] font-medium cursor-pointer transition-all active:scale-98 select-none">
                <ShoppingCart className="w-4 h-4 text-[#0D6EFD]" />
                <span className="pt-0.5">Move to cart</span>
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
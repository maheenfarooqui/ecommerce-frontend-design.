
import blazerImg from '../../assets/suit.png'; 
import tshirtImg from '../../assets/tshirt.png'; 
import jacketImg from '../../assets/jacket.png'; 
import shirtImg from '../../assets/image.png'; 
import bagImg from '../../assets/bag.png'; 

export default function YouMayLikeSidebar() {
  const suggestions = [
    { id: 1, title: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50', img: blazerImg },
    { id: 2, title: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50', img: tshirtImg },
    { id: 3, title: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50', img: jacketImg },
    { id: 4, title: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50', img: shirtImg },
    { id: 5, title: 'New Summer Men\'s castrol T-Shirts', price: '$7.00 - $99.50', img: bagImg },
  ];

  return (
    <div className="w-full lg:w-70 border border-solid border-[#DEE2E7] rounded-sm bg-white p-4 box-border text-left select-none">
      {/* Sidebar Section Core Header */}
      <h3 className="text-[16px] font-semibold text-dark-main m-0 mb-4 tracking-tight">
        You may like
      </h3>
      
      {/* Items Vertical Collection Container */}
      <div className="flex flex-col gap-4">
        {suggestions.map((item) => (
          <div key={item.id} className="flex gap-3 items-start cursor-pointer group">
            
            {/* 📸 Image Frame Box - Clean Layout Wrapper */}
            <div className="w-20 h-20 border border-solid border-[#E0E0E0] rounded-md bg-white p-2 shrink-0 flex items-center justify-center mix-blend-multiply overflow-hidden transition-all group-hover:border-[#0D6EFD]">
              <img 
                src={item.img} 
                alt={item.title} 
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            
            {/* 🏷️ Text Details Info - Figma Text Alignment Engine */}
            <div className="flex flex-col min-w-0 pt-0.5">
              {/* Product Title Heading - Breaking into 2 lines beautifully */}
              <span className="text-[14px] text-[#606060] font-normal leading-5 line-clamp-2 transition-colors duration-200 group-hover:text-[#0D6EFD]">
                {item.title}
              </span>
              
              {/* Price Range Format matching your target screenshot screen */}
              <span className="text-[14px] text-[#A2A6B0] font-normal mt-1 block">
                {item.price}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
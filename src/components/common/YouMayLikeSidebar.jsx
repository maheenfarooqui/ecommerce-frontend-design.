// Dynamic Dummy data items (Tum real files dynamically pass krlena bhae)
import blazerImg from '../../assets/laptop.png'; 

export default function YouMayLikeSidebar() {
  const suggestions = [
    { id: 1, title: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50', img: blazerImg },
    { id: 2, title: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50', img: blazerImg },
    { id: 3, title: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50', img: blazerImg },
    { id: 4, title: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50', img: blazerImg },
    { id: 5, title: 'New Summer Men\'s castrol T-Shirts', price: '$7.00 - $99.50', img: blazerImg },
  ];

  return (
    <div className="w-full lg:w-[280px] border border-gray-200 rounded-xl bg-white p-4 box-border shadow-sm">
      <h3 className="text-[16px] font-semibold text-[#1C1C1C] m-0 mb-4">You may like</h3>
      
      <div className="flex flex-col gap-4">
        {suggestions.map((item) => (
          <div key={item.id} className="flex gap-3 items-center cursor-pointer group">
            {/* Image Box */}
            <div className="w-[56px] h-[56px] border border-gray-200 rounded-md bg-white p-1 shrink-0 flex items-center justify-center mix-blend-multiply">
              <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain" />
            </div>
            
            {/* Text Details Info */}
            <div className="flex flex-col min-w-0">
              <span className="text-[14px] text-[#1C1C1C] font-normal truncate group-hover:text-blue-600 transition-colors">
                {item.title}
              </span>
              <span className="text-[14px] text-gray-400 font-normal mt-0.5">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
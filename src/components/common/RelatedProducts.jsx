// Apni assets images dynamically import karlena bhae
import walletImg from '../../assets/phone.png'; 

export default function RelatedProducts() {
  const relatedData = [
    { id: 1, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', img: walletImg },
    { id: 2, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', img: walletImg },
    { id: 3, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', img: walletImg },
    { id: 4, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', img: walletImg },
    { id: 5, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', img: walletImg },
    { id: 6, title: 'Xiaomi Redmi 8 Original', price: '$32.00-$40.00', img: walletImg },
  ];

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-5 box-border mb-6 shadow-sm text-left">
      <h3 className="text-[20px] font-semibold text-[#1C1C1C] m-0 mb-5">Related products</h3>
      
      {/* 🚀 Grid: Mobile par 2, Tablet par 3, Desktop par 6 cards display honge */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {relatedData.map((item) => (
          <div key={item.id} className="flex flex-col cursor-pointer group">
            {/* Image Wrapper Wrapper */}
            <div className="w-full aspect-square bg-[#F7FAFC] border border-gray-100 rounded-lg p-3 flex items-center justify-center mix-blend-multiply transition-all group-hover:shadow-sm">
              <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain" />
            </div>
            
            {/* Product Meta Text Info */}
            <div className="mt-3 flex flex-col">
              <span className="text-[15px] text-[#505050] font-normal line-clamp-2 leading-snug group-hover:text-[#0D6EFD] transition-colors">
                {item.title}
              </span>
              <span className="text-[15px] text-gray-400 font-normal mt-1">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
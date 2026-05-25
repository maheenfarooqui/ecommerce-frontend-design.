import Container from '../components/common/Container';
import ProductGallery from '../components/common/ProductGallery';
import SupplierCard from '../components/common/SupplierCard';
import ProductDescriptionTabs from '../components/common/ProductDescriptionTabs';
import RelatedProducts from '../components/common/RelatedProducts';
import DiscountBanner from '../components/common/DiscountBanner';
import { Star, MessageSquare, ShoppingBag, Heart, Check } from 'lucide-react';

import productMain from '../assets/image.png'; 
import productSide from '../assets/image1.png'; 
import productBack from '../assets/image2.png';  
import productDetail from '../assets/image3.png';
import productDetails from '../assets/image4.png';
export default function ProductDetailsPage() {
  const dummyImages = [productMain,
    productSide,  
    productBack, 
    productDetail,
    productDetails
];

  const specsTable = [
    { label: 'Price:', value: 'Negotiable' },
    { label: 'Type:', value: 'Classic shoes' },
    { label: 'Material:', value: 'Plastic material' },
    { label: 'Design:', value: 'Modern nice' },
    { label: 'Customization:', value: 'Customized logo and design custom packages' },
    { label: 'Protection:', value: 'Refund Policy' },
    { label: 'Warranty:', value: '2 years full warranty' },
  ];

  return (
    <div className="w-full bg-[#F7FAFC] min-h-screen py-6 select-none">
      <Container>
        
        {/* 🟩 Main Card Structure Container Block Wrapper */}
        <div className="w-full bg-white border border-gray-200 rounded-xl p-5 lg:p-7 flex flex-col lg:flex-row gap-8 items-start mb-8 shadow-sm">
          
          {/* Left Block: Dynamic Target Image Sliders Switcher */}
          <ProductGallery images={dummyImages} />

          {/* Center Block: Core Specifications Details & Meta Data Description Info */}
          <div className="flex-1 flex flex-col">
            {/* Stock Availability Indicator Badge */}
            <span className="text-[#00B517] text-[15px] font-medium flex items-center gap-1.5 mb-1">
              <Check className="w-4 h-4 stroke-[3]" /> In stock
            </span>

            {/* Core Header Title */}
            <h1 className="text-[20px] lg:text-[24px] font-bold text-[#1C1C1C] m-0 leading-snug tracking-tight">
              Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </h1>

            {/* Ratings & Orders Feedback Statistics Meta Row */}
            <div className="flex items-center flex-wrap gap-4 my-3 text-[15px]">
              <div className="flex items-center gap-1 text-[#FF9017]">
                <div className="flex items-center"><Star className="w-4 h-4 fill-current" /></div>
                <span className="font-medium">9.3</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2 text-gray-500">
                <MessageSquare className="w-4 h-4" /> <span>32 reviews</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2 text-gray-500">
                <ShoppingBag className="w-4 h-4" /> <span>154 sold</span>
              </div>
            </div>

            {/* 🏷️ Tiered Quantity Wholesale Pricing Horizontal Blocks Section */}
            <div className="w-full bg-[#FFF7EE] p-4 rounded-xl grid grid-cols-3 gap-4 border-l-4 border-[#FF9017] box-border mb-5">
              <div className="flex flex-col">
                <span className="text-[18px] font-bold text-[#FF9017]">$98.00</span>
                <span className="text-[13px] text-gray-500">50-100 pcs</span>
              </div>
              <div className="flex flex-col border-l border-r border-gray-200 px-4">
                <span className="text-[18px] font-bold text-[#1C1C1C]">$90.00</span>
                <span className="text-[13px] text-gray-500">100-700 pcs</span>
              </div>
              <div className="flex flex-col px-2">
                <span className="text-[18px] font-bold text-[#1C1C1C]">$78.00</span>
                <span className="text-[13px] text-gray-500">700+ pcs</span>
              </div>
            </div>

            {/* 📋 Technical Specifications Dynamic Key/Value Description Table View */}
            <div className="flex flex-col w-full gap-3 text-[15px]">
              {specsTable.map((row, idx) => (
                <div key={idx} className="flex border-0 border-b border-gray-50 pb-2 last:border-none">
                  <span className="w-[140px] shrink-0 text-gray-400 font-normal">{row.label}</span>
                  <span className="text-[#505050] font-normal flex-1">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Wishlist Link CTA */}
            <button className="flex items-center gap-2 text-[#0D6EFD] font-medium text-[15px] bg-transparent border-none p-0 mt-5 w-fit cursor-pointer hover:underline">
              <Heart className="w-4 h-4" /> Save for later
            </button>
          </div>

          {/* Right Block: Supplier Isolation Float Control Card */}
          <SupplierCard />

        </div>
<ProductDescriptionTabs />
<RelatedProducts />
<DiscountBanner />
        {/* 🔽 Note: Tumne bataya ke page niche aur bhi hy (Tabs details descriptive sections) */}
        {/* Us bottom segment block ko hum next custom module mein separate deal karenge */}

      </Container>
    </div>
  );
}
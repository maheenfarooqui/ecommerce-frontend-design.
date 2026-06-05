import { useParams, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import ProductGallery from "../components/common/ProductGallery";
import SupplierCard from "../components/common/SupplierCard";
import ProductDescriptionTabs from "../components/common/ProductDescriptionTabs";
import RelatedProducts from "../components/common/RelatedProducts";
import DiscountBanner from "../components/common/DiscountBanner";
import { Star, MessageSquare, ShoppingBag, Heart, Check, ArrowLeft } from "lucide-react";

import tabletImg from "../assets/iphone.png"; 
import phoneImg from "../assets/phone.png";  
import watchImg from "../assets/watch.png";  
import laptopImg from "../assets/laptop.png"; 

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const allProductsDataset = [
    {
      id: 1,
      title: "Xiaomi Pad 6 Pro Ultra-Slim Entertainment Tablet",
      priceTier1: "298.00",
      priceTier2: "280.00",
      priceTier3: "250.00",
      rating: "9.3",
      reviews: "32",
      sold: "154",
      type: "Tablets",
      material: "Aluminium Alloy",
      design: "Premium Sleek",
      images: [tabletImg, tabletImg, tabletImg, tabletImg]
    },
    {
      id: 2,
      title: "GoPro HERO6 4K Action Camera - Waterproof Black Edition",
      priceTier1: "99.50",
      priceTier2: "90.00",
      priceTier3: "78.00",
      rating: "8.9",
      reviews: "45",
      sold: "320",
      type: "Cameras",
      material: "Composite Plastic",
      design: "Rugged Outdoor",
      images: [phoneImg, phoneImg, phoneImg, phoneImg]
    },
    {
      id: 3,
      title: "Fitness Smart Watch Series 9 Space Gray",
      priceTier1: "150.00",
      priceTier2: "135.00",
      priceTier3: "110.00",
      rating: "9.5",
      reviews: "88",
      sold: "512",
      type: "Wearables",
      material: "Silicon & Metal",
      design: "Sports Minimalist",
      images: [watchImg, watchImg, watchImg, watchImg]
    },
    {
      id: 4,
      title: "MacBook Pro M3 Max 16-inch Space Black",
      priceTier1: "2499.00",
      priceTier2: "2399.00",
      priceTier3: "2250.00",
      rating: "9.9",
      reviews: "112",
      sold: "89",
      type: "Laptops",
      material: "Recycled Aluminium",
      design: "Pro Professional",
      images: [laptopImg, laptopImg, laptopImg, laptopImg]
    }
  ];


  let currentProduct = allProductsDataset.find((product) => product.id === Number(id));
if (!currentProduct) {
    currentProduct = {
      id: Number(id),
      title: `Dynamic Premium Super Product Model #${id}`, // Clicked Product Title Mock
      priceTier1: "120.00",
      priceTier2: "110.00",
      priceTier3: "95.00",
      rating: "8.5",
      reviews: "18",
      sold: "240",
      type: "Tech Equipment",
      material: "Polycarbonate Matrix",
      design: "Modern Ergonomic",

      images: [phoneImg, phoneImg, phoneImg, phoneImg] 
    };
  }

  // 📋 Technical Specifications Table Generator Engine
  const specsTable = [
    { label: "Price:", value: "Negotiable" },
    { label: "Type:", value: currentProduct.type },
    { label: "Material:", value: currentProduct.material },
    { label: "Design:", value: currentProduct.design },
    { label: "Customization:", value: "Customized logo and design custom packages" },
    { label: "Protection:", value: "Refund Policy" },
    { label: "Warranty:", value: "2 years full warranty" },
  ];

  return (
    <div className="w-full bg-bg-gray min-h-screen py-6 select-none">
      <Container>
        {/* 🟩 Main Card Structure Container Block Wrapper */}
        <div className="w-full bg-white border border-gray-200 rounded-xl p-5 lg:p-7 flex flex-col lg:flex-row gap-8 items-start mb-8 shadow-sm">
          
          {/* Left Block: Dynamic Target Image Sliders Switcher */}
          <ProductGallery images={currentProduct.images} />

          {/* Center Block: Core Specifications Details */}
          <div className="flex-1 flex flex-col text-left">
            {/* Stock Availability Indicator Badge */}
            <span className="text-[#00B517] text-[15px] font-medium flex items-center gap-1.5 mb-1">
              <Check className="w-4 h-4 stroke-3" /> In stock
            </span>

            {/* Core Header Title */}
            <h1 className="text-[20px] lg:text-[24px] font-bold text-dark-main m-0 leading-snug tracking-tight">
              {currentProduct.title}
            </h1>

            {/* Ratings & Orders Feedback Statistics Meta Row */}
            <div className="flex items-center flex-wrap gap-4 my-3 text-[15px]">
              <div className="flex items-center gap-1 text-[#FF9017]">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-medium">{currentProduct.rating}</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2 text-gray-500">
                <MessageSquare className="w-4 h-4" /> <span>{currentProduct.reviews} reviews</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-2 text-gray-500">
                <ShoppingBag className="w-4 h-4" /> <span>{currentProduct.sold} sold</span>
              </div>
            </div>

            {/* 🏷️ Tiered Quantity Wholesale Pricing Blocks Section */}
            <div className="w-full bg-[#FFF7EE] p-4 rounded-xl grid grid-cols-3 gap-4 box-border mb-5">
              <div className="flex flex-col">
                <span className="text-[18px] font-bold text-[#FF9017]">
                  ${currentProduct.priceTier1}
                </span>
                <span className="text-[13px] text-gray-500">50-100 pcs</span>
              </div>
              <div className="flex flex-col border-l border-r border-gray-200 px-4">
                <span className="text-[18px] font-bold text-dark-main">
                  ${currentProduct.priceTier2}
                </span>
                <span className="text-[13px] text-gray-500">100-700 pcs</span>
              </div>
              <div className="flex flex-col px-2">
                <span className="text-[18px] font-bold text-dark-main">
                  ${currentProduct.priceTier3}
                </span>
                <span className="text-[13px] text-gray-500">700+ pcs</span>
              </div>
            </div>

            {/* 📋 Technical Specifications Table View */}
            <div className="flex flex-col w-full gap-3 text-[15px]">
              {specsTable.map((row, idx) => (
                <div
                  key={idx}
                  className="flex border-0 border-b border-gray-50 pb-2 last:border-none"
                >
                  <span className="w-35 shrink-0 text-gray-400 font-normal">
                    {row.label}
                  </span>
                  <span className="text-[#505050] font-normal flex-1">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Wishlist Link CTA */}
            <button className="flex items-center gap-2 text-[#0D6EFD] font-medium text-[15px] bg-transparent border-none p-0 mt-5 w-fit cursor-pointer hover:underline">
              <Heart className="w-4 h-4" /> Save for later
            </button>
          </div>

          {/* Right Block: Supplier Control Card */}
          <SupplierCard />
        </div>
        
        <ProductDescriptionTabs product={currentProduct} />
        <RelatedProducts currentId={id} />
        <DiscountBanner />
      </Container>
    </div>
  );
}
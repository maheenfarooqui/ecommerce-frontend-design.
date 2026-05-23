import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import HeroSection from "../components/section/HeroSection";
import DealsSection from "../components/section/DealsSection";
import ProductGridSection from "../components/section/ProductGridSection";
import InquirySection from "../components/section/InquirySection";
import RecommendedSection from "../components/section/RecommendedSection";
import ServicesSection from "../components/section/ServicesSection";
import RegionSuppliersSection from "../components/section/RegionSuppliersSection";
import NewsletterSubscription from "../components/section/NewsletterSubscription";
import { homeOutdoorData, electronicsData } from "../utils/data";
import homeBanner from '../assets/1st.png';
import electroBanner from '../assets/second.png';
// src/pages/HomePage.jsx
export default function HomePage() {
  return (
    <div className="w-full bg-bg-gray min-h-screen">
        <Navbar />
         <HeroSection />
          <DealsSection />
 <ProductGridSection 
        title="Home and outdoor" 
        bannerImg={homeBanner} 
        products={homeOutdoorData}
      />

    
      <ProductGridSection 
        title="Consumer electronics and gadgets" 
        bannerImg={electroBanner} 
        products={electronicsData}
      />
      <InquirySection />
      <RecommendedSection />
      <ServicesSection />
      <RegionSuppliersSection />
      <NewsletterSubscription />
        <Footer />
       
    </div>
  );
}
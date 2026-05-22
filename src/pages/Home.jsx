import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import HeroSection from "../components/section/HeroSection";
import DealsSection from "../components/section/DealsSection";
import ProductGridSection from "../components/section/ProductGridSection";
import { homeOutdoorData, electronicsData } from "../utils/data";
import homeBanner from '../assets/1st.png';      // Ya jo bhi aapka exact relative path hy
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
        <Footer />
       
    </div>
  );
}
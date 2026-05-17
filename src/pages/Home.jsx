import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import HeroSection from "../components/section/HeroSection";
// src/pages/HomePage.jsx
export default function HomePage() {
  return (
    <div className="w-full bg-bg-gray min-h-screen">
        <Navbar />
         <HeroSection />
        <Footer />
       
    </div>
  );
}
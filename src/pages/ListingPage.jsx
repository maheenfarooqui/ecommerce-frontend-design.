import Container from '../components/common/Container';
import FilterSidebar from '../components/common/FilterSidebar';
import ProductsGridList from '../components/common/ProductsGridList';
import NewsletterSubscription from "../components/section/NewsletterSubscription";
import { listingProductsData } from '../utils/data';
import { ChevronRight } from 'lucide-react';

export default function ListingPage() {
  return (
    <div className="w-full bg-[#F7FAFC] min-h-screen">
      
      {/* 🍞 Breadcrumbs Row Section */}
      <div className="w-full py-4">
        <Container>
          <div className="flex items-center gap-1.5 text-[14px] text-gray-400 font-normal">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="hover:text-blue-600 cursor-pointer">Clothings</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="hover:text-blue-600 cursor-pointer">Men's wear</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-600 font-medium">Summer clothing</span>
          </div>
        </Container>
      </div>

      {/* 🏢 Main Two-Column Layout Architecture */}
      <Container className="pb-12">
        <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
          
          {/* Left Block: Sticky Filter Sidebar */}
          <FilterSidebar />

          {/* Right Block: Dynamic Intelligent Products Controller */}
          <ProductsGridList productsData={listingProductsData} />

        </div>
    
      </Container>

      {/* 📧 Newsletter Subscription Section */}
      <NewsletterSubscription />
      
    </div>

  );
}
import { useState } from 'react';
import FilterTopBar from '../layouts/FilterTopBar';
import ProductCard from './ProductCard';

export default function ProductsGridList({ productsData }) {
  // ⚡ The single source of layout truth
  const [view, setView] = useState('grid'); 

  return (
    <div className="flex-1 flex flex-col">
      {/* Pass structural state controls to Top Bar Component */}
      <FilterTopBar 
        totalItems={productsData?.length || 0} 
        view={view} 
        setView={setView} 
      />

      {/* Dynamic Conditional Wrapper Layout */}
      <div className={
        view === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' // Grid layout: 3 Columns on desktop
          : 'flex flex-col gap-3' // List layout: Straight stack row items
      }>
        {productsData?.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            view={view} 
          />
        ))}
      </div>
    </div>
  );
}
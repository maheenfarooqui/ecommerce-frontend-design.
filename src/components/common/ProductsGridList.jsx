import { useState } from "react";
import FilterTopBar from "../layouts/FilterTopBar";
import ProductCard from "./ProductCard";
import { X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function ProductsGridList({ productsData }) {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const [activeFilters, setActiveFilters] = useState([
    "Samsung",
    "Apple",
    "Poco",
    "Metallic",
    "4 star",
    "3 star",
  ]);

  const removeFilter = (name) => {
    setActiveFilters((prev) => prev.filter((item) => item !== name));
  };

  return (
    <div className="flex-1 flex flex-col w-full">
      {/* 1. TOP BAR CONTROL ACTIONS */}
      <FilterTopBar
        totalItems={productsData?.length || 0}
        view={view}
        setView={setView}
      />

      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-4 mt-2">
          {activeFilters.map((filter, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-2.5 py-1.5 bg-white border border-solid border-[#0D6EFD] rounded-md text-[14px] text-dark-main font-normal transition-all"
            >
              <span className="text-[#505050]">{filter}</span>
              <X
                className="w-3.5 h-3.5 text-[#9A9A9A] hover:text-[#0D6EFD] cursor-pointer transition-colors"
                onClick={() => removeFilter(filter)}
              />
            </div>
          ))}

          <button
            onClick={() => setActiveFilters([])}
            className="text-[14px] text-[#0D6EFD] hover:text-blue-700 font-normal bg-transparent border-none cursor-pointer px-2 py-1.5 transition-colors"
          >
            Clear all filter
          </button>
        </div>
      )}

      {/* 3. DYNAMIC PRODUCTS GRID STRATA */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
            : "flex flex-col gap-3 w-full"
        }
      >
        {productsData?.map((product) => (
          <ProductCard key={product.id} product={product} view={view} />
        ))}
      </div>

      <div className="w-full flex items-center justify-between lg:justify-end gap-3 mt-6 select-none">
        {/* Items Page Controller Dropdown */}
        <div className="flex items-center border border-solid border-[#DEE2E7] rounded-md bg-white px-3 h-10 cursor-pointer text-[14px] text-dark-main font-normal relative gap-4">
          <span className="text-dark-main">Show 10</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
          <select className="absolute inset-0 opacity-0 cursor-pointer w-full h-full">
            <option>Show 10</option>
            <option>Show 20</option>
            <option>Show 30</option>
          </select>
        </div>

        {/* Numeric Controllers Box Group */}
        <div className="flex items-center border border-solid border-[#DEE2E7] rounded-md bg-white overflow-hidden h-10">
          {/* Back Action arrow */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 h-full flex items-center justify-center bg-white hover:bg-gray-50 text-dark-main disabled:opacity-40 disabled:cursor-not-allowed border-none transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-dark-main" />
          </button>

          {/* Page Iterators */}
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 h-full text-[14px] font-medium transition-colors border-none border-l border-r border-[#DEE2E7] cursor-pointer ${
                currentPage === page
                  ? "bg-[#EFF2F4] text-dark-main font-bold"
                  : "bg-white text-dark-main hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Action arrow */}
          <button
            disabled={currentPage === 3}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 3))}
            className="px-3 h-full flex items-center justify-center bg-white hover:bg-gray-50 text-dark-main disabled:opacity-40 disabled:cursor-not-allowed border-none transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-dark-main" />
          </button>
        </div>
      </div>
    </div>
  );
}

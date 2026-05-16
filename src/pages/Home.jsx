import Navbar from "../components/layouts/Navbar";
// src/pages/HomePage.jsx
export default function HomePage() {
  return (
    <div className="w-full bg-[#F7FAFC] min-h-screen">
        <Navbar />
      <div className="mx-auto px-4 sm:px-6 py-6">
        
        {/* Abhi ke liye temporary placeholder content */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Welcome to eCommerce Storefront!
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            
          </p>
        </div>

      </div>
    </div>
  );
}
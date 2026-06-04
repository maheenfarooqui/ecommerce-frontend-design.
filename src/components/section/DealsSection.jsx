import { useEffect, useState } from "react";
import Container from "../common/Container";
import { dealsData } from "../../utils/data";
import { useCart } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function DealsSection() {
  const { addToCart } = useCart();

  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  });

  // Simple countdown logic running every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Helper function to render time box nicely
  const renderTimeBox = (value, label) => (
    <div className="flex flex-col items-center justify-center bg-[#2B3445] text-white rounded-md w-11.25 h-12.5 shrink-0">
      <span className="text-[16px] font-bold leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] text-gray-400 mt-1">{label}</span>
    </div>
  );

  return (
    <div className="w-full bg-bg-gray pb-5 select-none">
      <Container>
        <div className="w-full bg-white rounded-sm border border-gray-200 flex flex-col lg:flex-row overflow-hidden">
          {/* LEFT SIDE: Heading & Countdown Timer Info */}
          <div className="p-5 flex flex-col lg:border-r border-gray-200 gap-4 w-75 h-64.25 shrink-0">
            <div>
              <h2 className="text-[20px] font-bold text-dark-main m-0 leading-tight">
                Deals and offers
              </h2>
              <p className="text-[14px] text-gray-500 m-0 mt-1">
                Hygiene equipments
              </p>
            </div>

            {/* Timers Row */}
            <div className="flex items-center gap-1.5 mt-4 lg:mt-0">
              {renderTimeBox(timeLeft.days, "Days")}
              {renderTimeBox(timeLeft.hours, "Hour")}
              {renderTimeBox(timeLeft.minutes, "Min")}
              {renderTimeBox(timeLeft.seconds, "Sec")}
            </div>
          </div>

          {/* RIGHT SIDE: Products Horizontal Grid */}
          <div className="flex-1 overflow-x-auto flex divide-x divide-gray-200">
            {dealsData.map((product) => (
              <div
                key={product.id}
                className="p-5 flex flex-col items-center justify-between min-w-42.5 lg:flex-1 relative group hover:bg-slate-50/50 transition-colors duration-200"
              >
                {/* Image Block */}
                <div className="w-35 h-35 flex items-center justify-center mb-3 mix-blend-multiply relative overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* ⚡ 4. HOVER BUTTON OVERLAY MODULE */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          title: product.title,
                          price: product.price || 20,
                          img: product.img,
                          quantity: 1,
                        })
                      }
                      className="bg-[#0D6EFD] hover:bg-blue-700 text-white p-2.5 rounded-md shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer border-none flex items-center justify-center gap-1 text-[13px] font-medium px-4"
                      title="Add to cart"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>

                {/* 🏷️ Title & Discount Badge */}
                <div className="flex flex-col items-center gap-2 text-center w-full">
                  <span className="text-[15px] text-dark-main font-medium truncate w-full px-1">
                    {product.title}
                  </span>
                  <span className="px-2.5 py-1 text-[13px] font-semibold rounded-full bg-[#FFE3E3] text-[#EB001B]">
                    {product.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

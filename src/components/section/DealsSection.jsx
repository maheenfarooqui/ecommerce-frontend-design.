import { useEffect, useState } from 'react';
import Container from '../common/Container';
import { dealsData } from '../../utils/data';

export default function DealsSection() {
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
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  // Helper function to render time box nicely
  const renderTimeBox = (value, label) => (
    <div className="flex flex-col items-center justify-center bg-[#2B3445] text-white rounded-md w-[45px] h-[50px] shrink-0">
      <span className="text-[16px] font-bold leading-none">{String(value).padStart(2, '0')}</span>
      <span className="text-[10px] text-gray-400 mt-1">{label}</span>
    </div>
  );

  return (
    <div className="w-full bg-[#F7FAFC] pb-5">
      <Container>
        <div className="w-full bg-white rounded-xl border border-gray-200 flex flex-col lg:flex-row overflow-hidden">
          
          {/* LEFT SIDE: Heading & Countdown Timer Info */}
          <div className="p-5 flex flex-col lg:border-r border-gray-200 gap-4 lg:max-w-[240px] w-full shrink-0">
            <div>
              <h2 className="text-[20px] font-bold text-dark-main m-0 leading-tight">Deals and offers</h2>
              <p className="text-[14px] text-gray-500 m-0 mt-1">Hygiene equipments</p>
            </div>

            {/* Timers Row */}
            <div className="flex items-center gap-1.5 mt-4 lg:mt-0">
              {renderTimeBox(timeLeft.days, 'Days')}
              {renderTimeBox(timeLeft.hours, 'Hour')}
              {renderTimeBox(timeLeft.minutes, 'Min')}
              {renderTimeBox(timeLeft.seconds, 'Sec')}
            </div>
          </div>

         <div className="flex-1 overflow-x-auto flex divide-x divide-gray-200">
  {dealsData.map((product) => (
    <div key={product.id} className="p-5 flex flex-col items-center justify-between min-w-[150px] lg:flex-1">
      
      {/* 📸 Image Block */}
      <div className="w-[140px] h-[140px] flex items-center justify-center mb-3 mix-blend-multiply">
                  <img 
                    src={product.img} 
                    alt={product.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

      {/* 🏷️ Title & Discount Badge */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-[15px] text-dark-main font-medium">{product.title}</span>
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
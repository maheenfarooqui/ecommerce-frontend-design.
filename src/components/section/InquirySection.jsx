import { useState } from 'react';
import Container from '../common/Container';
import { quantityTypes } from '../../utils/data';
import inquiryBg from '../../assets/bgin.png';

export default function InquirySection() {
  // Form State Management
  const [formData, setFormData] = useState({
    item: '',
    details: '',
    quantity: '',
    unit: 'pcs'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Submitted Data:", formData);
    alert("Inquiry successfully sent to suppliers!");
  };

  return (
    <div className="w-full bg-bg-gray pb-8">
      <Container>
        {/* Main Banner Box with Blue Gradient Overlay */}
        <div 
          className="w-full rounded-sm overflow-hidden bg-cover bg-center relative p-6 sm:p-10 flex flex-col lg:flex-row justify-between items-center gap-8 min-h-105"
          style={{ 
            backgroundImage: `linear-gradient(95deg, rgba(4, 102, 255, 0.9) 0%, rgba(0, 209, 255, 0.4) 100%), url(${inquiryBg})` 
          }}
        >
          
          {/* 📝 LEFT SIDE: Text Headings */}
          <div className="text-white max-w-110 w-full self-start lg:self-center">
            <h2 className="text-[24px] sm:text-[32px] font-bold leading-tight m-0">
              An easy way to send requests to all suppliers
            </h2>
            <p className="text-[15px] text-white/80 font-normal m-0 mt-3 leading-relaxed hidden sm:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* 📄 RIGHT SIDE: White inquiry form card */}
          <div className="bg-white p-5 sm:p-6 rounded-sm shadow-sm w-full max-w-120 shrink-0">
            <h3 className="text-[20px] font-bold text-dark-main m-0 mb-5">
              Send inquiry to suppliers
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Input Item */}
              <input 
                type="text"
                placeholder="What item you need?"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:border-[#0D6EFD] transition-colors"
                value={formData.item}
                onChange={(e) => setFormData({...formData, item: e.target.value})}
                required
              />

              {/* Textarea Details */}
              <textarea 
                placeholder="Type more details"
                rows="3"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:border-[#0D6EFD] transition-colors resize-none"
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                required
              ></textarea>

              {/* Row: Quantity & Dropdown */}
              <div className="flex gap-3 w-full">
                <input 
                  type="number"
                  placeholder="Quantity"
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:border-[#0D6EFD] transition-colors"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  required
                />
                
                <select 
                  className="w-27.5 px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-[15px] focus:outline-none focus:border-[#0D6EFD] cursor-pointer"
                  value={formData.unit}
                  onChange={(e) => setFormData({...formData, unit: e.target.value})}
                >
                  {quantityTypes.map((opt) => (
                    <option key={opt.id} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-fit bg-[#0D6EFD] hover:bg-blue-700 text-white font-medium text-[15px] px-5 py-2.5 rounded-lg border-none cursor-pointer transition-colors mt-2"
              >
                Send inquiry
              </button>

            </form>
          </div>

        </div>
      </Container>
    </div>
  );
}
import { useState } from 'react';
import { Mail } from 'lucide-react';
import Container from '../common/Container';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed Email:', email);
      alert('Subscribed successfully!');
      setEmail('');
    }
  };

  return (
    // 🎨 Main strip background color set to #EFF2F4 as requested
    <div className="w-full bg-[#EFF2F4] py-10 sm:py-12 flex items-center justify-center">
      <Container>
        
        {/* Centralized Text Content */}
        <div className="w-full flex flex-col items-center text-center">
          
          {/* Main Heading */}
          <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1C1C1C] m-0 tracking-tight">
            Subscribe on our newsletter
          </h2>
          
          {/* Subtitle / Helper description */}
          <p className="text-[14px] sm:text-[14px] text-[#606060] font-normal m-0 mt-2 mb-6 max-w-[490px] leading-relaxed">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>

          {/* 📬 Pixel-Perfect Input Form Block */}
          <form 
            onSubmit={handleSubscribe} 
            className="w-full max-w-[400px] sm:max-w-[460px] flex flex-col sm:flex-row gap-2"
          >
            {/* Input Box Wrapper Container */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-[#8B96A5]" />
              </div>
              
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full pl-10 pr-4 h-[40px] text-[16px] text-[#1C1C1C] bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#0D6EFD] transition-colors box-border"
              />
            </div>

            {/* Blue Custom Interaction Action Button */}
            <button
              type="submit"
              className="h-[40px] bg-[#0D6EFD] hover:bg-blue-700 text-white font-medium text-[16px] px-6 rounded-lg border-none cursor-pointer transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Subscribe
            </button>
          </form>

        </div>
        
      </Container>
    </div>
  );
}
import { useCart } from '../context/CartContext';
import Container from '../components/common/Container';
import RelatedProducts from '../components/common/RelatedProducts';
import DiscountBanner from '../components/common/DiscountBanner';
import { ArrowLeft, Shield, MessageSquare, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, subtotal, discount, tax, total } = useCart();

  return (
    <div className="w-full bg-[#F7FAFC] min-h-screen py-6 box-border select-none text-left">
      <Container>
        
        {/* Dynamic Title Headers count row */}
        <h1 className="text-[24px] font-bold text-[#1C1C1C] m-0 mb-6">
          My cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
        </h1>

        {/* Primary 2-Column Desktop Grid structural layout wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* 🔲 COLUMN LEFT: List array table items panels */}
          <div className="lg:col-span-2 flex flex-col gap-0 border border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden">
            {cartItems.length === 0 ? (
              <div className="p-10 text-center text-gray-400 text-[16px]">
                Your shopping bag is completely empty.
              </div>
            ) : (
              <div className="p-5 flex flex-col gap-5">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4 justify-between items-start border-0 border-b border-gray-100 pb-5 last:border-none last:pb-0">
                    
                    {/* Item parameters core row display components */}
                    <div className="flex gap-4 min-w-0">
                      <div className="w-[80px] h-[80px] border border-gray-200 rounded-lg p-1.5 flex items-center justify-center shrink-0 mix-blend-multiply bg-white">
                        <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <h3 className="text-[16px] font-medium text-[#1C1C1C] m-0 leading-snug truncate sm:whitespace-normal sm:line-clamp-2">
                          {item.title}
                        </h3>
                        <span className="text-[14px] text-gray-400 font-normal mt-1">
                          Size: medium, Color: blue, Material: Plastic
                        </span>
                        <span className="text-[14px] text-gray-400 font-normal mt-0.5">
                          Seller: Artel Market
                        </span>
                        
                        {/* Interactive operational row items triggers */}
                        <div className="flex gap-2.5 mt-3">
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="h-7 px-2.5 border border-red-200 text-red-500 rounded-md bg-white font-medium text-[13px] cursor-pointer hover:bg-red-50 transition-colors"
                          >
                            Remove
                          </button>
                          <button className="h-7 px-2.5 border border-gray-300 text-[#0D6EFD] rounded-md bg-white font-medium text-[13px] cursor-pointer hover:bg-gray-50 transition-colors">
                            Save for later
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right side item metrics: Price tag details and dynamic quantity select dropdown controls */}
                    <div className="flex sm:flex-col items-end justify-between sm:justify-start w-full sm:w-auto shrink-0 gap-3">
                      <span className="text-[16px] font-semibold text-[#1C1C1C]">${(item.price * item.quantity).toFixed(2)}</span>
                      <select 
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                        className="w-[100px] h-9 border border-gray-300 rounded-lg bg-white outline-none px-2 font-normal text-[15px] cursor-pointer text-[#1C1C1C]"
                      >
                        {[...Array(10)].map((_, idx) => (
                          <option key={idx + 1} value={idx + 1}>Qty: {idx + 1}</option>
                        ))}
                      </select>
                    </div>

                  </div>
                ))}

                {/* Footer controller bar of left item grid */}
                <div className="flex items-center justify-between border-0 border-t border-gray-100 pt-4 mt-2">
                  <Link to="/products" className="h-10 px-4 bg-[#0D6EFD] hover:bg-blue-700 text-white font-medium text-[15px] rounded-lg shadow-sm flex items-center gap-2 no-underline cursor-pointer transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to shop
                  </Link>
                  {cartItems.length > 0 && (
                    <button 
                      onClick={clearCart}
                      className="h-10 px-4 border border-gray-300 bg-white hover:bg-gray-50 text-[#0D6EFD] font-medium text-[15px] rounded-lg cursor-pointer transition-colors"
                    >
                      Remove all
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 🔳 COLUMN RIGHT: Math matrices coupon checks blocks */}
          <div className="flex flex-col gap-4">
            
            {/* 🏷️ Coupon Input Block Card Layout */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 box-border shadow-sm flex flex-col gap-2">
              <span className="text-[14px] text-gray-500 font-normal">Have a coupon?</span>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden h-10">
                <input type="text" placeholder="Add coupon" className="flex-1 px-3 border-none outline-none text-[15px] bg-white text-[#1C1C1C]" />
                <button className="px-4 border-0 border-l border-gray-200 bg-white hover:bg-gray-50 text-[#0D6EFD] font-medium text-[14px] cursor-pointer transition-colors">
                  Apply
                </button>
              </div>
            </div>

            {/* 💰 Subtotal Pricing Summary Specs Block Card Layout */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 box-border shadow-sm flex flex-col gap-3">
              <div className="flex justify-between text-[16px]">
                <span className="text-[#505050]">Subtotal:</span>
                <span className="text-[#1C1C1C]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[16px]">
                <span className="text-[#505050]">Discount:</span>
                <span className="text-red-500">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[16px]">
                <span className="text-[#505050]">Tax:</span>
                <span className="text-[#00B517]">+{tax.toFixed(2)}</span>
              </div>
              
              <hr className="border-0 border-b border-gray-200 my-1" />

              <div className="flex justify-between text-[18px] font-semibold text-[#1C1C1C]">
                <span>Total:</span>
                <span>${cartItems.length > 0 ? total.toFixed(2) : '0.00'}</span>
              </div>

              {/* Checkout CTA Trigger primary button */}
              <button className="w-full h-11 bg-[#00B517] hover:bg-[#009c13] text-white font-medium text-[16px] rounded-lg border-none shadow-sm cursor-pointer transition-colors mt-3">
                Checkout
              </button>

              {/* Supported payment icons row element strips */}
              <div className="flex items-center justify-center gap-2 mt-2 opacity-70">
                <span className="border border-gray-200 px-2 py-0.5 rounded text-[11px] font-bold text-blue-900 bg-gray-50">AMEX</span>
                <span className="border border-gray-200 px-2 py-0.5 rounded text-[11px] font-bold text-orange-600 bg-gray-50">MC</span>
                <span className="border border-gray-200 px-2 py-0.5 rounded text-[11px] font-bold text-blue-600 bg-gray-50">PAYPAL</span>
                <span className="border border-gray-200 px-2 py-0.5 rounded text-[11px] font-bold text-blue-800 bg-gray-50">VISA</span>
                <span className="border border-gray-200 px-2 py-0.5 rounded text-[11px] font-bold text-black bg-gray-50">APPLE PAY</span>
              </div>
            </div>

          </div>
        </div>

        {/* 🛡️ BOTTOM STRIP: Trust badges horizontal layout strip indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 mb-10 border-0 border-t border-gray-200 pt-8 box-border">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shrink-0"><Shield className="w-5 h-5 text-gray-500" /></div>
            <div className="flex flex-col"><span className="text-[16px] font-medium text-[#1C1C1C]">Secure payment</span><span className="text-[14px] text-gray-400 font-normal">Have you ever finally just</span></div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shrink-0"><MessageSquare className="w-5 h-5 text-gray-500" /></div>
            <div className="flex flex-col"><span className="text-[16px] font-medium text-[#1C1C1C]">Customer support</span><span className="text-[14px] text-gray-400 font-normal">Have you ever finally just</span></div>
          </div>
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shrink-0"><Truck className="w-5 h-5 text-gray-500" /></div>
            <div className="flex flex-col"><span className="text-[16px] font-medium text-[#1C1C1C]">Free delivery</span><span className="text-[14px] text-gray-400 font-normal">Have you ever finally just</span></div>
          </div>
        </div>
        <RelatedProducts />
        <DiscountBanner />

      </Container>
    </div>
  );
}
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // ⚡ Add to Cart handler engine
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 🔄 Update Item Quantity Directly from Select Dropdown
  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Number(qty) } : item))
    );
  };

  // ❌ Remove Single Product
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 🗑️ Clear Entire Bag Cart
  const clearCart = () => setCartItems([]);

  // 💰 Live Price Calculations Engine Matrix formulas
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal > 0 ? 60.00 : 0; // Static conditional benchmark discount rules matching figma layout
  const tax = subtotal > 0 ? 14.00 : 0;      // Static tax rules matrix value
  const total = subtotal - discount + tax;

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, updateQuantity, removeFromCart, clearCart, subtotal, discount, tax, total
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
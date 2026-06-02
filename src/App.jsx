import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import HomePage from './pages/Home'
import ListingPage from './pages/ListingPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'

function App() {


  return (

    <>
    <CartProvider>
    <Router>
<Navbar />
<Routes>
      <Route path="/" element={<HomePage />} />
     <Route path="/products" element={<ListingPage />} />
     <Route path="/products/:id" element={<ProductDetailsPage />} />
     <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
</Router>
</CartProvider>
    </>
  )
}

export default App

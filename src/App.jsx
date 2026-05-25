import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import HomePage from './pages/Home'
import ListingPage from './pages/ListingPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
function App() {


  return (
    <>
    <Router>
<Navbar />
<Routes>
      <Route path="/" element={<HomePage />} />
     <Route path="/products" element={<ListingPage />} />
     <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
</Router>
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import HomePage from './pages/Home'
import ListingPage from './pages/ListingPage'
function App() {


  return (
    <>
    <Router>
<Navbar />
<Routes>
      <Route path="/" element={<HomePage />} />
     <Route path="/products" element={<ListingPage />} />
      </Routes>
      <Footer />
</Router>
    </>
  )
}

export default App

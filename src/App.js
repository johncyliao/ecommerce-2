import React from 'react';
import './styles/custom-style.css';
// import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productName" element={<ProductDetail />} />
      </Routes>
      
      <Footer />
      
    </div>
  );
}

export default App;

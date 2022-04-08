import React from 'react';
import './custom-style.css';
// import './style.css';
import Header from './components/Header';
import Photos from './pages/Photos';
import Cart from './pages/Cart';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Photos />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

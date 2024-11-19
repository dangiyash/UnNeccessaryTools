import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import '../pages/home.css'
function Main() {
  return (
    <div className="body" style={{ 'backgroundColor': '#f1e4e4', 'padding': '2px', 'height': '630px', 'width': '1200px', 'borderRadius': '12px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default Main;

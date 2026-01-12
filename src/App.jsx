import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => (
  <Router>
    <div className="min-h-screen text-graylight font-inter relative overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  </Router>
);

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SoftwareDev from './pages/SoftwareDev';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App relative min-h-screen">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/portfolio/software" element={<SoftwareDev />} />
          </Routes>
        </div>    
         <Footer />        
      </div>
    </Router>
  );
}

export default App;

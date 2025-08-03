import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SoftwareDev from './pages/SoftwareDev';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VisualDev from './pages/VisualDev';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App relative min-h-screen">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/portfolio/software" element={<SoftwareDev />} />
            <Route path="/portfolio/visual" element={< VisualDev />} />
          </Routes>
        </div>    
         <Footer />        
      </div>
    </Router>
  );
}

export default App;

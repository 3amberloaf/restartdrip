import React, { useEffect } from 'react';
import './App.css'; // Import your CSS file for styling
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import AllServices from './pages/AllServices';
import HomePage from './pages/HomePage'; // Ensure you have this component
import About from './pages/About';
import Dehydration from './pages/treatments/dehydration';
import Energy from './pages/treatments/energy';
import Athlete from './pages/treatments/athlete';
import Beauty from './pages/treatments/beauty';
import Migraine from './pages/treatments/migraine';
import Fat from './pages/treatments/fat';
import Myers from './pages/treatments/myers';
import Immune from './pages/treatments/immune';
import Hangover from './pages/treatments/hangover';


const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
      <div className="App">
        <header className="header">
          <div className="nav-bar">
            <div className="logo">
              <img src="../images/logo.png" alt="Company Logo" />
            </div>
            <nav>
              <ul className="nav-links">
                <li>
                  <Link to="/">Book Now</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                  <ul className="dropdown">
                    <li><Link to="/services/vitamin">Vitamin IV Therapy</Link></li>
                    <li><Link to="/services/vitamin">Injections</Link></li>
                    <li><Link to="/services/specialty">Specialty IV Treatment</Link></li>
                  </ul>
                </li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                  <li><Link to="/contact">Contact</Link></li>
                  
              </ul>
            </nav>
            <div className="nav-actions">
          
  
          </div>
        </div>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<AllServices />} />
            <Route path = "/about-us" element = {<About />} />
            <Route path="/services/dehydration" element={<Dehydration />} />
            <Route path="/services/energy-boost" element={<Energy />} />
            <Route path="/services/athlete" element={<Athlete />} />
            <Route path="/services/beauty" element={<Beauty />} />
            <Route path="/services/migraine" element={<Migraine />} />
            <Route path="/services/immune-boost" element={<Immune />} />
            <Route path="/services/myers-cocktail" element={<Myers />} />
            <Route path="/services/fatburner" element={<Fat />} />
            <Route path="/services/hangover" element={<Hangover />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="logo">
              <img src="../images/logo.png" alt="Company Logo" />
            </div>
            <nav>
              <ul className="footer-links">
                <li><Link to="/">Book Now</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className="footer-social">
              <a href="#facebook" className="social-icon">FB</a>
              <a href="https://www.instagram.com/restartdrip/" className="social-icon">IN</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Restart Drip. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
};

export default App;

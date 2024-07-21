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
      <Menu />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/about-us" element={<About />} />
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
      <Menu />
      <div className="footer-bottom">
        <p>&copy; 2024 Restart Drip. All rights reserved.</p>
      </div>
    </div>
  );
};

const Menu = () => (
  <header className="header">
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img src="../images/logo.png" alt="Company Logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Book Now</Link>
          </li>
          <li className="dropdown">
            <Link to="/services" className="dropdown-toggle">Services <span className="caret">&#9662;</span></Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/vitamin" className="dropdown-toggle">Vitamin IV Therapy <span className="caret">&#9656;</span></Link>
                <ul className="dropdown-submenu">
                  <li><Link to="/services/vitamin/a">Vitamin A</Link></li>
                  <li><Link to="/services/vitamin/b">Vitamin B</Link></li>
                  <li><Link to="/services/vitamin/c">Vitamin C</Link></li>
                </ul>
              </li>
              <li><Link to="/services/injections">Injections</Link></li>
              <li><Link to="/services/specialty">Specialty IV Treatment</Link></li>
            </ul>
          </li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="social">
        <a href="#facebook" className="social-icon">FB</a>
        <a href="https://www.instagram.com/restartdrip/" className="social-icon">IN</a>
      </div>
    </div>
  </header>
);

export default App;

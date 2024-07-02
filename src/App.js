import React from 'react';
import './App.css'; // Import your CSS file for styling
import { Link, Routes, Route } from 'react-router-dom';
import AllServices from './pages/AllServices';
import HomePage from './pages/HomePage'; // Ensure you have this component
import About from './pages/About';
import Dehydration from './pages/treatments/dehydration';
import Energy from './pages/treatments/energy';

const App = () => {
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                  <ul className="dropdown">
                    <li><Link to="/services/vitamin">Vitamin IV Therapy</Link></li>
                    <li><Link to="/services/specialty">Specialty IV Treatment</Link></li>
                    <li><Link to="/services/medical">Medical Care</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/delivery">Delivery</Link>
                    <ul className="dropdown">
                      <li><Link to="/delivery/weight-loss">Medical Weight Loss</Link></li>
                      <li><Link to="/delivery/nad+">NAD+ Therapy</Link></li>
                      <li><Link to="/delivery/peptide">Peptide Therapy</Link></li>
                      <li><Link to="/delivery/testosterone">Testosterone Therapy</Link></li>
                      <li><Link to="/delivery/vitamin">Vitamin Injections</Link></li>
                      <li><Link to="/delivery/ketamine">Ketamine Therapy</Link></li>
                      <li><Link to="/delivery/vitamin">Vitamin Injections</Link></li>
                      <li><Link to="/delivery/hair">Hair Loss Treatments</Link></li>
                      <li><Link to="/delivery/rapamycin">Rapamycin</Link></li>
                    </ul>
                </li>
                <li>
                  <Link to="/memberships">Memberships</Link>
                    <ul className="dropdown">
                      <li><Link to="/memberships/vitamin-drip">Vitamin Drip Memberships</Link></li>
                      <li><Link to="/memberships/nad-drip">Nad Drip Memberships</Link></li>
                      <li><Link to="/memberships/longevity">Longevity Memberships</Link></li>
                    </ul>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
          
                </li>
              </ul>
            </nav>
            <div className="nav-actions">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button type="button">
                <i className="fas fa-search"></i> {/* FontAwesome search icon */}
              </button>
            </div>
            <div className = "log-in" >
              <img src="../images/homepage/log_in.png" alt="Log-In" />
              <button className="log-in-button">Log In</button>
            </div>
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
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="logo">
              <img src="../images/logo.png" alt="Company Logo" />
            </div>
            <nav>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/shipped-to-you">Delivery</Link></li>
                <li><Link to="/memberships">Memberships</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
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

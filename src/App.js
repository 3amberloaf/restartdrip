// src/App.js
import React from 'react';
import './App.css'; // Import your CSS file for styling
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AllServices from './pages/AllServices';
import HomePage from './pages/HomePage'; // Ensure you have this component

const HomePageButtons = () => {
  return (
    <div className="homepage-buttons">
      <button className="book-iv-therapy">Book IV Therapy</button>
      <Link to="/all-services">
        <button className="view-all-services">View all Services</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="nav-bar">
            <div className="logo">
              <img src="images/logo.png" alt="Company Logo" />
            </div>
            <nav>
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/all-services">Services</Link></li>
                <li><Link to="/delivery">Delivery</Link></li>
                <li><Link to="/memberships">Memberships</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
              </ul>
            </nav>
            <div className="nav-actions">
              <button className="log-in">Log In</button>
            </div>
          </div>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-services" element={<AllServices />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="images/logo.png" alt="Company Logo" />
            </div>
            <nav>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/all-services">Services</Link></li>
                <li><Link to="/shipped-to-you">Delivery</Link></li>
                <li><Link to="/memberships">Memberships</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
              </ul>
            </nav>
            <div className="footer-social">
              <a href="#facebook" className="social-icon">FB</a>
              <a href="#twitter" className="social-icon">EM</a>
              <a href="https://www.instagram.com/restartdrip/" className="social-icon">IN</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Restart Drip. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;

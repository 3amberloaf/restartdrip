import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => (
    <footer className="footer">
      <div className="nav-bar">
        <div className="logo">
          <Link to="/">
            <img src="../images/logo.png" alt="Company Logo" />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
          <li>
            <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="https://booking.hydreight.com/widget">BOOK NOW</Link>
            </li>
            <li className="dropdown-container">
              <Link to="/services">Services <i className="fas fa-chevron-down"></i></Link>
              <ul className="dropdown">
                <li>
                  <Link to="/vitaminivtherapy">Vitamin IV Therapy</Link>
                </li>
                <li><Link to="/injections">Injections</Link></li>
                <li><Link to="/specialty">Specialty Treatment</Link></li>
              </ul>
            </li>
            <li className="dropdown-container">
            <li><Link to="/pricing">Pricing <i className="fas fa-chevron-down"></i> </Link></li>
            <ul className="dropdown">
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li><Link to="/intro-offers">Intro Offers</Link></li>
              </ul>
            
  
            </li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="social">
          <a href="#facebook" className="social-icon">FB</a>
          <a href="https://www.instagram.com/restartdrip/" className="social-icon">IN</a>
        </div>
      </div>
    </footer>
  );

  export default Header
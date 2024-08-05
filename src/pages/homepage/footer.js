import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => (
    <footer className="bottom">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>SERVICES</h3>
          <ul>
           
            <li><Link to="/vitaminivtherapy">Vitamin IV Therapy</Link></li>
  
            <li><Link to="/injections">Injections</Link></li>
            <li><Link to="/specialty">Specialty Treatment</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>RESOURCES</h3>
          <ul>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/intro-offers">Intro Offers</Link></li>
            
  
          </ul>
        </div>
        <div className="footer-column">
          <h3>ABOUT US</h3>
          <ul>
            <li><Link to="/about-us">Mission</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-buttons">
              <Link to="https://booking.hydreight.com/widget">
                <button className="footer-button">BOOK NOW</button>
              </Link>
          <button className="footer-button">DOWNLOAD APP</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Restart Drip. All rights reserved.</p>
      </div>
    </footer>
  );

  export default Footer
import React from 'react';
import './App.css'; // Import your CSS file for styling
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="top-bar">
            <div className="moving-text-container">
              <span className="moving-text">Up to 40% off savings with IV Memberships!</span>
            </div>
            <button className="join-now">JOIN NOW</button>
          </div>
          <div className="nav-bar">
            <div className="logo">
              <img src="images/logo.png" alt="Company Logo" />
            </div>
            <nav>
              <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/in-home-services">Services</Link></li>
                <li><Link to="/shipped-to-you">Delivery</Link></li>
                <li><Link to="/memberships">Memberships</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
              </ul>
            </nav>
            <div className="nav-actions">
              <button className="book-service">Book Service</button>
              <button className="log-in">Log In</button>
              <button className="search">🔍</button>
            </div>
          </div>
        </header>
        <main className="main-content">
          <Routes>
          
            <Route path="/about" element={<About />} />

          </Routes>
          <div className="homepage-section">
            <div className="homepage-text">
              <h1>Mobile IV Therapy</h1>
              <h2>& Medical Services Delivered To You!</h2>
              <div className="homepage-buttons">
                <button className="book-iv-therapy">Book IV Therapy</button>
                <button className="view-all-services">View all Services</button>
              </div>
            </div>
            <div className="homepage-image">
              <img src="images/homepage_background.png" alt="Homepage" />
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="images/logo.png" alt="Company Logo" />
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#delivery">Delivery</a>
              <a href="#contact">Contact</a>
            </div>
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

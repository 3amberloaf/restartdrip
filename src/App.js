import React from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="top-bar">
          <span>Up to 40% off savings with IV Memberships!</span>
          <button className="join-now">JOIN NOW</button>
        </div>
        <div className="nav-bar">
          <div className="logo">
            <img src="images/logo.png" alt="Company Logo" />
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#in-home-services">In-Home Services</a></li>
              <li><a href="#shipped-to-you">Delivery</a></li>
              <li><a href="#memberships">Memberships</a></li>
              <li><a href="#locations">Locations</a></li>
              <li><a href="#about-us">About Us</a></li>
            </ul>
          </nav>
          <div className="nav-actions">
            <button className="book-service">Book Service</button>
            <button className="log-in">Log in</button>
            <button className="search">🔍</button>
          </div>
        </div>
      </header>
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-text">
            <h1>Mobile IV Therapy</h1>
            <h2>& Medical Services Delivered To You</h2>
            <div className="hero-buttons">
              <button className="book-iv-therapy">Book IV Therapy</button>
              <button className="view-all-services">View all Services</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="images/homepage_background.png" alt="Homepage"/ >
            
          </div>
        </div>
      </main>
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default App;

// src/HomePage.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IVTherapy from './components/Infographics';
import './homepage.css';
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

const HomePage = () => {
  return (
    <main className="main-content">
  
      <div className="homepage-section">
        <div className="homepage-text">
          <h1>Mobile IV Therapy</h1>
          <h2>& Medical Services Delivered To You!</h2>
          <div className="homepage-buttons">
            <button className="book-iv-therapy">Book IV Therapy</button>
            <Link to="/all-services">
              <button className="view-all-services">View all Services</button>
            </Link>
          </div>
        </div>
        <div className="homepage-image">
          <img src="images/homepage/homepage_background.png" alt="Homepage" />
        </div>
        < IVTherapy />
        
  
</div>
    </main>
  );
};

export default HomePage;

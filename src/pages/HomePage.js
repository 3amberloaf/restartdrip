// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import IVTherapy from '../components/Infographics';
import '../css/homepage.css';
import Reviews from '../components/reviews';
import TreatmentsCarousel from '../components/carousel';

const HomePage = () => {
  return (
    <main className="main-content">
      <div className="homepage-section">
        <div className="homepage-text">
          <h1>Mobile IV Therapy</h1>
          <h2>& Medical Services Delivered To You!</h2>
          <div className="homepage-buttons">
            <button className="book-iv-therapy">Book IV Therapy</button>
            <Link to="/services">
              <button className="view-services">View All Services</button>
            </Link>
          </div>
        </div>
        <div className="homepage-image">
          <img src="/images/homepage/homepage_background.png" alt="Homepage" /> {/* Corrected image path */}
        </div>
        <IVTherapy />
        <TreatmentsCarousel />
        <Reviews /> {}
      </div>
    </main>
  );
};

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';
import Steps from '../components/steps';
import '../css/homepage.css';
import Reviews from '../components/reviews';
import TreatmentsCarousel from '../components/carousel';

const HomePage = () => {
  return (
    <main className="main-content">
      <div className="homepage-section">
        <div className="homepage-text">
          <h1>Restart Drip</h1>
          <h2>IV therapy + vitamin injections + NAD+wellness • illness • recovery • beauty</h2>
          <div className="homepage-buttons">
            <Link to="/services">
              <button className="view-services">View All Services</button>
            </Link>
          </div>
        </div>
        <div className="homepage-image-container">
          <div className="homepage-image">
            <img src="/images/homepage/homepage_background.png" alt="Homepage" />
          </div>
        </div>
      </div>
      <Steps />
      <TreatmentsCarousel />
      <Reviews />
    </main>
  );
};

export default HomePage;

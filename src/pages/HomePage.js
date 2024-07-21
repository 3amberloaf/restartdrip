import React from 'react';
import { Link } from 'react-router-dom';
import Steps from '../components/steps';
import Reviews from '../components/reviews';
import TreatmentsCarousel from '../components/carousel';
import '../css/homepage.css';

const HomePage = () => {
  return (
    <main className="main-content">
      <div
        className="homepage-section"
        style={{
          backgroundImage: 'url(/images/homepage/homepage_background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top', // Adjust background position
          height: '100vh', // Full viewport height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div className="homepage-logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="homepage-text" style={{ position: 'relative', top: '-50px' }}>
          <h3>IV therapy + vitamin injections + NAD+</h3>
          <h3>wellness • illness • recovery • beauty</h3>
          <div className="homepage-buttons">
            <Link to="/services">
              <button className="view-services">BOOK NOW</button>
            </Link>
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

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PopUpDiscount from '../components/popUpDiscount';

import TreatmentsCarousel from '../components/carousel';
import IVTherapy from '../components/IVTherapy';
import '../css/homepage.css';




const HomePage = () => {
  const [showPopUpDiscount, setShowPopUpDiscount] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Show the pop-up discount when the component mounts
    setShowPopUpDiscount(true);
  }, [location]);

  const handleClose = () => {
    setShowPopUpDiscount(false);
  };


  return (
    <main className="main-content">
       <PopUpDiscount show={showPopUpDiscount} handleClose={handleClose} />
      <div
        className="homepage-section"
        style={{
          backgroundImage: 'url(/images/homepage/homepage_background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
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
          <h4>wellness • illness • recovery • beauty</h4>
          <div className="homepage-buttons">
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">BOOK NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="additional-text">
        <h1>EXPERIENCE IV THERAPY AT RESTART DRIP</h1>
        <p>Restart Drip is a collection of IV therapy spas promoting wellness from within by delivering high-quality products and services administered by experienced and trustworthy medical and wellness professionals in a relaxing, spa-like atmosphere.</p>

        <h1>STEP OUT OF THE HUSTLE AND INTO Restart Drip</h1>
        <p>Clients come to us for our vitamin injections, signature IV therapy cocktails, NAD+ injections, and vitamin infusions, but they stay for the atmosphere. With comfortable chairs, soothing music, and a team of unbeatable staff, Restart Drip spas are a place for everyone to relax, recharge and refresh their routine.</p>

        <p>At any of our IV therapy spas, you can rest easy knowing you’re in good hands. At Restart Drip, our spas are overseen by a medical team consisting of award-winning doctors, nurse practitioners, and medical professionals, and all of our services are administered by some of the best registered nurses in the industry. Additionally, we pride ourselves on sourcing only high-quality, pharmaceutical-grade vitamins from trusted and reputable pharmacies.</p>

        <h1>ABOUT OUR IV THERAPY OFFERINGS</h1>
        <p>We offer monthly memberships for clients who want to maintain a healthy lifestyle, Shot Passes for clients looking for a quick pick-me-up, and a build-your-own IV (BYOIV) option for clients looking to meet specific needs. Appointments are highly encouraged, but walk-in IV and injection appointments are always welcome for those who need to feel better fast.</p>

        <p>There are Restart Drip locations throughout several states, making it easy to get luxurious and revitalizing IV therapy wherever you are.</p>

        <p>We invite you to step out of the hustle and into Restart Drip.</p>
        
      </div>
        <div className="droplet">
        <img src="/images/homepage/droplet.png" alt="droplet" />
      </div>
      
      <IVTherapy />
      
      <TreatmentsCarousel />

      <div className="homepage">
      <div className="waves">
        <h1>Thirsty?</h1>
        <div className="waves-buttons">
        <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">BOOK NOW</button>
            </Link>
        </div>
        <img src="/images/homepage/waves.png" alt="waves" />
      </div>
    </div>
    </main>
    
  );
};

export default HomePage;

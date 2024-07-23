import React from 'react';
import { Link } from 'react-router-dom';


import TreatmentsCarousel from '../components/carousel';
import IVTherapy from '../components/IVTherapy';
import '../css/homepage.css';

const HomePage = () => {
  return (
    <main className="main-content">
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
            <Link to="/services">
              <button className="view-services">BOOK NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="additional-text">
        <h1>EXPERIENCE IV THERAPY AT RESTART DRIP</h1>
        <p>Hydrate IV Bar is a collection of IV therapy spas promoting wellness from within by delivering high-quality products and services administered by experienced and trustworthy medical and wellness professionals in a relaxing, spa-like atmosphere.</p>

        <h1>STEP OUT OF THE HUSTLE AND INTO HYDRATE IV BAR</h1>
        <p>Clients come to us for our vitamin injections, signature IV therapy cocktails, NAD+ injections, and vitamin infusions, but they stay for the atmosphere. With comfortable chairs, soothing music, and a team of unbeatable staff, Hydrate IV Bar spas are a place for everyone to relax, recharge and refresh their routine.</p>

        <p>At any of our IV therapy spas, you can rest easy knowing you’re in good hands. At Hydrate IV Bar, our spas are overseen by a medical team consisting of award-winning doctors, nurse practitioners, and medical professionals, and all of our services are administered by some of the best registered nurses in the industry. Additionally, we pride ourselves on sourcing only high-quality, pharmaceutical-grade vitamins from trusted and reputable pharmacies.</p>

        <h1>ABOUT OUR IV THERAPY OFFERINGS</h1>
        <p>We offer monthly memberships for clients who want to maintain a healthy lifestyle, Shot Passes for clients looking for a quick pick-me-up, and a build-your-own IV (BYOIV) option for clients looking to meet specific needs. Appointments are highly encouraged, but walk-in IV and injection appointments are always welcome for those who need to feel better fast.</p>

        <p>There are Hydrate IV Bar locations throughout several states, making it easy to get luxurious and revitalizing IV therapy wherever you are.</p>

        <p>We invite you to step out of the hustle and into Hydrate IV Bar.</p>
        
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
          <Link to="/services">
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

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PopUpDiscount from '../components/popUpDiscount';
// eslint-disable-next-line no-unused-vars
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

  useEffect(() => {
    const elements = document.querySelectorAll(".additional-text p, .additional-text h1");

    const elementInView = (element, offset = 0) => {
      const elementTop = element.getBoundingClientRect().top;
      return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('visible-text');
    };

    const hideScrollElement = (element) => {
      element.classList.remove('visible-text');
    };

    const handleScrollAnimation = () => {
      elements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    // Initial check
    handleScrollAnimation();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

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
          height: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div className="homepage-logo" style={{ position: 'relative', top: '-80px' }}>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="homepage-text" style={{ position: 'relative', top: '-110px' }}>
          <h3>IV therapy + vitamin injections + NAD+</h3>
          <h4>wellness - illness - recovery - beauty</h4>
          <div className="homepage-buttons">
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">BOOK NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="additional-text">
        <h1 className="hidden-text">EXPERIENCE IV THERAPY AT RESTART DRIP</h1>
        <p className="hidden-text">Restart Drip is an at-home IV therapy service dedicated to promoting wellness from within. We deliver high-quality products and services, administered by experienced and trustworthy medical and wellness professionals, all in the comfort of your home. Experience a relaxing, spa-like atmosphere with every visit.</p>

        <h1 className="hidden-text">STEP OUT OF THE HUSTLE AND INTO RESTART DRIP</h1>
        <p className="hidden-text">Clients choose us for our revitalizing vitamin injections, signature IV therapy cocktails, NAD+ injections, and vitamin infusions, but they stay for the atmosphere. Without stepping outside, Restart Drip transforms your home into a space where you can relax, recharge, and refresh your routine.</p>

        <p className="hidden-text">At Restart Drip, you can rest easy knowing you’re in good hands. Our services are overseen by a medical team consisting of well-trained professionals who can help you find the best treatment based off your needs. Additionally, we pride ourselves on sourcing only high-quality, pharmaceutical-grade vitamins from trusted and reputable pharmacies. We bring the spa experience to your home, ensuring you receive top-notch care in a comfortable and familiar environment.</p>

        <p className="hidden-text">We invite you to step out of the hustle and try    
        <span style={{ color: '#6aade5', fontWeight: 'bold', fontStyle: 'italic', fontSize: '35px' }}>   RESTART DRIP!</span>
        </p>
      </div>
      <div className="droplet">
        <img src="/images/homepage/droplet.png" alt="droplet" />
      </div>
      <IVTherapy />
     

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

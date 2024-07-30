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
          height: '80vh',
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
          <h4>wellness • illness • recovery • beauty</h4>
          <div className="homepage-buttons">
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">BOOK NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="additional-text">
        <h1 className="hidden-text">EXPERIENCE IV THERAPY AT RESTART DRIP</h1>
        <p className="hidden-text">Restart Drip is a collection of IV therapy spas promoting wellness from within by delivering high-quality products and services administered by experienced and trustworthy medical and wellness professionals in a relaxing, spa-like atmosphere.</p>

        <h1 className="hidden-text">STEP OUT OF THE HUSTLE AND INTO RESTART DRIP</h1>
        <p className="hidden-text">Clients come to us for our vitamin injections, signature IV therapy cocktails, NAD+ injections, and vitamin infusions, but they stay for the atmosphere. With comfortable chairs, soothing music, and a team of unbeatable staff, Restart Drip spas are a place for everyone to relax, recharge and refresh their routine.</p>

        <p className="hidden-text">At any of our IV therapy spas, you can rest easy knowing you’re in good hands. At Restart Drip, our spas are overseen by a medical team consisting of award-winning doctors, nurse practitioners, and medical professionals, and all of our services are administered by some of the best registered nurses in the industry. Additionally, we pride ourselves on sourcing only high-quality, pharmaceutical-grade vitamins from trusted and reputable pharmacies.</p>

        <h1 className="hidden-text">ABOUT OUR IV THERAPY OFFERINGS</h1>
        <p className="hidden-text">We offer monthly memberships for clients who want to maintain a healthy lifestyle, Shot Passes for clients looking for a quick pick-me-up, and a build-your-own IV (BYOIV) option for clients looking to meet specific needs. Appointments are highly encouraged, but walk-in IV and injection appointments are always welcome for those who need to feel better fast.</p>

        <p className="hidden-text">There are Restart Drip locations throughout several states, making it easy to get luxurious and revitalizing IV therapy wherever you are.</p>

        <p className="hidden-text">We invite you to step out of the hustle and into Restart Drip.</p>
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

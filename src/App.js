import React, { useEffect } from 'react';
import './App.css'; // Import your CSS file for styling
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import VitaminTherapy from './pages/vitaminivtherapy';
import HomePage from './pages/HomePage'; // Ensure you have this component
import About from './pages/About';
import Dehydration from './pages/treatments/dehydration';
import Energy from './pages/treatments/energy';
import Athlete from './pages/treatments/athlete';
import Beauty from './pages/treatments/beauty';
import Migraine from './pages/treatments/migraine';
import Fat from './pages/treatments/fat';
import Myers from './pages/treatments/myers';
import Immune from './pages/treatments/immune';
import Hangover from './pages/treatments/hangover';
import IVTherapy from './components/IVTherapy';
import Injections from './pages/injections';
import Specialty from './pages/specialty';


const App = () => {
 
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Show the pop-up discount when the component mounts
   
  }, [location]);

 


  return (
    <div className="App">
     
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<IVTherapy />} />
          <Route path="/vitaminivtherapy" element={<VitaminTherapy />} />
          <Route path="/injections" element={<Injections />} />
          <Route path="/specialty" element={<Specialty />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services/dehydration" element={<Dehydration />} />
          <Route path="/services/energy-boost" element={<Energy />} />
          <Route path="/services/athlete" element={<Athlete />} />
          <Route path="/services/beauty" element={<Beauty />} />
          <Route path="/services/migraine" element={<Migraine />} />
          <Route path="/services/immune-boost" element={<Immune />} />
          <Route path="/services/myers-cocktail" element={<Myers />} />
          <Route path="/services/fatburner" element={<Fat />} />
          <Route path="/services/hangover" element={<Hangover />} />
        </Routes>
      </main>
      <Footer />
      
    </div>
  );
};

const Header = () => (
  <footer className="footer">
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
          <img src="../images/logo.png" alt="Company Logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">BOOK NOW</Link>
          </li>
          <li className="dropdown-container">
            <Link to="/services">Services <i className="fas fa-chevron-down"></i></Link>
            <ul className="dropdown">
              <li>
                <Link to="/vitaminivtherapy">Vitamin IV Therapy</Link>
              </li>
              <li><Link to="/injections">Injections</Link></li>
              <li><Link to="/specialty">Specialty IV Treatment</Link></li>
            </ul>
          </li>
          <li><Link to="/pricing">Pricing <i className="fas fa-chevron-down"></i> </Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="social">
        <a href="#facebook" className="social-icon">FB</a>
        <a href="https://www.instagram.com/restartdrip/" className="social-icon">IN</a>
      </div>
    </div>
  </footer>
);


const Footer = () => (
  <footer className="bottom">
    <div className="footer-sections">
      <div className="footer-column">
        <h3>ABOUT</h3>
        <ul>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/iv-therapy">IV Therapy</Link></li>
          <li><Link to="/nad-therapy">NAD+ Therapy</Link></li>
          <li><Link to="/injections">Injections</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>RESOURCES</h3>
        <ul>
          <li><Link to="/membership">Membership</Link></li>
          <li><Link to="/shot-pass">Shot Pass</Link></li>
          <li><Link to="/medical-clearance-form">Medical Clearance Form</Link></li>
          <li><Link to="/intro-offers">Intro Offers</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/careers">Careers</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>FRANCHISE</h3>
        <ul>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </div>
      <div className="footer-buttons">
        <button className="footer-button">BOOK NOW</button>
        <button className="footer-button">DOWNLOAD APP</button>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Restart Drip. All rights reserved.</p>
    </div>
  </footer>
);

export default App;

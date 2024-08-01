import React, { useEffect } from 'react';
import './App.css'; 
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import VitaminTherapy from './pages/vitaminivtherapy';
import HomePage from './pages/HomePage'; 
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
import ContactForm from './pages/contact';
import Pricing from './pages/pricing';
import IntroOffer from './pages/introOffer';

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
          <Route path="/contact" element= {<ContactForm />} /> 
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
          <Route path= "/intro-offers" element={<IntroOffer />} />
          <Route path= "/pricing" element={<Pricing />} />
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
          <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="https://booking.hydreight.com/widget">BOOK NOW</Link>
          </li>
          <li className="dropdown-container">
            <Link to="/services">Services <i className="fas fa-chevron-down"></i></Link>
            <ul className="dropdown">
              <li>
                <Link to="/vitaminivtherapy">Vitamin IV Therapy</Link>
              </li>
              <li><Link to="/injections">Injections</Link></li>
              <li><Link to="/specialty">Specialty Treatment</Link></li>
            </ul>
          </li>
          <li className="dropdown-container">
          <li><Link to="/pricing">Pricing <i className="fas fa-chevron-down"></i> </Link></li>
          <ul className="dropdown">
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li><Link to="/intro-offers">Intro Offers</Link></li>
            </ul>
          

          </li>
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
        <h3>SERVICES</h3>
        <ul>
         
          <li><Link to="/vitaminivtherapy">Vitamin IV Therapy</Link></li>

          <li><Link to="/injections">Injections</Link></li>
          <li><Link to="/specialty">Specialty Treatment</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>RESOURCES</h3>
        <ul>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/intro-offers">Intro Offers</Link></li>
          

        </ul>
      </div>
      <div className="footer-column">
        <h3>ABOUT US</h3>
        <ul>
          <li><Link to="/about-us">Mission</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="footer-buttons">
            <Link to="https://booking.hydreight.com/widget">
              <button className="footer-button">BOOK NOW</button>
            </Link>
        <button className="footer-button">DOWNLOAD APP</button>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Restart Drip. All rights reserved.</p>
    </div>
  </footer>
);

export default App;

import React from 'react';
import './App.css'; // Import your CSS file for styling
import { BrowserRouter as Router, Link } from 'react-router-dom';

const treatments = [
  {
    name: 'DEHYDRATION',
    price: '$249',
    description: 'Rehydrate and replenish your body with IV fluids.',
    imageUrl: 'images/homepage/dehydration.png', // Update with actual path
  },
  {
    name: 'ENERGY BOOST',
    price: '$299',
    description: 'Replenish with essential energy-boosting fluids and vitamins.',
    imageUrl: 'images/homepage/energy.png', // Update with actual path
  },
  {
    name: 'HANGOVER',
    price: '$299',
    description: 'Resolve nausea, headaches, & fight fatigue.',
    imageUrl: 'images/homepage/hangover.png', // Update with actual path
  },
  {
    name: 'IMMUNE BOOST',
    price: '$299',
    description: 'Strengthen your immunity and support whole body wellness.',
    imageUrl: 'images/homepage/immune.png', // Update with actual path
  },
  {
    name: 'STOMACH FLU',
    price: '$299',
    description: 'Get instant relief from upset stomach, nausea, & dehydration.',
    imageUrl: 'images/homepage/stomach.png', // Update with actual path
  },
  {
    name: 'MYERS COCKTAIL',
    price: '$299',
    description: 'Restore balance, alleviate chronic illness symptoms, and support overall wellness.',
    imageUrl: 'images/homepage/myers.png', // Update with actual path
  },
  {
    name: 'RECOVERY',
    price: '$299',
    description: 'Improve endurance, shorten muscle recovery, & refuel the body.',
    imageUrl: 'images/homepage/recovery.png', // Update with actual path
  },
  {
    name: 'BEAUTY',
    price: '$299',
    description: 'Fortify hair, skin, & nails, support collagen to help improve complexion.',
    imageUrl: 'images/homepage/beauty.png', // Update with actual path
  }
];

const TreatmentCard = ({ name, price, description, imageUrl }) => (
  <div className="treatment-card">
    <img src={imageUrl} alt={name} />
    <h3>{name} - {price}</h3>
    <p>{description}</p>
    <button>Book Now</button>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          
          <div className="nav-bar">
            <div className="logo">
              <img src="images/logo.png" alt="Company Logo" />
            </div>
            <nav>
              <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/in-home-services">Services</Link></li>
                <li><Link to="/shipped-to-you">Delivery</Link></li>
                <li><Link to="/memberships">Memberships</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
              </ul>
            </nav>
            <div className="nav-actions">

              <button className="log-in">Log In</button>

            </div>
          </div>
        </header>
        <main className="main-content">
          
          <div className="homepage-section">
            <div className="homepage-text">
              <h1>Mobile IV Therapy</h1>
              <h2>& Medical Services Delivered To You!</h2>
              <div className="homepage-buttons">
                <button className="book-iv-therapy">Book IV Therapy</button>
                <button className="view-all-services">View all Services</button>
              </div>
            </div>
            <div className="homepage-image">
              <img src="images/homepage/homepage_background.png" alt="Homepage" />
            </div>
            <div className="IV-section">
        <div className="IV-text">
          <h1>Vitamin IV Therapy</h1>
          <h2>Experience all the benefits of IV therapy in the comfort of your own home.</h2>
        </div>
        
        <div className="treatment-container">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={index} {...treatment} />
          ))}
        </div>
        </div>
      
    </div>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="images/logo.png" alt="Company Logo" />
            </div>
            <nav>
              <ul className="footer-links" >
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/in-home-services">Services</Link></li>
                <li><Link to="/shipped-to-you">Delivery</Link></li>
                <li><Link to="/memberships">Memberships</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
              </ul>
            </nav>
            <div className="footer-social">
              <a href="#facebook" className="social-icon">FB</a>
              <a href="#twitter" className="social-icon">EM</a>
              <a href="https://www.instagram.com/restartdrip/" className="social-icon">IN</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Restart Drip. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;

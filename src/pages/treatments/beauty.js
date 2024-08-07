import React, { useEffect } from 'react';
import '../../css/treatments.css';
import { Link } from 'react-router-dom';

const Beauty = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".additional-info p, .additional-info li, .additional-info ul, .additional-info h1");

    const isElementInView = (element, offset = 0) => {
      const elementTop = element.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight - offset);
    };

    const toggleElementVisibility = (element, shouldShow) => {
      if (shouldShow) {
        element.classList.add('visible-text');
      } else {
        element.classList.remove('visible-text');
      }
    };

    const onScroll = () => {
      elements.forEach(el => {
        toggleElementVisibility(el, isElementInView(el, 100));
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="image-container">
        <img src="../images/services/gym.png" alt="Beauty IV" /> 
      </div>
      <div className="content-container">
        <h1>BEAUTY & YOUTH</h1>
        <h3>Vitamin C, Biotin, Sodium Chloride</h3>
        <p>
          This beauty/youth IV infusion provides essential nutrients, antioxidants, and vitamins that support hormone pathways, reduce oxidative stress, and nourish the body to produce fatty acids preventing premature and visible skin aging.
        </p>
     <div className="homepage-buttons">
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">BOOK NOW</button>
            </Link>
          </div>
      </div>

      <div className="main-container">
        <div className="ingredient-wrapper">
          <div className="ingredient-container">
            <img src="../images/services/smile.png" alt="Vitamin C" />
            <h1>VITAMIN C</h1>
            <h3><i>Helps form blood vessels, cartilage, muscle, and collagen in bones</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="Biotin" />
            <h1>BIOTIN</h1>
            <h3><i>Metabolizes carbohydrates, fats, and amino acids; builds protein</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="Sodium Chloride" /> 
            <h1>SODIUM CHLORIDE</h1>
            <h3><i>Assists in the absorption and transportation of nutrients</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
        RESTART - DRIP 
      </div>

      <div className="additional-info">
        <h1 className="hidden-text">Benefits of Beauty IV Therapy</h1>
        <ul className="hidden-text">
          <li className="hidden-text">Provides essential nutrients</li>
          <li className="hidden-text">Reduces oxidative stress</li>
          <li className="hidden-text">Prevents visible skin aging</li>
        </ul>
        <h1 className="hidden-text">Beauty/Youth IV Therapy</h1>
        <p className="hidden-text">
          Beauty IV therapy is designed to boost skin health and overall beauty through a targeted combination of essential nutrients. Vitamin C serves as a potent antioxidant, protecting the skin from environmental damage and promoting collagen production, which enhances elasticity and firmness. Biotin, also known as Vitamin B7, supports healthy hair, skin, and nails by strengthening them and aiding in renewal and repair processes. Sodium Chloride helps maintain electrolyte balance and hydration, crucial for skin moisture and cellular function.
        </p>
        <p className="hidden-text">
          This therapy delivers these vital nutrients directly into the bloodstream, ensuring rapid absorption and effectiveness. It's particularly beneficial for improving skin texture, promoting a youthful glow, and strengthening hair and nails. Regular sessions of Beauty IV therapy can enhance overall skin health and contribute to a radiant, healthy appearance. It's a valuable option for individuals seeking to complement their skincare regimen with internal nourishment.
        </p>
        <h1 className="hidden-text">Why Choose Us for IV Hydration?</h1>
        <p className="hidden-text">
          When you’re in need of liquid IV therapy for a hangover or recovery of any kind in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast!
        </p>
      </div>
    </div>
  );
};

export default Beauty;

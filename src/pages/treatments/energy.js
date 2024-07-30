import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/treatments.css';

const Energy = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".additional-info p, .additional-info ul, .additional-info li, .additional-info h1");

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

    const handleScroll = () => {
      elements.forEach(el => {
        toggleElementVisibility(el, isElementInView(el, 100));
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="image-container">
        <img src="../images/services/running.png" alt="Athlete IV" /> 
      </div>
      <div className="content-container">
        <h1>ENERGY BOOST</h1>
        <h3>B-Complex, Vitamin C, B12</h3>
        <p>
          Rehydrate and replenish your body with IV fluids. This IV therapy cocktail is great for recovery from dehydration due to illness, travel, or strenuous activity.
        </p>
        <div className="button-container">
          <Link to="https://booking.hydreight.com/widget">
            <button className="book-now">BOOK NOW</button>
          </Link>
        </div>
      </div>
      <div className="main-container">
        <div className="ingredient-wrapper">
          <div className="ingredient-container">
            <img src="../images/services/smile.png" alt="B-Complex" />
            <h1>B-COMPLEX</h1>
            <h3><i>For mood regulation, and healthy hair, skin + nails</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="Vitamin C" />
            <h1>VITAMIN C</h1>
            <h3><i>For immune system support and tissue repair</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="B12" /> 
            <h1>B12</h1>
            <h3><i>For metabolism, energy, and mental clarity</i></h3>
          </div>
        </div>
      </div>
      <div className="banner">
        RESTART - DRIP 
      </div>
      <div className="additional-info">
        <h1 className="hidden-text">Causes of Low Energy</h1>
        <ul className="hidden-text">
          <li className="hidden-text">Thyroid conditions</li>
          <li className="hidden-text">Anemia</li>
          <li className="hidden-text">Insufficient sleep</li>
          <li className="hidden-text">Stress</li>
          <li className="hidden-text">Neurological conditions</li>
          <li className="hidden-text">Electrolyte imbalances</li>
          <li className="hidden-text">Overexertion</li>
        </ul>
        <h1 className="hidden-text">Energy Boost IV Therapy</h1>
        <p className="hidden-text">
          Energy Boost IV Therapy is designed to rejuvenate and revitalize your body by delivering a potent blend of essential vitamins directly into your bloodstream. This therapy uses the power of B-Complex vitamins, Vitamin C, and Vitamin B12 to effectively increase your energy levels and improve overall well-being.
        </p>
        <p className="hidden-text">
          B-Complex vitamins play a crucial role in converting nutrients into energy, aiding in the reduction of fatigue and enhancing mental clarity. Vitamin C, a powerful antioxidant, helps protect your cells from oxidative stress and supports your immune system, keeping you feeling refreshed and resilient. Vitamin B12 is essential for red blood cell production and neurological function, providing an additional boost to your energy levels and cognitive performance. Together, these vitamins work synergistically to combat exhaustion, promote vitality, and help you feel your best.
        </p>
        <h1 className="hidden-text">Why Choose Us for IV Hydration?</h1>
        <p className="hidden-text">
          When you’re in need of liquid IV therapy for a hangover or recovery of any kind in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast!
        </p>
      </div>
    </div>
  );
};

export default Energy;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/treatments.css';

const Hangover = () => {
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
        <img src="../images/services/hungover.jpg" alt="Hangover IV" /> 
      </div>
      <div className="content-container">
        <h1>HANGOVER DETOX</h1>
        <h3>Vitamin C, Magnesium, Sodium Chloride</h3>
        <p>
          Contains essential vitamins and minerals to combat dehydration and reduce oxidative stress on the liver, cardiovascular, and endocrine systems by assisting in detoxification of the body. Reduces nausea which is also helpful to recovery.
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
            <h3><i>Enables the release of energy through metabolism and supports the nervous system</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="Magnesium" />
            <h1>MAGNESIUM</h1>
            <h3><i>For nerve and muscle function, mood, and as a natural relaxant</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="Sodium Chloride" /> 
            <h1>SODIUM CHLORIDE</h1>
            <h3><i>For cell metabolism, nerve function, and the creation of red blood cells</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
        RESTART - DRIP 
      </div>

      <div className="additional-info">
        <h1 className="hidden-text">Benefits of Hangover Detox</h1>
        <ul className="hidden-text">
          <li className="hidden-text">Detoxifies the body</li>
          <li className="hidden-text">Reduces nausea</li>
          <li className="hidden-text">Rapid rehydration</li>
        </ul>
        <h1 className="hidden-text">Hangover Detox IV Therapy</h1>
        <p className="hidden-text">
          Hangover detox IV therapy is a specialized treatment that includes essential nutrients such as vitamin C, magnesium, and sodium chloride to alleviate symptoms and promote recovery after excessive alcohol consumption.
        </p>
        <p className="hidden-text">
          This targeted IV therapy delivers these nutrients directly into the bloodstream, bypassing the digestive system for rapid absorption and effectiveness. Vitamin C acts as a powerful antioxidant, helping to neutralize toxins and reduce oxidative stress caused by alcohol. Magnesium supports muscle relaxation and hydration, which can alleviate headaches and muscle tension associated with hangovers. Sodium chloride helps restore electrolyte balance, crucial for overall hydration and optimal bodily function.
        </p>
        <p className="hidden-text">
          Hangover detox IV therapy is particularly beneficial for individuals experiencing dehydration, nausea, fatigue, and headaches after consuming alcohol. By replenishing fluids and essential nutrients quickly and efficiently, this therapy helps to alleviate hangover symptoms, restore energy levels, and promote overall well-being.
        </p>
        <h1 className="hidden-text">Why Choose Us for IV Hydration?</h1>
        <p className="hidden-text">
          When you need liquid IV therapy for a hangover or recovery of any kind in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast!
        </p>
      </div>
    </div>
  );
};

export default Hangover;

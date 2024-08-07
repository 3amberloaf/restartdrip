import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/treatments.css';

const Fat = () => {
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
        <img src="../images/services/fat-burner.jpg" alt="Fat Burner IV" /> 
      </div>
      <div className="content-container">
        <h1>FAT BURNER</h1>
        <h3>Amino Blend, B-Plex, Glutathione, Sodium Chloride</h3>
        <p>
          This infusion of essential amino acids, vitamins, and B12 is designed to transport fatty acids into the mitochondria where they can be burned for energy. Additional benefits include mood improvement and better appetite control.
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
            <img src="../images/services/smile.png" alt="Amino Blend" />
            <h1>AMINO BLEND</h1>
            <h3><i>Boosts metabolism, improves energy levels, increases endurance, and helps burn fat</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="B-Plex" />
            <h1>B-PLEX</h1>
            <h3><i>Enables energy release through metabolism and supports the nervous system</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="Glutathione" /> 
            <h1>GLUTATHIONE</h1>
            <h3><i>Supports detoxification, reduces inflammation, and boosts the immune system</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="Sodium Chloride" />
            <h1>SODIUM CHLORIDE</h1>
            <h3><i>Facilitates the absorption and transportation of nutrients</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
        RESTART - DRIP 
      </div>
      <div className="additional-info">
        <h1 className="hidden-text">Benefits of Fat Burner</h1>
        <ul className="hidden-text">
          <li className="hidden-text">Improves mood</li>
          <li className="hidden-text">Helps with appetite control</li>
        </ul>
        <h1 className="hidden-text">Fat Burner IV Therapy</h1>
        <p className="hidden-text">
          Fat burner IV therapy combines essential nutrients such as an amino blend, B-plex vitamins, glutathione, and sodium chloride to support rapid fat metabolism and enhance weight loss. This specialized IV treatment delivers these nutrients directly into the bloodstream, bypassing the digestive system for immediate absorption and effectiveness.
        </p>
        <p className="hidden-text">
          The amino blend promotes fat metabolism and maintains muscle mass, which is essential for weight loss and improved body composition. B-plex vitamins support energy metabolism, aid in converting food into energy, and help maintain overall metabolic function, which is crucial for effective weight management. Glutathione acts as a powerful antioxidant, detoxifying the body and improving cellular function.
        </p>
        <p className="hidden-text">
          This targeted IV therapy is beneficial for boosting weight loss efforts and enhancing overall wellness. By ensuring rapid hydration and delivering key nutrients directly where needed most, fat burner IV therapy supports effective fat metabolism, improves energy levels, and promotes mental clarity. Regular sessions can contribute to sustained weight loss, improved energy levels, and overall better health, making it a valuable investment in achieving and maintaining peak physical condition and quality of life.
        </p>
        <h1 className="hidden-text">Why Choose Us for IV Hydration?</h1>
        <p className="hidden-text">
          When you need liquid IV therapy for a hangover or recovery in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, helping those who need to feel better fast!
        </p>
      </div>
    </div>
  );
};

export default Fat;

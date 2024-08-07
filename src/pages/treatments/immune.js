import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/treatments.css';

const Immune = () => {
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
        <img src="../images/services/immunity.png" alt="Immunity IV" /> 
      </div>
      <div className="content-container">
        <h1>IMMUNITY BOOSTER</h1>
        <h3>Vitamin C, Zinc, Sodium Chloride</h3>
        <p>
          This treatment includes zinc to block viral replication and support immune cells, along with Vitamin C to boost lymphocyte and phagocyte production and act as a powerful antioxidant that protects cells and aids in healing.
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
            <img src="../images/services/lightbulb.png" alt="Sodium Chloride" />
            <h1>SODIUM CHLORIDE</h1>
            <h3><i>Supports the absorption and transportation of nutrients</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="Zinc" /> 
            <h1>ZINC</h1>
            <h3><i>Helps fight off bacteria and viruses</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
        RESTART - DRIP 
      </div>

      <div className="additional-info">
        <h1 className="hidden-text">Benefits of Immune Booster</h1>
        <ul className="hidden-text">
          <li className="hidden-text">Strengthens immunity</li>
          <li className="hidden-text">Contains antioxidants and anti-inflammatory elements</li>
        </ul>
        <h1 className="hidden-text">Immune Booster IV Therapy</h1>
        <p className="hidden-text">
          This targeted IV therapy delivers essential nutrients directly into the bloodstream, ensuring rapid absorption and effectiveness. Vitamin C is a potent antioxidant that supports immune function by boosting white blood cells, which are crucial for fighting infections. Sodium chloride helps maintain electrolyte balance and proper hydration, essential for overall immune health. Zinc plays a key role in numerous immune system processes, including the development and activation of immune cells.
        </p>
        <p className="hidden-text">
          Immune booster IV therapy is particularly beneficial during times of increased susceptibility to illness or when the immune system needs additional support. By delivering essential nutrients directly where they are needed most, this therapy helps enhance immune function, reduce the severity and duration of illnesses, and promote overall wellness.
        </p>
        <p className="hidden-text">
          Regular sessions of immune booster IV therapy can contribute to stronger immune defenses, improved resistance to infections, and faster recovery from illness, making it a valuable option for individuals looking to maintain optimal immune health and well-being.
        </p>
        <h1 className="hidden-text">Why Choose Us for IV Hydration?</h1>
        <p className="hidden-text">
          When you need liquid IV therapy for a hangover or recovery in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, helping those who need to feel better fast!
        </p>
      </div>
    </div>
  );
};

export default Immune;

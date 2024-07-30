import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/treatments.css';

const Migraine = () => {
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
        <img src="../images/services/migraine.jpg" alt="Migraine IV" /> 
      </div>
      <div className="content-container">
        <h1>MIGRAINE FIGHTER</h1>
        <h3>B-Plex, Pyridoxine, Sodium Chloride</h3>
        <p>
          This multifaceted infusion improves vascular function linked to migraine attacks and reduces nausea.
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
            <img src="../images/services/smile.png" alt="B-Plex" />
            <h1>B-PLEX</h1>
            <h3><i>Enables the release of energy through metabolism and supports the nervous system</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="Pyridoxine" />
            <h1>PYRIDOXINE</h1>
            <h3><i>Supports brain development and keeps the nervous system healthy</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="Sodium Chloride" /> 
            <h1>SODIUM CHLORIDE</h1>
            <h3><i>For the absorption and transportation of nutrients</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
        RESTART - DRIP 
      </div>

      <div className="additional-info">
        <h1 className="hidden-text">Benefits of Migraine Recovery</h1>
        <ul className="hidden-text">
          <li className="hidden-text">Reduces nausea</li>
          <li className="hidden-text">Improves vascular function</li>
        </ul>
        <h1 className="hidden-text">Migraine Recovery IV Therapy</h1>
        <p className="hidden-text">
          Migraine recovery IV therapy combines essential nutrients such as B-Plex (Vitamin B Complex), Pyridoxine, and Sodium Chloride to support rapid relief from migraine symptoms and enhance overall recovery. This specialized IV treatment delivers these nutrients directly into the bloodstream, bypassing the digestive system for immediate absorption and effectiveness.
        </p>
        <p className="hidden-text">
          B-Plex vitamins play a crucial role in maintaining neurological function and reducing inflammation, which is essential for individuals suffering from migraines. Pyridoxine (Vitamin B6) supports neurotransmitter function, aids in reducing the frequency and severity of migraines, and helps maintain overall neurological health. Sodium chloride ensures proper hydration, which is vital for alleviating migraine symptoms and preventing future occurrences.
        </p>
        <p className="hidden-text">
          This targeted IV therapy is particularly beneficial for individuals seeking quick relief from migraine pain and related symptoms. By ensuring rapid hydration and delivering key nutrients directly where they are needed most, migraine recovery IV therapy supports effective symptom management, improves energy levels, and promotes mental clarity. Regular sessions can contribute to reduced migraine frequency, quicker recovery times, and overall better health, making it a valuable investment in achieving and maintaining peak physical well-being and quality of life.
        </p>
        <h1 className="hidden-text">Why Choose Us for IV Hydration?</h1>
        <p className="hidden-text">
          When you’re in need of liquid IV therapy for a hangover or recovery of any kind in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast!
        </p>
      </div>
    </div>
  );
};

export default Migraine;

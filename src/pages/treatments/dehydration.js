import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../css/treatments.css';

const Dehydration = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".additional-info p, .additional-info li, .additional-info ul, .additional-info h1");

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

    handleScrollAnimation();


    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
  return (
    <div className="container">
      <div className="image-container">
        <img src="../images/services/dehydrated.png" alt="Dehydration IV" /> {/* Replace with the actual image path */}
      </div>
      <div className="content-container">
        <h1>DEHYDRATION ELIMINATOR</h1>
        <h2>b-complex, magnesium, b6</h2>
        <p>
        Provides instant hydration and electrolytes. Whether you have been hitting the gym hard, partying all night or just need a pick me up this service will but the pep back in your step.
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
            <img src="../images/services/smile.png" alt="B-COMPLEX" />
            <h1>B-COMPLEX</h1>
            <h3><i>for mood regulation, and healthy hair, skin + nails</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="MAGNESIUM" />
            <h1>MAGNESIUM</h1>
            <h3><i>for nerve and muscle function, mood, natural relaxant</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="B6" /> {/* Replace with the actual image path */}
            <h1>B6</h1>
            <h3><i>for metabolism and the creation of red blood cells</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
          RESTART - DRIP 
      </div>

      <div className="additional-info">
          <h1 className="hidden-text">Are you dehydrated?</h1>
          <p className="hidden-text">According to the National Library of Medicine, around <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'red' }}>75%</span> of Americans are chronically dehydrated. Some of the most common symptoms include:</p>
          <ul className="hidden-text">
              <li className="hidden-text">Dehydration</li>
              <li className="hidden-text">Nausea and vomiting</li>
              <li className="hidden-text">Headache and aching muscles</li>
              <li className="hidden-text">Dizziness</li>
              <li className="hidden-text">Weakness and shakiness</li>
              <li className="hidden-text">Irritability</li>
          </ul>
          <h1 className="hidden-text">Dehydration IV Therapy</h1>
          <p className="hidden-text">
              Dehydration IV therapy is a vital health intervention that quickly replenishes fluids and essential nutrients in the body. Whether due to intense physical activity, illness, or everyday stress, dehydration can impair bodily functions, leading to fatigue, headaches, and decreased performance. IV therapy ensures rapid and effective hydration, delivering fluids directly into the bloodstream for immediate absorption.
          </p>
          <p className="hidden-text">This method bypasses the digestive system, making it especially beneficial for those who need quick recovery. Everyone can benefit from dehydration IV therapy as it helps maintain optimal hydration levels, supports overall wellness, and enhances physical and mental performance. Investing in regular IV hydration can lead to better health, increased energy, and improved quality of life.
          </p>
          <h1 className="hidden-text">Why Choose Us for IV Hydration?</h1>
          <p className="hidden-text">
              When you are in need of liquid IV therapy for a hangover or recovery of any kinds in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast!
          </p>
      </div>


    </div>
  );
};

export default Dehydration;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/treatments.css';

const Myers = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".additional-info p, .additional-info ul, .additional-info li, .additional-info h1");

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

    // Initial check to display elements that are already in view
    handleScrollAnimation();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="container">
      <div className="image-container">
        <img src="../images/services/myers.jpg" alt="Myers IV" /> 
      </div>
      <div className="content-container">
        <h1>Myers Cocktail</h1>
        <h3>vitamin c, magnesium, sodium chloride, pyridoxine</h3>
        <p>
          This blend of B vitamins, Vitamin C, Magnesium and Calcium all work in combination to increase metabolism, replace electrolytes lost by dehydration, and facilitate enzymatic reactions in intracellular processes. This will revitalize, enhance relaxation, recovery, reduce blood pressure and stress.
        </p>
        <div className="button-container">
          <Link to="https://booking.hydreight.com/widget">
            <button className="book-now">BOOK NOW</button>
          </Link>
        </div>
      </div>

      <div className="main-container">
        <div className="ingredient-wrapper">
          {/** Ingredient Items */}
          {[
            { src: "../images/services/smile.png", alt: "B-COMPLEX", title: "VITAMIN C", description: "to form blood vessels, cartilage, muscle and collagen in bones" },
            { src: "../images/services/lightbulb.png", alt: "MAGNESIUM", title: "MAGNESIUM", description: "for nerve and muscle function, mood, natural relaxant" },
            { src: "../images/services/waterdrop.png", alt: "SODIUM CHLORIDE", title: "SODIUM CHLORIDE", description: "for the absorption and transportation of nutrients" },
            { src: "../images/services/waterdrop.png", alt: "PYRIDOXINE", title: "PYRIDOXINE", description: "for brain development and keeping the nervous system healthy" },
          ].map((ingredient, index) => (
            <div className="ingredient-container" key={index}>
              <img src={ingredient.src} alt={ingredient.alt} />
              <h1>{ingredient.title}</h1>
              <h3><i>{ingredient.description}</i></h3>
            </div>
          ))}
        </div>
      </div>

      <div className="banner">
        RESTART - DRIP
      </div>

      <div className="additional-info">
        <h1 className="hidden-text">Benefits of Myers Cocktail</h1>
        <ul className="hidden-text">
          <li className="hidden-text">Enhances relaxation</li>
          <li className="hidden-text">Reduces blood pressure</li>
          <li className="hidden-text">Increases metabolism</li>
        </ul>
        <h1 className="hidden-text">Myers Cocktail IV Therapy</h1>
        <p className="hidden-text">
          The Myers' Cocktail IV therapy is particularly beneficial for individuals seeking to enhance energy levels, support immune function, and improve overall well-being. It is often used to alleviate symptoms of fatigue, dehydration, migraines, and chronic conditions like fibromyalgia and asthma.
        </p>
        <p className="hidden-text">
          Regular sessions of Myers' Cocktail IV therapy can contribute to improved energy levels, reduced symptoms of illness or chronic conditions, and enhanced overall health and vitality. It is a valuable option for individuals looking to optimize their nutritional status and support their body's natural healing processes.
        </p>
        <h1 className="hidden-text">Why Choose Us for IV Hydration?</h1>
        <p className="hidden-text">
          When you’re in need of liquid IV therapy for a hangover or recovery of any kinds in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast!
        </p>
      </div>
    </div>
  );
};

export default Myers;

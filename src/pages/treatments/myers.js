import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/treatments.css';

const Myers = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src="../images/services/myers.jpg" alt="Myers IV" /> {/* Replace with the actual image path */}
      </div>
      <div className="content-container">
        <h1>Myers Cocktail</h1>
        <h2>vitamin c, magnesium, sodium chloride, pyridoxine</h2>
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
          <div className="ingredient-container">
            <img src="../images/services/smile.png" alt="B-COMPLEX" />
            <h1>VITAMIN C</h1>
            <h3><i>to form blood vessels, cartilage, muscle and collagen in bones</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="MAGNESIUM" />
            <h1>MAGNESIUM</h1>
            <h3><i>for nerve and muscle function, mood, natural relaxant</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="B12" /> {/* Replace with the actual image path */}
            <h1>SODIUM CHLORIDE</h1>
            <h3><i>for the absorption and transportation of nutrients</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="B12" /> {/* Replace with the actual image path */}
            <h1>PYRIDOXINE</h1>
            <h3><i>for brain development and keeping the nervous system healthy</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
          RESTART - DRIP 
      </div>

      <div className="additional-info">
          <h1>Benefits of Myers Cocktail</h1>
          <ul>
            <li>Enhances relaxation</li>
            <li>Reduces blood pressure</li>
            <li>Increases metabolism</li>
          </ul>
          <h1>Myers Cocktail IV Therapy</h1>
          <p>
          The Myers' Cocktail IV therapy is particularly beneficial for individuals seeking to enhance energy levels, support immune function, and improve overall well-being. It is often used to alleviate symptoms of fatigue, dehydration, migraines, and chronic conditions like fibromyalgia and asthma.
          </p>
          <p>Regular sessions of Myers' Cocktail IV therapy can contribute to improved energy levels, reduced symptoms of illness or chronic conditions, and enhanced overall health and vitality. It is a valuable option for individuals looking to optimize their nutritional status and support their body's natural healing processes.
          </p>
          
         
          <h1>Why Choose Us for IV Hydration?</h1>
          <p>
            When you’re in need of liquid IV therapy for a hangover or recovery of any kinds in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast! 
          </p>
          
        </div>

    </div>
  );
};

export default Myers;

import React from 'react';
import '../../css/treatments.css';

const Myers = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src="../images/services/gym.png" alt="Athlete IV" /> {/* Replace with the actual image path */}
      </div>
      <div className="content-container">
        <h1>ATHLETE RECOVERY</h1>
        <h2>b12, magnesium, sodium chloride</h2>
        <p>
        Recovering from a workout or gearing up for a competition? This service is for you, amino acids and B12 help with muscle conditioning, recovery and endurance. This blend also assists in our bodies nervous system, metabolism and protein synthesis. 
        </p>
  
        <div className="button-container">
          <button className="book-now">Book Here</button>
        </div>
      </div>

      <div className="main-container">
        <div className="ingredient-wrapper">
          <div className="ingredient-container">
            <img src="../images/services/smile.png" alt="B-COMPLEX" />
            <h1>B-COMPLEX</h1>
            <h3><i> enables the release of energy through metabolism and supports nervous system</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="MAGNESIUM" />
            <h1>MAGNESIUM</h1>
            <h3><i>for nerve and muscle function, mood, natural relaxant</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="B12" /> {/* Replace with the actual image path */}
            <h1>B12</h1>
            <h3><i>for cell metabolism, nerve function, and the creation of red blood cells</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
          RESTART - DRIP 
      </div>

      <div className="additional-info">
          <h1>Benefits of Athlete Recovery</h1>
          <ul>
            <li>Aids recovery</li>
            <li>Improved endurance</li>
            <li>Helps with muscle conditioning</li>
          </ul>
          <h1>Athlete Recovery IV Therapy</h1>
          <p>
          Athlete recovery IV therapy combines essential nutrients such as magnesium, vitamin B12, and B complex vitamins to support rapid recovery and enhance performance. This specialized IV treatment delivers these nutrients directly into the bloodstream, bypassing the digestive system for immediate absorption and effectiveness. 
          </p>
          <p>Magnesium plays a crucial role in muscle function and relaxation, which is essential for athletes recovering from intense physical activity. Vitamin B12 supports red blood cell production, aids in energy metabolism, and helps maintain neurological function, all of which are vital for optimal athletic performance. B complex vitamins further contribute to energy production and help in the synthesis of new cells.
          </p>
          <p>
          This targeted IV therapy is particularly beneficial for athletes and active individuals who need quick replenishment of fluids and nutrients to combat dehydration and fatigue. By ensuring rapid hydration and delivering key nutrients directly where they are needed most, athlete recovery IV therapy supports overall wellness, enhances physical recovery, and promotes mental clarity. Regular sessions can contribute to sustained energy levels, improved recovery times, and overall better performance, making it a valuable investment in maintaining peak health and quality of life.
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

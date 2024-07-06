import React from 'react';
import '../../css/treatments.css';

const Migraine = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src="../images/services/migraine.jpg" alt="Athlete IV" /> {/* Replace with the actual image path */}
      </div>
      <div className="content-container">
        <h1>MIGRAIN FIGHTER</h1>
        <h2>b-plex, pyridoxine, sodium chloride</h2>
        <p>
        This multifaceted infusion will improve vascular function linked to migraine attacks and reduces nausea.</p>
  
        <div className="button-container">
          <button className="book-now">Book Here</button>
        </div>
      </div>

      <div className="main-container">
        <div className="ingredient-wrapper">
          <div className="ingredient-container">
            <img src="../images/services/smile.png" alt="B-COMPLEX" />
            <h1>B-PLEX</h1>
            <h3><i> enables the release of energy through metabolism and supports the nervous system</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="MAGNESIUM" />
            <h1>PYRIDOXINE</h1>
            <h3><i>for brain development and keeping the nervous system healthy</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="B12" /> {/* Replace with the actual image path */}
            <h1>SODIUM CHLORIDE</h1>
            <h3><i>for the absorption and transportation of nutrients</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
          RESTART - DRIP 
      </div>

      <div className="additional-info">
          <h1>Benefits of Migraine recovery</h1>
          <ul>
            <li>Reduces nausea</li>
            <li>Improves vascular function</li>
          </ul>
          <h1>Migraine recovery IV Therapy</h1>
          <p>
          Migraine recovery IV therapy combines essential nutrients such as B-Plex (Vitamin B Complex), Pyridoxine, and Sodium Chloride to support rapid relief from migraine symptoms and enhance overall recovery. This specialized IV treatment delivers these nutrients directly into the bloodstream, bypassing the digestive system for immediate absorption and effectiveness.</p>
          <p>B-Plex vitamins play a crucial role in maintaining neurological function and reducing inflammation, which is essential for individuals suffering from migraines. Pyridoxine (Vitamin B6) supports neurotransmitter function, aids in reducing the frequency and severity of migraines, and helps maintain overall neurological health. Sodium Chloride ensures proper hydration, which is vital for alleviating migraine symptoms and preventing future occurrences.</p>
          <p>
          This targeted IV therapy is particularly beneficial for individuals seeking quick relief from migraine pain and related symptoms. By ensuring rapid hydration and delivering key nutrients directly where they are needed most, migraine recovery IV therapy supports effective symptom management, improves energy levels, and promotes mental clarity. Regular sessions can contribute to reduced migraine frequency, quicker recovery times, and overall better health, making it a valuable investment in achieving and maintaining peak physical well-being and quality of life.</p>
         
          <h1>Why Choose Us for IV Hydration?</h1>
          <p>
            When you’re in need of liquid IV therapy for a hangover or recovery of any kinds in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast! 
          </p>
          
        </div>

    </div>
  );
};

export default Migraine;

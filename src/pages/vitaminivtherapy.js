import React from 'react';
import '../css/vitaminivtherapy.css';
import TreatmentCard from './treatments/treatment_card';
import treatments from './treatments/treatments';

const VitaminTherapy = () => {
  return (
    <div>
      <div className="vitamin-IV-services">
        <div className="vitamin-services-text">
          <img src='/images/random/ivbag.png' alt='iv-bag' />
          <div className="vitamin-text-content">
            <h1>Vitamin IV Therapy</h1>
            <h3>The cocktail your body craves</h3>
          </div>
        </div>
        <div className="vitamin-IV-services">
        <p>Restart Drip is renowned for our menu of vitamin-infused IV therapy cocktails. Each of our signature IV drips includes 1 liter of saline combined with a blend of vitamins and nutrients. For an added boost, many of our clients opt to add an extra half or full bag of fluids to their session.</p>
        <p>Our medical team has meticulously crafted each of our signature IV therapy cocktails to address a wide range of needs, including recovery, immunity, hangover relief, athletic performance, anti-aging, and general health and wellness. Additionally, we offer the ever-popular Myers Cocktail, a favorite among IV therapy enthusiasts nationwide.</p>
       </div>
      </div>
      <div className="vitamin-services">
        <h1>Signature Cocktails</h1>
      </div>
      <div className="iv-services">
        <div className="treatment-container">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={index} {...treatment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VitaminTherapy;

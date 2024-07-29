import React from 'react';
import '../css/pricing.css';
import TreatmentCard from './treatments/treatment_card';
import treatments from './treatments/treatments';
import injections from './injections/injections_card';

const Pricing = () => {
  return (
    <div>
      <div className="pricings">
        <div className="pricing-header">
          <h1>Restart Drip Menu & Pricing</h1>
        </div>

        <div className="pricing-box">
            <h1>IV THERAPY PRICING</h1>
            <h3>*You can also build your own IV! Scroll down to view our individual vitamin menu.</h3>
            <div className="vitamin-services">
          <h1> Signature Cocktails</h1>
        </div>
      <div className="treatment-container">
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>

      <div className='injections-services'>
        <h1>Signature Shots</h1>
      </div>
      <div className="treatment-container">
        {injections.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>
      <div className="pricing">
            <div className="header">
                <h1>NAD+ IV THERAPY</h1>
                <h3>DOSAGE AND PRICING</h3>
            </div>
            <div className="pricing-info">
                <h3>– 500MG NAD IV Therapy: $400 for Hydrate members / $450 for non-members</h3>
                <h3>– 750MG NAD IV Therapy: $500 for Hydrate members / $550 for non-members</h3>
                <h3>– 1000MG NAD IV Therapy: $750 for Hydrate members / $850 for non-members</h3>
                <h4>Please email info@restartdrip.com to speak with our staff about NAD+ loading dose packages and pricing.</h4>
            </div>
        </div>
        <div className="images-container">
          <div className="images">

   
          <div className="cell">
              <img src="/images/services/cell.png" alt="cell" />
              <p> Cell Regeneration</p>
          </div>
          <div className="metabolism">
            <img src="/images/services/metabolism.png" alt="metabolism" />
            <p> Increased Metabolism</p>
          </div>
          
          <div className="joint">
          <img src="/images/services/joint.png" alt="joint" />
          <p> Reduced Joint/Muscle Pain</p>
          </div>
          <div className="sleep">
          <img src="/images/services/sleep.png" alt="sleep" />
          <p> Improved Sleep</p>
          </div>
          <div className="clarity">
          <img src="/images/services/clarity.png" alt="clarity" />
          <p> Mental Clarity</p>
          </div>
          </div>
          
        </div>
        </div>
        </div>
    </div>
  );
};

export default Pricing;

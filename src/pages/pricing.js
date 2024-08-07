import React from 'react';
import { Link } from 'react-router-dom';
import '../css/pricing.css';
import TreatmentCard from './treatments/treatment_card';
import treatments from './treatments/treatments';
import injections from './injections/injections_card';

const Pricing = () => {
  return (
    <div className="pricings">
      <div className="pricing-header">
        <h1>Restart Drip Menu & Pricing</h1>
      </div>

      <div className="pricing-box">
        <h1>IV THERAPY PRICING</h1>
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

      <div className="injections-services">
        <h1>Signature Shots</h1>
      </div>

      <div className="treatment-container">
        {injections.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>

      <div className="benefits-section">
        <div className="pricing">
          <div className="header">
            <h1>NAD+ IV THERAPY</h1>
            <h3>DOSAGE AND PRICING</h3>
          </div>
          <div className="pricing-info">
            <h3>– 500MG NAD IV Therapy: $800</h3>
            <h3>– 1000MG NAD IV Therapy: $1000</h3>
          </div>
        </div>
        <div className="images-container">
        <div className="images">
          <div className="cell">
            <img src="/images/services/cell.png" alt="cell" />
            <p>Cell Regeneration</p>
          </div>
          <div className="metabolism">
            <img src="/images/services/metabolism.png" alt="metabolism" />
            <p>Increased Metabolism</p>
          </div>
          <div className="joint">
            <img src="/images/services/joint.png" alt="joint" />
            <p>Reduced Joint/Muscle Pain</p>
          </div>
          <div className="sleep">
            <img src="/images/services/sleep.png" alt="sleep" />
            <p>Improved Sleep</p>
          </div>
          <div className="clarity">
            <img src="/images/services/clarity.png" alt="clarity" />
            <p>Mental Clarity</p>
          </div>
        </div>
      </div>
      </div>
      <div className="benefits-section">

      <div className="pricing">
        <div className="header">
        <h1>NAD+ Injection</h1>
        <h3>DOSAGE AND PRICING</h3>
        </div>
        <div className="pricing-info">
            <h3>– 500MG NAD IV Therapy: $700</h3>
            <h3>– 1000MG NAD IV Therapy: $900</h3>
            <h4>Please email iv@restartdrip.com to speak with our staff about NAD+ loading dose packages and pricing.</h4>
          </div>
        <p>NAD+ therapy can promote cell regeneration, aid  joint and muscle pain, improve sleep, provide mental clarity, and boost energy. The NAD+ injection is a great substitute for the NAD+ infusion when you’re short on time and need a quick jump start.</p>
        </div>
        
      </div>

      
     
      <div className="pricing">
        <div className="header">
          <h1>PEPTIDE PRICING</h1>
          <h3>MONTHLY PRICING</h3>
        </div>
        <div className="pricing-info">
            <h3> $500 Monthly Fee</h3>
          </div>
        <div className="images-container">
          <div className="images">
         
            <div className="metabolism">
              <img src="/images/services/metabolism.png" alt="metabolism" />
              <p> Weight Management</p>
            </div>
            <div className="joint">
              <img src="/images/services/joint.png" alt="joint" />
              <p> Cardiovascular Health</p>
            </div>
           
            <div className="clarity">
              <img src="/images/services/clarity.png" alt="clarity" />
              <p> Quality of Life</p>
            </div>
          </div>
        </div>
        

      </div>
     
      
      <div className="homepage">
        <div className="waves">
          <h1>Thirsty?</h1>
          <div className="homepage-buttons">
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services" style={{ position: 'absolute', top: '55%', left: 
              '49%', transform: 'translate(-50%, -50%)'
               }}>BOOK NOW</button>
            </Link>
          </div>
          <img src="/images/homepage/waves.png" alt="waves" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;

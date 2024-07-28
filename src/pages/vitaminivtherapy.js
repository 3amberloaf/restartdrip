
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
        <div className="vitamin-text-content" >
          <h1>Vitamin IV Therapy</h1>
          <h3> the cocktail your body craves </h3>
        </div>
        </div>
        <p>Restart Drip is best-known for our spa’s menu of vitamin-infused IV therapy cocktails. All of our signature IV drips have 1 liter of saline paired with a blend of vitamins and nutrients. If any of our signature IV cocktails aren’t quite what you’re looking for, you can build your own IV drip! For an extra boost, many Restart Drip clients love to add an extra half or full bag of fluids to the end of their visit as well.</p>
        <p>Our medical team has thoughtfully tailored each of our signature IV therapy cocktails to a variety of needs, including recovery, jet lag, immunity, altitude sickness, athletic performance, anti-aging and general health and wellness. And we also have the ever-popular Myers Cocktail — a favorite for IV therapy fans across the nation — and the Katie Cocktail — a custom blend that our founder loves — on tap.</p>
        <p>While walk-in IV and injection appoinments are always welcome, we encourage you to book your appointment ahead of time. Appointments will help our team to accommodate all clients, and ensure that we have a recliner ready for you to relax and rehydrate in!</p>
        <p>Restart Drip’s relaxing atmosphere may feel like your favorite spa, but we take IV safety very seriously! All of our services — from IVs to injections — are administered by experienced, registered nurses. The only thing more comforting than the big recliners you get to kick back in is the assurance of knowing that you’re in good hands with our incredible staff. </p>
        </div>
        <div className="vitamin-services">
          <h1> Signature Cocktails</h1>
        </div>
      <div className="treatment-container">
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>
    </div>
  );
};

export default VitaminTherapy;


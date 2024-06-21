// src/pages/AllServices.js
import React from 'react';
import '../css/services.css';

const treatments = [
  {
    name: 'DEHYDRATION',
    price: '$249',
    description: 'Rehydrate and replenish your body with IV fluids.',
    imageUrl: 'images/services/dehydration.png', // Update with actual path
  },
  {
    name: 'ENERGY BOOST',
    price: '$299',
    description: 'Replenish with essential energy-boosting fluids and vitamins.',
    imageUrl: 'images/services/energy.png', // Update with actual path
  },
  {
    name: 'HANGOVER',
    price: '$299',
    description: 'Resolve nausea, headaches, & fight fatigue.',
    imageUrl: 'images/services/hangover.png', // Update with actual path
  },
  {
    name: 'IMMUNE BOOST',
    price: '$299',
    description: 'Strengthen your immunity and support whole body wellness.',
    imageUrl: 'images/services/immune.png', // Update with actual path
  },
  {
    name: 'STOMACH FLU',
    price: '$299',
    description: 'Get instant relief from upset stomach, nausea, & dehydration.',
    imageUrl: 'images/services/stomach.png', // Update with actual path
  },
  {
    name: 'MYERS COCKTAIL',
    price: '$299',
    description: 'Restore balance, alleviate chronic illness symptoms, and support overall wellness.',
    imageUrl: 'images/services/myers.png', // Update with actual path
  },
  {
    name: 'RECOVERY',
    price: '$299',
    description: 'Improve endurance, shorten muscle recovery, & refuel the body.',
    imageUrl: 'images/services/recovery.png', // Update with actual path
  },
  {
    name: 'BEAUTY',
    price: '$299',
    description: 'Fortify hair, skin, & nails, support collagen to help improve complexion.',
    imageUrl: 'images/services/beauty.png', // Update with actual path
  }
];

const TreatmentCard = ({ name, price, description, imageUrl }) => (
  <div className="treatment-card">
    <img src={imageUrl} alt={name} />
    <h3>{name} - {price}</h3>
    <p>{description}</p>
    <button>Book Now</button>
  </div>
);

const AllServices = () => {
  return (
    <div>
      <div className="IV-services">
        <div className="services-text">
          <h1>Vitamin IV Therapy</h1>
          <h2>Experience all the benefits of IV therapy in the comfort of your own home.</h2>
        </div>
        
        
        </div>
      <div className="treatment-container">
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;

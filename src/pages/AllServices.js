// src/pages/AllServices.js
import React from 'react';

const treatments = [
  {
    name: 'DEHYDRATION',
    price: '$249',
    description: 'Rehydrate and replenish your body with IV fluids.',
    imageUrl: 'images/homepage/dehydration.png', // Update with actual path
  },
  {
    name: 'ENERGY BOOST',
    price: '$299',
    description: 'Replenish with essential energy-boosting fluids and vitamins.',
    imageUrl: 'images/homepage/energy.png', // Update with actual path
  },
  {
    name: 'HANGOVER',
    price: '$299',
    description: 'Resolve nausea, headaches, & fight fatigue.',
    imageUrl: 'images/homepage/hangover.png', // Update with actual path
  },
  {
    name: 'IMMUNE BOOST',
    price: '$299',
    description: 'Strengthen your immunity and support whole body wellness.',
    imageUrl: 'images/homepage/immune.png', // Update with actual path
  },
  {
    name: 'STOMACH FLU',
    price: '$299',
    description: 'Get instant relief from upset stomach, nausea, & dehydration.',
    imageUrl: 'images/homepage/stomach.png', // Update with actual path
  },
  {
    name: 'MYERS COCKTAIL',
    price: '$299',
    description: 'Restore balance, alleviate chronic illness symptoms, and support overall wellness.',
    imageUrl: 'images/homepage/myers.png', // Update with actual path
  },
  {
    name: 'RECOVERY',
    price: '$299',
    description: 'Improve endurance, shorten muscle recovery, & refuel the body.',
    imageUrl: 'images/homepage/recovery.png', // Update with actual path
  },
  {
    name: 'BEAUTY',
    price: '$299',
    description: 'Fortify hair, skin, & nails, support collagen to help improve complexion.',
    imageUrl: 'images/homepage/beauty.png', // Update with actual path
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
      <div className="IV-section">
        <div className="IV-text">
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

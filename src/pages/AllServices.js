// src/pages/AllServices.js
import React from 'react';
import '../css/services.css';
import { Link } from 'react-router-dom';
import treatments from './treatments/treatments';


const TreatmentCard = ({ name, price, description, imageUrl, servicePath }) => (
  <div className="treatment-card">
    <img src={imageUrl} alt={name} />
    <h3>{name} - {price}</h3>
    <p>{description}</p>
    <Link to={servicePath} className="learn-more-button">Book Now</Link>
  </div>
);

const AllServices = () => {
  return (
    <div>
      <div className="IV-services">
        <div className="services-text">
          <h1>Vitamin IV Therapy</h1>
          <h2>~ Experience all the benefits of IV therapy in the comfort of your own home ~ </h2>
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


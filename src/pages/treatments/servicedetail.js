// src/pages/ServiceDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import treatments from './treatments';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = treatments.find(t => t.servicePath === `/services/${serviceId}`);

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="service-detail">
      <img src={service.imageUrl} alt={service.name} />
      <h1>{service.name}</h1>
      <h2>{service.price}</h2>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetail;

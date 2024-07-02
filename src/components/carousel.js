import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import treatments from '../pages/treatments/treatments';
import './carousel.css';

const TreatmentsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); // Default to 3 slides

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 600) {
        setVisibleSlides(1); // 1 slide for small screens
      } else if (window.innerWidth < 900) {
        setVisibleSlides(2); // 2 slides for medium screens
      } else {
        setVisibleSlides(3); // 3 slides for large screens
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);

    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const totalSlides = treatments.length;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const getVisibleSlides = () => {
    let slides = [];
    for (let i = 0; i < visibleSlides; i++) {
      slides.push(treatments[(currentIndex + i) % totalSlides]);
    }
    return slides;
  };

  return (
    <div className="carousel-container">
      <h2>Our Treatments</h2>
      <div className="carousel-scroll">
        {getVisibleSlides().map((treatment, index) => (
          <div className="treatment-slide" key={index}>
            <img src={treatment.imageUrl} alt={treatment.name} />
            <h3>{treatment.name}</h3>
            <p>{treatment.price}</p>
            <p>{treatment.description}</p>
            <Link to={treatment.servicePath} className="learn-more-button">Learn More</Link>
          </div>
        ))}
      </div>
     
        <button className="carousel-button carousel-button-left" onClick={handlePrevClick}>&lt;</button>
        <button className="carousel-button carousel-button-right" onClick={handleNextClick}>&gt;</button>
 
    </div>
  );
};

export default TreatmentsCarousel;

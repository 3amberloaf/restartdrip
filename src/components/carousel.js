import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import treatments from '../pages/treatments/treatments';
import '../css/carousel.css';

const TreatmentsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default number of visible slides

  // Function to update the number of visible slides based on window width
  const adjustVisibleSlides = () => {
    const width = window.innerWidth;
    if (width < 600) {
      setSlidesToShow(1);
    } else if (width < 900) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    // Initial call to set the correct number of slides
    adjustVisibleSlides();
    // Add event listener for window resize
    window.addEventListener('resize', adjustVisibleSlides);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', adjustVisibleSlides);
  }, []);

  const totalSlides = treatments.length;

  // Function to handle the previous button click
  const showPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Function to handle the next button click
  const showNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Function to get the current set of visible slides
  const renderVisibleSlides = () => {
    let slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      slides.push(treatments[(currentSlide + i) % totalSlides]);
    }
    return slides;
  };

  return (
    <div className="carousel-container">
      <h1>Signature Cocktails</h1>
      <div className="carousel-scroll">
        {renderVisibleSlides().map((treatment, index) => (
          <div className="treatment-slide" key={index}>
            <img src={treatment.imageUrl} alt={treatment.name} />
            <h3>{treatment.name}</h3>
            <p>{treatment.price}</p>
            <p>{treatment.description}</p>
            <Link to={treatment.servicePath} className="learn-more-button">BOOK NOW</Link>
          </div>
        ))}
      </div>
      <button className="carousel-button carousel-button-left" onClick={showPreviousSlide}>
        &lt;
      </button>
      <button className="carousel-button carousel-button-right" onClick={showNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default TreatmentsCarousel;

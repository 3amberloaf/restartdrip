import React from 'react';
import './steps.css';

const Steps = () => {
  const handleMouseOver = (event) => {
    const hoverImage = document.getElementById('hover-image');
    const imageType = event.currentTarget.getAttribute('data-hover');
    console.log(`Hovering over: ${imageType}`); // Log the hovered image type
    hoverImage.style.backgroundImage = `url(${imageType})`;
    hoverImage.style.display = 'block';
    const rect = event.currentTarget.getBoundingClientRect();
    hoverImage.style.top = `${rect.top + window.scrollY + rect.height}px`; // Position below the circle
    hoverImage.style.left = `${rect.left + window.scrollX}px`; // Align horizontally with the circle
  };

  const handleMouseOut = () => {
    const hoverImage = document.getElementById('hover-image');
    hoverImage.style.display = 'none';
  };

  return (
    <div className="background">
      <h1 className="title">HOW IT WORKS</h1>
      <div className="circle-container">
        <div className="circle" data-hover="/images/homepage/email.png" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>RESTART</p>
          <p>STEP 1</p>
        </div>
        <div className="circle" data-hover="/images/homepage/appointment.png" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>DRIP</p>
          <p>STEP 2</p>
        </div>
        <div className="circle" data-hover="/images/homepage/fit.png" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>IV</p>
          <p>STEP 3</p>
        </div>
        <div className="circle" data-hover="/images/homepage/founder.png" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>THERAPY</p>
          <p>STEP 4</p>
        </div>
        <div id="hover-image"></div>
      </div>
    </div>
  );
};

export default Steps;

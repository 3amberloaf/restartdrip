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
    hoverImage.style.top = `${rect.top + window.scrollY}px`; // Position aligned vertically with the circle
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
        <div className="circle" data-hover="/restartdrip/public/images/homepage/email.png" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>RESTART</p>

        </div>
        <div className="circle" data-hover="/restartdrip/public/images/homepage/appointment.png" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>DRIP</p>

        </div>
        <div className="circle" data-hover="/restartdrip/public/images/homepage/fit.png" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>IV</p>

        </div>
        <div className="circle" data-hover="/restartdrip/public/images/homepage/founder.png" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>THERAPY</p>

        </div>
        <div id="hover-image"></div>
      </div>
    </div>
  );
};

export default Steps;

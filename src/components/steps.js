import React from 'react';
import './steps.css';

const Steps = () => {
  const handleMouseOver = (event) => {
    const hoverImage = event.currentTarget.querySelector('.hover-image');
    hoverImage.style.display = 'block';
  };

  const handleMouseOut = (event) => {
    const hoverImage = event.currentTarget.querySelector('.hover-image');
    hoverImage.style.display = 'none';
  };

  return (
    <div className="background">
     
      <h1 className="title">HOW IT WORKS</h1>
      <div className="circle-container">
        <div className="circle" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>RESTART</p>
          <div className="hover-image" style={{ backgroundImage: `url(../images/homepage/email.png)` }}></div>
        </div>
        <div className="circle" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>DRIP</p>
          <div className="hover-image" style={{ backgroundImage: `url(../images/services/beauty.png)` }}></div>
        </div>
        <div className="circle" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>IV</p>
          <div className="hover-image" style={{ backgroundImage: `url(../images/homepage/appointment.png)` }}></div>
        </div>
        <div className="circle" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <p>THERAPY</p>
          <div className="hover-image" style={{ backgroundImage: `url(../images/logo.png)` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Steps;

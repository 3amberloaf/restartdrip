import React, { useEffect } from 'react';
import '../css/introOffer.css';
import { Link } from 'react-router-dom';

const IntroOffer = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".intro-offer h1, .intro-offer h3");

    const elementInView = (element, offset = 0) => {
      const elementTop = element.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    };

    const displayScrollElement = (element) => {
      element.classList.add('visible-text');
    };

    const hideScrollElement = (element) => {
      element.classList.remove('visible-text');
    };

    const handleScrollAnimation = () => {
      elements.forEach((el) => {
        if (elementInView(el, 100)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    handleScrollAnimation();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div>
      <div className="intro-offer">
        <div className="intro-offer-header">
          <h1 className="hidden-text">New Client Intro Offers</h1>
        </div>
        <h3 className="hidden-text">Lower The Cost of IV Therapy With One of Our Special Intro Offers!</h3>
        <p>Restart Drip is best-known for our unique menu of vitamin-infused IV therapy cocktails. All of our signature IV drips have 1 liter of saline paired with a blend of vitamins and nutrients. For an extra boost, many Restart Drip clients love to add an extra half or full bag of fluids to the end of their visit as well.</p>
        <p>We also offer vitamin injections, which are great quick pick-me-up options if you’re short on time but still need a healthy boost to get through your day. We have 4 different vitamin shots to choose from: B12, B Complex, glutathione, and NAD+. <a href="/injections">Click here</a> to learn more about each injection.</p>
        <p>Interested in adding IV therapy, vitamin injections, or NAD+ IV therapy to your wellness routine, but aren’t quite sure where to start? Scroll below to view each of our new client intro offers!</p>

        <div className="intro-offer-options">
          <div className="offer-buttons">
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">10% Off New Customers</button>
            </Link>
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">10% Off Athletes</button>
            </Link>
         
          </div>
        </div>
      </div>
      <div className="homepage">
        <div className="waves">
          <h1>Thirsty?</h1>
          <div className="waves-buttons">
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">BOOK NOW</button>
            </Link>
          </div>
          <img src="/images/homepage/waves.png" alt="waves" />
        </div>
      </div>
    </div>
  );
};

export default IntroOffer;

import React from 'react';
import '../css/introOffer.css';
import { Link } from 'react-router-dom';

const IntroOffer = () => {
  return (
    <div>
      <div className="intro-offer">
        <div className="intro-offer-header">
          <h1>New Client Intro Offers</h1>
        </div>
        <h3>Lower The Cost of IV Therapy With One of Our Special Intro Offers!</h3>
        <p>Restart Drip is best-known for our spa’s menu of vitamin-infused IV therapy cocktails. All of our signature IV drips have 1 liter of saline paired with a blend of vitamins and nutrients. If any of our signature IV cocktails aren’t quite what you’re looking for, you can build your own IV drip! For an extra boost, many Restart Drip clients love to add an extra half or full bag of fluids to the end of their visit as well.</p>
        <p>We also offer vitamin injections, which are great quick pick-me-up options if you’re short on time but still need a healthy boost to get through your day. We have seven different vitamin shots to choose from: b12, MIC, D3, Tri-Immune, L-lysine, Amino Acids, and NAD+. Click here to learn more about each injection.</p>
        <p>Interested in adding IV therapy, vitamin injections, or NAD+ IV therapy to your wellness routine, but aren’t quite sure where to start? Scroll below to view each of our new client intro offers — some of our most popular services at discounted prices!</p>
        <p>NAD+ IV therapy is available at all of our Restart Drip spas. NAD+ (also known as nicotinamide adenine dinucleotide) is a coenzyme found in all living cells: it promotes cell regeneration, and can be beneficial for clients experiencing joint and muscle pain, stimulating sirtuins (proteins), which have anti-inflammatory properties, stabilizing hormones, improving mood, and increasing metabolism. NAD+ IV therapy can also be beneficial for better sleep, mental clarity, focus, energy, and the regulation of dopamine and serotonin levels. Click here to learn more about NAD+ IV therapy, and for our pricing.</p>
        <div className="intro-offer-options">
          <div className="offer-buttons">
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">20% Off New Customers</button>
            </Link>
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">Free B12 Injection</button>
            </Link>
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">$119 Immunity IV Cocktail</button>
            </Link>
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">50% Off NAD+ Injection</button>
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

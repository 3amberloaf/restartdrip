import React from 'react';
import './services.css';

const dehydration = () => {
    return (
        <div className="container">
          <div className="image-container">
            <img src="https://via.placeholder.com/400x300" alt="Recovery IV" /> {/* Replace with the actual image path */}
          </div>
          <div className="content-container">
            <h1>RECOVERY IV</h1>
            <h2>b-complex, magnesium, b6</h2>
            <p>
              Formerly known as our Hangover IV Drip. While we don’t condone the overconsumption of alcohol, we do know it happens. If you’re struggling the next morning, don’t let it ruin your entire day. This IV therapy cocktail is great for recovery of all kinds, from hangovers to high-altitude. Many clients reach for our Recovery IV drip when they have a headache, nausea, or the overall “fogginess” that comes from general dehydration.
            </p>
            <p>Enjoy tonight, we have tomorrow covered.</p>
            <div className="button-container">
              <button className="book-now">CHOOSE YOUR SPA TO BOOK</button>
            </div>
          </div>
        </div>
      );
    };

export default dehydration;

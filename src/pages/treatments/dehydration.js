import React from 'react';
import '../../css/treatments.css';

const Dehydration = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src="../images/services/dehydrated.png" alt="Dehydration IV" /> {/* Replace with the actual image path */}
      </div>
      <div className="content-container">
        <h1>DEHYDRATION IV</h1>
        <h2>b-complex, magnesium, b6</h2>
        <p>
          Rehydrate and replenish your body with IV fluids. This IV therapy cocktail is great for recovery from dehydration due to illness, travel, or strenuous activity.
        </p>
        <p>Enjoy better hydration and well-being.</p>
        <div className="button-container">
          <button className="book-now">Book Here</button>
        </div>
      </div>

      <div className="main-container">
        <div className="ingredient-wrapper">
          <div className="ingredient-container">
            <img src="../images/services/smile.png" alt="B-COMPLEX" />
            <h1>B-COMPLEX</h1>
            <h3><i>for mood regulation, and healthy hair, skin + nails</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="MAGNESIUM" />
            <h1>MAGNESIUM</h1>
            <h3><i>for nerve and muscle function, mood, natural relaxant</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="B6" /> {/* Replace with the actual image path */}
            <h1>B6</h1>
            <h3><i>for metabolism and the creation of red blood cells</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
        Additional Information
      </div>

      <div className="additional-info">
        <h2>Dehydration Symptoms</h2>
        <p>A few of the more unpleasant symptoms of a hangover can include:</p>
        <ul>
          <li>Dehydration</li>
          <li>Nausea and vomiting</li>
          <li>Headache and aching muscles</li>
          <li>Dizziness</li>
          <li>Weakness and shakiness</li>
          <li>Irritability</li>
        </ul>
        <h2>Hangover IV Therapy Help</h2>
        <p>
          One of the main symptoms (and causes) of a hangover is dehydration. Alcohol suppresses the hormone known as vasopressin, which controls water loss in your body. The more alcohol you drink, the more you urinate, and the more dehydrated you become. According to Dr. Gary Murray from the National Institute on Alcohol Abuse and Alcoholism, “Alcohol is a diuretic, so you end up losing water. And the dehydration effect is probably the most severe contributor to hangover.”
        </p>
        <p>
          The unpleasant symptoms of a hangover can last as long as 24 hours (though for others it can feel longer). That’s a long time to endure such misery! Fortunately, there is help at hand with Hydrate IV Bar. As we like to say, “Don’t wait, hydrate!” IV therapy for hangovers can help to rehydrate your body to get you feeling better quickly. Our special IV Hydration drip for hangovers, the Recovery IV, was developed by our team of medical and wellness professionals. The Recovery IV includes normal saline, b-complex, vitamin b6, and magnesium to aid in relieving pain and nausea. This combination of vitamins can help to relieve the awful feeling of a hangover and get you feeling better quickly.
        </p>
        <h2>Why Choose Us for IV Hydration?</h2>
        <p>
          When you’re in need of liquid IV therapy for a hangover or recovery of any kinds in Denver, Colorado, look no further than Hydrate IV Bar. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast! A registered nurse will administer your Recovery IV drip in one of our eight comfortable and relaxing IV spas — located throughout Denver, Boulder, Fort Collins, Arizona, or Dallas, Texas.
        </p>
        <p>
          Simply choose one of our Hydrate IV Bar locations closest to you to book an appointment for IV hydration for hangovers online, and then sit back, relax, rehydrate, and recover from the debilitating effects of your overindulgence.
        </p>
      </div>
    </div>
  );
};

export default Dehydration;

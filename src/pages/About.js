import React from 'react';
import '../css/about.css';
import IVTherapy from '../components/Infographics';

const About = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Restart Drip</h1>
          <p>Dedicated to delivering exceptional in-home IV therapy and medical services.</p>
        </div>
      </section>
      
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          At Restart Drip, our mission is to empower individuals to achieve optimal health and well-being through personalized IV hydration therapy. As a woman-owned business, we are committed to delivering exceptional care with a focus on integrity, compassion, and excellence. We strive to create a supportive and welcoming environment where our clients can rejuvenate and thrive. Our goal is to inspire and uplift our community by promoting wellness from within, fostering a culture of health, and making a positive impact on the lives we touch.
        </p>
          <div className="nurse-image">
            <img src="images/about/nurse.png" alt="About" />
          </div>
      </section>

      <div className="our-founder">
        <h2>Meet Our Founder</h2>
        <div className="founder">
          <img src="images/homepage/founder.png" alt="Founder" className="founder-image" />
          <div className="founder-info">
            <h3>Woodline Paul, BSN, RN</h3>
            <p>
              Woodline Paul founded Restart Drip to offer a way for people to prioritize their health without sacrificing comfort or convenience.
            </p>
            <p>
              With extensive experience as an emergency department nurse, she saw firsthand the need for accessible wellness solutions for everyone. Her passion for helping others reclaim their health drove her to launch Restart Drip, bringing the healing power of hydration directly to her clients' doorsteps.
            </p>
          </div>
        </div>

      </div>

             <IVTherapy />
      
    </div>
  );
};

export default About;

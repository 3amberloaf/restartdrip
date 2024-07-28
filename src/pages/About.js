import React from 'react';
import '../css/about.css';
import Reviews from '../components/reviews';

const About = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Restart Drip</h1>
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

      <div className="hashtag">
        <div className="hashtag-header">
          <h1> WE ARE <span style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#6aade5' }}>#TEAMRESTARTYOURDRIP </span> </h1>
        <div className="hashtag-info">
          <img src="/images/random/woman.jpg" alt="woman"/>
          <div className="hashtag-text">
          <h3>Under the direction of doctors and medical providers with more than 30 years of experience, all of our services are administered by experienced and friendly registered nurses. When our nurses aren’t serving you in our hydration spas, many of them are working in healthcare across the industry — delivering babies, caring for patients, assisting on major surgeries and more.</h3>
          <h3>We take great pride in the team we’ve built within the Hydrate IV Bar Collective. While medical skills and professionalism are obvious non-negotiables, we also look for teammates who exemplify our core values — wellness, community, teamwork, kindness, service, and fun. </h3>
          <h3>When you visit any of our IV therapy spas, you can relax with the assurance that you’re in expert care. At Hydrate IV Bar, our facilities are supervised by a distinguished medical team, including award-winning doctors, nurse practitioners, and healthcare professionals. All our services are delivered by top-tier registered nurses. Moreover, we are committed to using only premium, pharmaceutical-grade vitamins sourced from reliable and well-regarded pharmacies.</h3>
          </div>
        </div>
        </div>
      </div>

    <Reviews />             
      
    </div>
  );
};

export default About;

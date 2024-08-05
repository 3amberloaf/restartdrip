import React, { useEffect, useState } from 'react';
import '../css/injections.css';
import injections from './injections/injections_card';
import InjectionCard from './injections/different_injections';


const Injections = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".injections-benefits-section li, .injections-benefits-section p, .injections-benefits-section h1, .injections-benefits-section h4, .injections-benefits-section ul, .injections-IV-services"
    );

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
      <div className="injections-IV-services hidden-text">
        <div className="injections-services-text">
          <img src='/images/random/ivbag.png' alt='iv-bag' />
          <div className="injections-text-content">
            <h1>Restart Drip</h1>
            <h3>Vitamin Injections</h3>
          </div>
        </div>
        <h3>Find the perfect vitamin injection for you</h3>
        <p>
        Don't let the name mislead you—Restart Drip offers more than just IV therapy! Many clients seek us out for our vitamin injections, whether they combine them with an IV treatment or come in for a quick standalone shot. We currently provide B12, Vitamin B complex, and glutathione injections, with new options on the horizon. Discover more about our vitamin injections and book your appointment now!
        </p>
   
        <h3>Book your appointment today!</h3>

      </div>
      <div className='injections-services'>
        <h1>Signature Shots</h1>
      </div>
      <div className="treatment-container">
        {injections.map((treatment, index) => (
          <InjectionCard key={index} {...treatment} />
        ))}
      </div>
      <div className="injections-benefits-section">
        <h1 className="hidden-text">WHAT ARE THE BENEFITS OF GETTING VITAMIN INJECTIONS?</h1>
        <p className="hidden-text">Vitamins play a crucial role in maintaining overall health. While they can be obtained from food, oral supplements, or injections, the absorption process of vitamins through food and oral supplements is slowed down by the digestive system. Therefore, we recommend vitamin injections for the following reasons.</p>
        <h4 className="hidden-text">HIGHER ABSORPTION EFFICIENCY</h4>
        <p className="hidden-text">Vitamin shots bypass the digestive system, delivering essential nutrients directly into the bloodstream. This direct delivery method enhances absorption efficiency, providing immediate benefits. The health benefits of vitamins are realized only when a specific amount is absorbed. Unlike food, where the exact vitamin content can be uncertain, an injection ensures you receive the precise amount needed for optimal health. </p>
        <h4 className="hidden-text">CAN BE TAILORED TO MEET SPECIFIC NEEDS</h4>
        <p className="hidden-text">Most vitamin injections are pre-formulated, meaning they have specific benefits for the body. While we have our signature shots, we can customize an injection session to address particular needs. You can book a vitamin injection for:</p>
        <ul className="hidden-text">
          <li>Anxiety and stress relief</li>
          <li>Enhance energy and stamina</li>
          <li>Enhanced immune system and gastrointestinal support</li>
          <li>Reduce inflammation</li>
        </ul>
        <img src="../images/homepage/droplet.png" alt="droplet" />
      </div>
      <div className='injections-FAQ'>
        <h1>VITAMIN INJECTION FAQS</h1>
        <p>To improve your understanding of the process, please review the following commmonly asked questions.</p>
        <div className="injections-FAQ-section">
          <div className="faq-list">
            {['howOftenShouldIGetVitaminInjections?', 'howDoIFeelAfterAVitaminInfusion?', 'howLongDoesItLast?'].map(section => (
              <div key={section}>
                <button className="injections-faq-button" onClick={() => toggleSection(section)}>
                  {section.split(/(?=[A-Z])/).join(" ").toUpperCase()}
                  <span className={`icon ${activeSection === section ? 'open' : ''}`}>&#9660;</span>
                </button>
                {activeSection === section && (
                  <div className="injections-faq-content">
                    {section === 'howOftenShouldIGetVitaminInjections?' && (
                      <p>
                The frequency of your vitamin shots will depend on your personalized therapy plan. However, regular injections are generally recommended for optimal results.
                      </p>
                    )}
                    {section === 'howDoIFeelAfterAVitaminInfusion?' && (
                      <p>
                       Vitamin injections are virtually painless, allowing you to experience zero downtime. You can easily schedule a session during your lunch break and return to work as if nothing happened. Additionally, you will feel rejuvenated and focused after receiving a vitamin shot.
                      </p>
                    )}
                    {section === 'howLongDoesItLast?' && (
                      <p>
                        Concerned about spending an entire day getting a shot? Put your worries aside. Our sessions, including consultation and injection, take just minutes.
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Injections;

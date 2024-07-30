import React, { useEffect, useState } from 'react';
import '../css/IVTherapy.css';

const IVTherapy = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    useEffect(() => {
        const elements = document.querySelectorAll(".additional-info p, .additional-info li, .additional-info ul, .additional-info h1");
    
        const elementInView = (element, offset = 0) => {
          const elementTop = element.getBoundingClientRect().top;
          return (
            elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
          );
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
  
        <div className="iv-therapy">
            <div className='iv-therapy-header'>
                <h1>IV THERAPY & INJECTION SERVICES</h1>
            </div>
        <div className="iv-therapy-container">
            <div className="iv-therapy-image-text">
                <h3>RELAX - RECHARGE - REHYDRATE</h3>
                <p>
                New to IV therapy? At Restart Drip, we will help you <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>RESTART</span> your life at 100%!
            </p>
                <img src="./images/homepage/iv_homepage.png" alt="Restart Drip" className="iv-therapy-image" />
            </div>
            <div className="iv-therapy-section">
                <div className="service-list">
                    {['whatIsIt?', 'whatAreTheBenefits?', 'howDoesItWork?', 'whoCanBenefit?', 'whatShouldIExpect?', 'learnMore!'].map(section => (
                        <div key={section}>
                            <button className="service-button" onClick={() => toggleSection(section)}>
                                {section.split(/(?=[A-Z])/).join(" ").toUpperCase()}
                                <span className={`icon ${activeSection === section ? 'open' : ''}`}>&#9660;</span>
                            </button>
                            {activeSection === section && (
                                <div className="service-content">
                                    {section === 'whatIsIt?' && (
                                        <p>
                                            Intravenous (IV) therapy involves delivering fluids, vitamins, minerals, and other nutrients directly into the bloodstream through a vein. It's a medical treatment commonly used to rehydrate the body, replenish essential nutrients, and address various health concerns.
                                        </p>
                                    )}
                                    {section === 'whatAreTheBenefits?' && (
                                        <p>
                                            IV therapy offers several benefits, including:
                                            <ul>
                                                <li>Rapid hydration.</li>
                                                <li>Nutrient replenishment.</li>
                                                <li>Boosted energy and immune function: helps improve energy levels, enhance immune function, and promote overall well-being.</li>
                                                <li>Targeted therapy: can be customized with specific nutrients to address individual health needs, such as vitamin deficiencies, fatigue, hangovers, and jet lag.</li>
                                            </ul>
                                        </p>
                                    )}
                                    {section === 'howDoesItWork?' && (
                                        <p>
                                            During IV therapy, a healthcare professional inserts a thin needle into a vein, typically in the arm, and connects it to a tube attached to a bag containing the desired fluids and nutrients. The infusion rate is controlled to ensure a steady flow of the solution into the bloodstream. This allows for quick absorption and utilization of the nutrients by the body. Sessions typically last 45 minutes to 1 hour.
                                        </p>
                                    )}
                                    {section === 'whatShouldIExpect?' && (
                                        <p>
                                            <ul>
                                                <li>Consultation: Before the treatment, you'll have a consultation with a healthcare provider to discuss your health goals and any concerns.</li>
                                                <li>Treatment session: During the IV therapy session, you'll relax in a comfortable setting while the IV is administered.</li>
                                                <li>Duration: IV therapy sessions typically last between 30 minutes to an hour, depending on the type of treatment and your individual needs.</li>
                                                <li>Aftercare: After the treatment, you may experience increased hydration, improved energy levels, and other immediate effects.</li>
                                            </ul>
                                        </p>
                                    )}
                                    {section === 'whoCanBenefit?' && (
                                        <p>
                                            Athletes, those recovering from illness, jet-setters, and anyone needing an extra wellness boost.
                                        </p>
                                    )}
                                    {section === 'learnMore!' && (
                                        <p>
                                            Learn more about the many benefits of IV Therapy by booking a free consultation below.
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

export default IVTherapy;

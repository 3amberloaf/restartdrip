import React, { useEffect, useState } from 'react';
import '../css/injections.css';
import injections from './injections/injections_card';
import TreatmentCard from './treatments/treatment_card';

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
          Don’t be fooled by the name, it’s not only about the IVs at Restart Drip! Many clients come to us for our vitamin injections, whether they add them to an IV service or simply pop-in for a quick shot. Restart Drip offers vitamin IV therapies for everything from B12 injections to vitamin D3 injections and more! Learn more about our vitamin injections and schedule an appointment near you at any of our locations. You can also call today to book an appointment near you.
        </p>
        <p>
          We have seven shots to choose from at our Restart Drip spas — B12 injections, MIC injections, D3 injections, Tri-Immune injections, and our newest additions, the NAD+ injection, L-lysine injection, and the Amino Acid injection! Our staff can consult with you on which injection(s) may be best for you. Injection packages and our Shot Pass are available for those who want to add routine injections to their health and wellness regime.
        </p>
        <p>
          Restart Drip’s relaxing atmosphere may feel like your favorite spa, but we take IV safety very seriously! All of our services — from IVs to injections — are administered by experienced, registered nurses. The only thing more comforting than kicking back in our big recliners is the reassurance of knowing that you’re in good hands with our incredible staff.
        </p>
        <h3>Book your appointment today!</h3>

      </div>
      <div className='injections-services'>
        <h1>Signature Shots</h1>
      </div>
      <div className="treatment-container">
        {injections.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>
      <div className="injections-benefits-section">
        <h1 className="hidden-text">WHAT ARE THE BENEFITS OF GETTING VITAMIN INJECTIONS?</h1>
        <p className="hidden-text">Vitamins are essential for overall health. You can get your vitamins from food, oral supplements, or injections. However, food and oral supplements pass through the digestive system, slowing the absorption process. For the following reasons, we recommend vitamin injections.</p>
        <h4 className="hidden-text">HIGHER ABSORPTION EFFICIENCY</h4>
        <p className="hidden-text">Vitamin shots bypass the digestive system to deliver essential nutrients directly into the bloodstream. This direct delivery enhances absorption efficiency, providing immediate benefits. The health benefits of vitamins are only realized when a specific amount is absorbed. While you may not know the amount of vitamins in food, an injection provides the right amount. Moreover, you only stop by our spa for a quick shot instead of ingesting supplementary pills daily.</p>
        <h4 className="hidden-text">CAN BE TAILORED TO MEET SPECIFIC NEEDS</h4>
        <p className="hidden-text">Most vitamin injections are pre-formulated, meaning they have specific benefits for the body. While we have our signature shots, we can customize an injection session to address particular needs. You can book a vitamin injection for:</p>
        <ul className="hidden-text">
          <li>Anxiety and stress relief</li>
          <li>Enhance energy and stamina</li>
          <li>Enhanced immune system and gastrointestinal support</li>
          <li>Reduce inflammation</li>
        </ul>
        <img src="../images/homepage/droplet.png" alt="Company Logo" />
      </div>
      <div className='injections-FAQ'>
        <h1>VITAMIN INJECTION FAQS</h1>
        <p>Restart Drip has provided vitamin injections for years. Our interaction with various clients has helped us compile a list of frequently asked questions and their answers to help you make an informed decision. Take a look;</p>
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
                        The frequency of your vitamin shots depends on your therapy plan. However, regular injections are recommended.
                      </p>
                    )}
                    {section === 'howDoIFeelAfterAVitaminInfusion?' && (
                      <p>
                        Vitamin injections are virtually painless, meaning you experience zero downtimes. You can schedule your session over a lunch break and resume work like nothing happened. Moreover, you feel rejuvenated and focused after a vitamin shot.
                      </p>
                    )}
                    {section === 'howLongDoesItLast?' && (
                      <p>
                        Are you worried about spending the whole day in our spa? Discard your worries. Our sessions, including consultation and injection, take minutes.
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

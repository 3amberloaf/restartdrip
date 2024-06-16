import React, { useState } from 'react';
import './components.css';

const IVTherapy = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="iv-therapy-container">
            <div className="iv-therapy-image-text">
                <h3>RELAX - RECHARGE - REHYDRATE</h3>
                <p>
                    New to IV therapy? At Restart Drip, we are here to make YOU restart your life at 100%!
                </p>
                <img src="./images/homepage/woodline.png" alt="Hydrate IV Bar" className="iv-therapy-image" />
            </div>
            <div className="iv-therapy-section">
                <div className="service-list">
                    {['whatIsIt', 'whatAreTheBenefits', 'howDoesItWork', 'whoCanBenefit', 'whatShouldIExpect', 'learnMore'].map(section => (
                        <div key={section}>
                            <button className="service-button" onClick={() => toggleSection(section)}>
                                {section.split(/(?=[A-Z])/).join(" ").toUpperCase()}
                                <span className={`icon ${activeSection === section ? 'open' : ''}`}>&#9660;</span>
                            </button>
                            {activeSection === section && (
                                <div className="service-content">
                                    {section === 'whatIsIt' && (
                                        <p>
                                            Intravenous (IV) therapy involves delivering fluids, vitamins, minerals, and other nutrients directly into the bloodstream through a vein. It's a medical treatment commonly used to rehydrate the body, replenish essential nutrients, and address various health concerns.
                                        </p>
                                    )}
                                    {section === 'whatAreTheBenefits' && (
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
                                    {section === 'howDoesItWork' && (
                                        <p>
                                            During IV therapy, a healthcare professional inserts a thin needle into a vein, typically in the arm, and connects it to a tube attached to a bag containing the desired fluids and nutrients. The infusion rate is controlled to ensure a steady flow of the solution into the bloodstream. This allows for quick absorption and utilization of the nutrients by the body. Sessions typically last 45 minutes to 1 hour.
                                        </p>
                                    )}
                                    {section === 'whatShouldIExpect' && (
                                        <p>
                                            <ul>
                                                <li>Consultation: Before the treatment, you'll have a consultation with a healthcare provider to discuss your health goals and any concerns.</li>
                                                <li>Treatment session: During the IV therapy session, you'll relax in a comfortable setting while the IV is administered.</li>
                                                <li>Duration: IV therapy sessions typically last between 30 minutes to an hour, depending on the type of treatment and your individual needs.</li>
                                                <li>Aftercare: After the treatment, you may experience increased hydration, improved energy levels, and other immediate effects.</li>
                                            </ul>
                                        </p>
                                    )}
                                    {section === 'whoCanBenefit' && (
                                        <p>
                                            Athletes, those recovering from illness, jet-setters, and anyone needing an extra wellness boost.
                                        </p>
                                    )}
                                    {section === 'learnMore' && (
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
    );
};

export default IVTherapy;

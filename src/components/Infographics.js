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
                <h2>IV THERAPY & INJECTION SERVICES</h2>
                <h3>RELAX, RECHARGE, REHYDRATE.</h3>
                <p>
                    Prioritize your health and wellness with our IV therapy, vitamin injection, and NAD+ services. We offer memberships and bundles to make putting your hydration and health first, that much easier. Click on each item to learn more.
                </p>
                <img src="./images/homepage/woodline.png" alt="Hydrate IV Bar" className="iv-therapy-image" />
            </div>
            <div className="iv-therapy-section">
                <div className="service-list">
                    {['ivTherapy', 'vitaminInjections', 'nadTherapy', 'membership', 'shotPass'].map(section => (
                        <div key={section}>
                            <button className="service-button" onClick={() => toggleSection(section)}>
                                {section.split(/(?=[A-Z])/).join(" ").toUpperCase()}
                                <span className={`icon ${activeSection === section ? 'open' : ''}`}>&#9660;</span>
                            </button>
                            {activeSection === section && (
                                <div className="service-content">
                                    {section === 'ivTherapy' && <p>IV therapy provides rapid and effective hydration, helping you recover from dehydration quickly and efficiently.</p>}
                                    {section === 'vitaminInjections' && <p>Receive essential vitamins and nutrients directly into your bloodstream for maximum absorption and benefits.</p>}
                                    {section === 'nadTherapy' && <p>NAD+ therapy helps with cellular regeneration, cognitive function, and overall vitality.</p>}
                                    {section === 'membership' && <p>Our membership options offer convenient and affordable access to regular IV therapy sessions.</p>}
                                    {section === 'shotPass' && <p>Get quick and efficient nutrient boosts with our shot pass options.</p>}
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

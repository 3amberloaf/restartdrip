import { useEffect } from 'react';
import '../css/specialty.css';

const NAD = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".IV-services h3, .IV-services p"
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
      <div className="IV-services">
        <div className="services-text">
          <img src='/images/random/ivbag.png' alt='iv-bag' />
          <div className="text-content">
            <h1>Restart Drip</h1>
            <h4>Specialty IV Therapy</h4>
          </div>
        </div>
        <h3 className="hidden-text">WHAT IS NAD+?</h3>
        <p className="hidden-text">NAD+ IV therapy is becoming the therapy of choice for people seeking to improve their energy levels, enhance mental and physical fitness, or slow the aging process. Restart Drip offers the NAD+ IV therapy regimen in comfortable facilities under the care of registered nurses. Contact us today to learn more about NAD+ IV therapy services in the New Jersey area.</p>
        <p className="hidden-text">Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in all living cells. It is essentially vitamin B3 broken down into its most usable form, and when infused, it goes directly to your cells, creating energy at the cellular level. Between the ages of 40 – 60, we have 50% less NAD+ in our bodies. This means that when your cells break down, your body cannot repair them like it used to.</p>
        <h3 className="hidden-text">WHAT BODILY FUNCTIONS DOES NAD+ HELP?</h3>
        <p className="hidden-text">NAD+ helps your body rebuild and repair cells. NAD+ promotes cell regeneration and can be beneficial for clients experiencing joint and muscle pain, stimulating sirtuins (proteins) that have anti-inflammatory properties, stabilizing hormones, improving mood, and increasing metabolism. NAD+ IV therapy can also be beneficial for better sleep, mental clarity, focus, energy, and the regulation of dopamine and serotonin levels.</p>
        <h3 className="hidden-text">UNDERSTANDING NAD+ IV THERAPY</h3>
        <p className="hidden-text">Intravenous (IV) therapy is a method of administering vitamin and supplement infusions directly into a vein. IV infusions can be done in a healthcare facility or spas such as Restart Drip. At our spas, infusions and injections are overseen by an experienced, registered nurse. But why choose NAD IV therapy over other forms of introducing this powerful coenzyme into your body?</p>
        <p className="hidden-text">While several NAD+ administration methods exist, IV infusing is the only guarantee of getting 100% bioavailability from the molecule. IV therapy ensures your body absorbs the highest possible amounts of the coenzyme, giving you maximum benefits.</p>
        <p className="hidden-text">Other administration methods, such as oral supplements, take longer to produce visible results. It is also harder to guarantee results since NAD+ is poorly absorbed through the digestive system. Moreover, oral supplements may cause undesired side effects such as diarrhea, cramping, and nausea. IV therapy is, therefore, the safest and most effective method of boosting NAD+ levels in your body. Its effectiveness has led to an exponential growth of NAD+ uses in the cosmetic and medical fields.</p>
        <h3 className="hidden-text">BENEFITS OF NAD+ THERAPY</h3>
        <p className="hidden-text">More and more people are choosing NAD+ therapy to improve their physical and mental well-being. The increased popularity shows that people are now open to alternative ways of improving their wellness from within. Your NAD+ IV therapy at Hydrate can help in the following ways:</p>
        <div className='options'>
          <h3>CELL REGENERATION</h3>
          <h4>Your body naturally produces NAD+, which repairs and restores damaged cells to enhance tissue functionality. However, NAD+ levels decline with age, meaning the body cannot repair cells as it used to when you were younger. Boosting NAD+ levels rejuvenates your body’s cell regeneration ability, keeping you healthy and youthful.</h4>
          <h3>INCREASED METABOLISM</h3>
          <h4>Your metabolism is the process where your body breaks down food and vitamins, allowing energy and materials needed to maintain life in living cells. NAD+ aids in boosting your metabolism, giving you the energy to perform physical and mental activities, and helping you feel youthful and energetic.</h4>
          <h3>REDUCED JOINT & MUSCLE PAIN</h3>
          <h4>NAD+ reduces inflammation, which helps to manage joint and muscle pain. When your NAD+ levels decline, you may suffer more joint and muscle pains as you age. Boosting your NAD+ levels can reduce these pains.</h4>
          <h3>IMPROVED SLEEP</h3>
          <h4>Your quality of sleep depends on your physical and mental well-being. NAD+ IV therapy can enhance your mental and physical wellness to improve your sleep.</h4>
          <h3>MENTAL CLARITY & FOCUS</h3>
          <h4>NAD+ repairs and reactivates neurons and regenerates brain cells to improve your mental clarity and focus. Brain cell regeneration can also delay or prevent age-related cognitive decline.</h4>
        </div>
      </div>
      <div className="benefits-section">
        <h1>NAD+ Injection</h1>
        <h3>Injection Price - $80</h3>
        <p>NAD+ (a.k.a. nicotinamide adenine dinucleotide) promotes cell regeneration, + can aid with: clients experiencing joint + muscle pain, better sleep, mental clarity, + energy. Great substitute for an NAD+ infusion when you’re short on time.</p>
        <h4>RELAX, RECHARGE, & REHYDRATE WITH RESTART DRIP</h4>
      </div>
      <div className="benefits-section">
        <img src='/images/homepage/droplet.png' alt='droplet' />
        <div className="pricing">
          <div className="header">
            <h1>NAD+ IV THERAPY</h1>
            <h3>DOSAGE AND PRICING</h3>
          </div>
          <div className="pricing-info">
            <h3>– 500MG NAD IV Therapy: $400 for Hydrate members / $450 for non-members</h3>
            <h3>– 750MG NAD IV Therapy: $500 for Hydrate members / $550 for non-members</h3>
            <h3>– 1000MG NAD IV Therapy: $750 for Hydrate members / $850 for non-members</h3>
            <h4>Please email iv@restartdrip.com to speak with our staff about NAD+ loading dose packages and pricing.</h4>
          </div>
        </div>
        <div className="images-container">
          <div className="images">
            <div className="cell">
              <img src="/images/services/cell.png" alt="cell" />
              <p> Cell Regeneration</p>
            </div>
            <div className="metabolism">
              <img src="/images/services/metabolism.png" alt="metabolism" />
              <p> Increased Metabolism</p>
            </div>
            <div className="joint">
              <img src="/images/services/joint.png" alt="joint" />
              <p> Reduced Joint/Muscle Pain</p>
            </div>
            <div className="sleep">
              <img src="/images/services/sleep.png" alt="sleep" />
              <p> Improved Sleep</p>
            </div>
            <div className="clarity">
              <img src="/images/services/clarity.png" alt="clarity" />
              <p> Mental Clarity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NAD;

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
            <h4>Nad+ Therapy</h4>
          </div>
        </div>
        <h3 className="hidden-text">WHAT IS NAD+?</h3>
        <p className="hidden-text">NAD+ IV therapy is quickly becoming the preferred choice for individuals looking to boost their energy levels, enhance both mental and physical fitness, and slow the aging process. At Restart Drip, we offer NAD+ IV therapy in the comfort of your own home, administered by registered nurses. Contact us today to learn more about our NAD+ IV therapy services in the New Jersey area</p>
        <p className="hidden-text">Nicotinamide adenine dinucleotide (NAD+) is a coenzyme present in all living cells. It is essentially vitamin B3 in its most usable form. When infused, NAD+ goes directly to your cells, generating energy at the cellular level. By the time we reach the ages of 40 to 60, our bodies have 50% less NAD+. This decrease means that as your cells break down, your body cannot repair them as effectively as it once could.</p>
        <h3 className="hidden-text">WHAT BODILY FUNCTIONS DOES NAD+ HELP?</h3>
        <p className="hidden-text">NAD+ assists your body in rebuilding and repairing cells. It promotes cell regeneration and can be beneficial for clients experiencing joint and muscle pain by stimulating sirtuins, proteins with anti-inflammatory properties. Additionally, NAD+ helps stabilize hormones, improve mood, and increase metabolism. NAD+ IV therapy can also enhance sleep quality, mental clarity, focus, energy, and regulate dopamine and serotonin levels.</p>
        <h3 className="hidden-text">UNDERSTANDING NAD+ IV THERAPY</h3>
        <p className="hidden-text">Intravenous (IV) therapy is a method of administering vitamin and supplement infusions directly into a vein. IV infusions can be performed in a healthcare facility or even at your home when administered by qualified providers like Restart Drip. But why choose NAD+ IV therapy over other methods of introducing this powerful coenzyme into your body?</p>

<p className="hidden-text">While several NAD+ administration methods exist, IV infusion is the only way to ensure 100% bioavailability of the molecule. IV therapy guarantees that your body absorbs the highest possible amounts of the coenzyme, providing you with maximum benefits.</p>

<p className="hidden-text">Other administration methods, such as oral supplements, take longer to produce visible results. It is also harder to guarantee outcomes since NAD+ is poorly absorbed through the digestive system. Moreover, oral supplements may cause undesired side effects such as diarrhea, cramping, and nausea. Therefore, IV therapy is the safest and most effective method of boosting NAD+ levels in your body. Its effectiveness has led to exponential growth in NAD+ applications in both cosmetic and medical fields.</p>

<h3 className="hidden-text">BENEFITS OF NAD+ THERAPY</h3>

<p className="hidden-text">More and more people are choosing NAD+ therapy to enhance their physical and mental well-being. This increasing popularity indicates that individuals are now open to alternative ways of improving their wellness from within. Your NAD+ IV therapy at Hydrate can help in the following ways:</p>

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
      <div className="benefits-section">
        <div className="pricing">
          <div className="header">
            <h1>NAD+ IV THERAPY</h1>
            <h3>DOSAGE AND PRICING</h3>
          </div>
          <div className="pricing-info">
            <h3>– 500MG NAD IV Therapy: $800</h3>
            <h3>– 1000MG NAD IV Therapy: $1000</h3>
          </div>
        </div>

      </div>
      <div className="benefits-section">

      <div className="pricing">
        <div className="header">
        <h1>NAD+ Injection</h1>
        <h3>DOSAGE AND PRICING</h3>
        </div>
        <div className="pricing-info">
            <h3>– 500MG NAD IV Therapy: $700</h3>
            <h3>– 1000MG NAD IV Therapy: $900</h3>
            <h4>Please email iv@restartdrip.com to speak with our staff about NAD+ loading dose packages and pricing.</h4>
          </div>
        <p>NAD+ therapy can promote cell regeneration, aid  joint and muscle pain, improve sleep, provide mental clarity, and boost energy. The NAD+ injection is a great substitute for the NAD+ infusion when you’re short on time and need a quick jump start.</p>
        </div>
        <img src='/images/homepage/droplet.png' alt='droplet' />
      </div>

    </div>
  );
};

export default NAD;

import { useEffect, useState } from 'react';
import '../css/peptides.css';
import Steps from '../components/steps';
const Peptide = () => {

    const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
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
            <h4>Peptide Therapy</h4>
          </div>
        </div>
        <div className="peptide-info">
        <p className="hidden-text">Peptides are essential proteins that can be self-administered to replenish levels that naturally decline with age. These treatments offer numerous health benefits, including enhanced muscle and joint recovery, better sleep quality, improved immune function, and increased longevity. By incorporating peptide therapy into your routine, you can support your body's natural processes and promote overall well-being.</p>
        </div>
        <div className="Semaglutide">
        <h1> Semaglutide</h1>
        <p> Semaglutide is a medication that belongs to a class of drugs known as GLP-1 receptor agonists. It is primarily used to manage type 2 diabetes by enhancing the body's natural insulin secretion in response to elevated blood sugar levels. By mimicking the incretin hormone GLP-1, semaglutide not only helps in regulating blood glucose but also slows gastric emptying, which can lead to reduced appetite and better control over food intake. This makes it a valuable tool not just for diabetes management but also for weight loss in people with obesity, as it aids in reducing overall calorie consumption and promotes a feeling of satiety.</p>
        <p>The benefits of semaglutide extend beyond glycemic control and weight management. Clinical studies have shown that it significantly reduces the risk of major cardiovascular events such as heart attack and stroke in individuals with type 2 diabetes who have established cardiovascular disease. This makes it a dual-purpose medication, offering both metabolic and cardiovascular advantages. Additionally, semaglutide's ability to be administered once weekly via injection provides convenience and improves adherence compared to other medications that require more frequent dosing. Overall, semaglutide represents a powerful option in the treatment arsenal for obesity, with added benefits that support long-term health and quality of life.</p>
        </div>
        <Steps />

        <div className="pricing">
        <div className="header">
          <h1>PEPTIDE PRICING</h1>
          <h3>MONTHLY PRICING</h3>
        </div>
        <div className="pricing-info">
            <h3> $500 Monthly Fee</h3>
          </div>
        <div className="images-container">
          <div className="images">
         
            <div className="metabolism">
              <img src="/images/services/metabolism.png" alt="metabolism" />
              <p> Weight Management</p>
            </div>
            <div className="joint">
              <img src="/images/services/joint.png" alt="joint" />
              <p> Cardiovascular Health</p>
            </div>
           
            <div className="clarity">
              <img src="/images/services/clarity.png" alt="clarity" />
              <p> Quality of Life</p>
            </div>
          </div>
        </div>
        

      </div>
        
        <div className='injections-FAQ'>
        <h1>PEPTIDE FAQS</h1>
        <p>To improve your understanding of the process, please review the following commmonly asked questions.</p>
        <div className="injections-FAQ-section">
          <div className="faq-list">
            {['whatArePeptides?', 'howDoIFeelAfterAPeptideTreatment?', 'howLongDoesItLast?', 'canAnyoneUsePeptideTreatments?', 'areThereAnySideEffects?'].map(section => (
              <div key={section}>
                <button className="injections-faq-button" onClick={() => toggleSection(section)}>
                  {section.split(/(?=[A-Z])/).join(" ").toUpperCase()}
                  <span className={`icon ${activeSection === section ? 'open' : ''}`}>&#9660;</span>
                </button>
                {activeSection === section && (
                  <div className="injections-faq-content">
                    {section === 'whatArePeptides?' && (
                      <p>
                Peptides are short chains of amino acids that serve as building blocks of proteins. They play crucial roles in various biological functions and can be used therapeutically to replenish declining peptide levels.
                      </p>
                    )}
                    {section === 'howDoIFeelAfterAPeptideTreatment?' && (
                      <p>
                      After a peptide treatment, you may feel rejuvenated and revitalized. Many people report experiencing enhanced muscle and joint recovery, leading to reduced pain and stiffness. Improved sleep quality often results in feeling more rested and energetic throughout the day. Additionally, you might notice a boost in your immune health, contributing to a greater sense of overall wellness and vitality. This combination of benefits can help you feel more youthful and invigorated.
                      </p>
                    )}
                    {section === 'howLongDoesItLast?' && (
                      <p>
                        The effects of a peptide treatment can vary depending on the individual and the specific peptides used. Generally, you can expect to start noticing benefits within a few days to a few weeks after the initial treatment. The duration of the effects typically lasts several weeks to a few months, depending on factors such as dosage, frequency of administration, and your body's response. Regular maintenance treatments are often recommended to sustain and maximize the benefits over time.
                      </p>
                    )}
                     {section === 'areThereAnySideEffects?' && (
                      <p>
                   Side effects are generally mild and may include redness or discomfort at the injection site. Rarely, individuals may experience allergic reactions or other side effects. It’s important to discuss potential risks with your healthcare provider.
                      </p>
                    )}
                     {section === 'canAnyoneUsePeptideTreatments?' && (
                      <p>
                     While many people can benefit from peptide treatments, they may not be suitable for everyone. A healthcare provider can help determine if peptide therapy is appropriate based on your health status and goals.
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
    </div>
  );
};

export default Peptide;

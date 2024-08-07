import React, { useEffect } from 'react';
import '../css/IVTherapy.css';

const Specialty = () => {
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
                <h4>Specialty Treatments</h4>
              </div>
            </div>
            <p> At Restart Drip, we strive to stand out. We provide high-quality treatments in the comfort of your home. Along with our signature cocktails and injections, we offer a premium NAD+ injection and a monthly semaglutide shot for those seeking an additional boost.</p>
            <h3 className="hidden-text">WHAT IS NAD+?</h3>
            <p className="hidden-text">NAD+ IV therapy is quickly becoming the preferred choice for individuals looking to boost their energy levels, enhance both mental and physical fitness, and slow the aging process. At Restart Drip, we offer NAD+ IV therapy in the comfort of your own home, administered by registered nurses. Contact us today to learn more about our NAD+ IV therapy services in the New Jersey area</p>

            <h5> <a href="/services/NAD+">Click here</a> to learn more about our NAD+ dosage and pricing.</h5> 
            <h3 className="hidden-text"> WHAT IS SEMAGLUTIDE?</h3>
        <p className="hidden-text"> Semaglutide is a medication that belongs to a class of drugs known as GLP-1 receptor agonists. It is primarily used to manage type 2 diabetes by enhancing the body's natural insulin secretion in response to elevated blood sugar levels. By mimicking the incretin hormone GLP-1, semaglutide not only helps in regulating blood glucose but also slows gastric emptying, which can lead to reduced appetite and better control over food intake. This makes it a valuable tool not just for diabetes management but also for weight loss in people with obesity, as it aids in reducing overall calorie consumption and promotes a feeling of satiety.</p>
        <p>The benefits of semaglutide extend beyond glycemic control and weight management. Clinical studies have shown that it significantly reduces the risk of major cardiovascular events such as heart attack and stroke in individuals with type 2 diabetes who have established cardiovascular disease. This makes it a dual-purpose medication, offering both metabolic and cardiovascular advantages. Additionally, semaglutide's ability to be administered once weekly via injection provides convenience and improves adherence compared to other medications that require more frequent dosing. Overall, semaglutide represents a powerful option in the treatment arsenal for obesity, with added benefits that support long-term health and quality of life.</p>
        <h5> <a href="/services/peptide">Click here</a> to learn more about our monthly semaglutide shot.</h5> 
         </div>

         
            </div>
       
  );
};

export default Specialty;

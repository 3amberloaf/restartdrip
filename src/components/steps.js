import React from 'react';
import '../css/steps.css';

const steps = [
  {
    number: '01',
    title: 'Pre-Assesment',
    description: 'Complete a Pre-Assessment to determine your suitability for Semaglutide.'
  },
  {
    number: '02',
    title: 'Lab Test',
    description: 'Book a Lab Test with a trained professional. We need to make sure there are not any underlying factors that would disqualify you from getting treated with Semaglutide. A trained professional will come to your house and collect a sample. You will also be given information about Semaglutide and how to self-administer the medication safely.'
  },
  {
    number: '03',
    title: 'Book Consultation',
    description: 'Once you receive your Lab Test results you can book a consultation with a Healthcare Professional.'
  },
  {
    number: '04',
    title: 'Recommendation',
    description: 'The Healthcare Professional will recommend a Semaglutide Program.'
  },
  {
    number: '05',
    title: 'Order and Enjoy!',
    description: 'Order your Semaglutide from Hydreight app. Once it arrives at your address you can start your Semaglutide Program.'
  }
];

const Steps = () => {
  return (
    <div className="background">
      <h2>How It Works</h2>
      {steps.map((step, index) => (
        <div className={`step-row ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="step-content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          <div className="step-number">
            <h1>{step.number}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;

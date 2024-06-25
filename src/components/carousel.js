import { Link } from 'react-router-dom';
import treatments from '../pages/treatments/treatments';
import './carousel.css'; // Ensure you have appropriate styling

const TreatmentsCarousel = () => {
  return (
    <div className="carousel-container">
      <h2>Our Treatments</h2>
      <div className="carousel-scroll">
        {treatments.map((treatment, index) => (
          <div className="treatment-slide" key={index}>
            <img src={treatment.imageUrl} alt={treatment.name} />
            <h3>{treatment.name}</h3>
            <p>{treatment.price}</p>
            <p>{treatment.description}</p>
              <Link to={treatment.servicePath} className="learn-more-button">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentsCarousel;
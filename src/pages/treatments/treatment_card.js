import { Link } from 'react-router-dom';

const TreatmentCard = ({ name, price, description, imageUrl, servicePath }) => (
    <div className="treatment-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <h3>{price}</h3>
      <p>{description}</p>
      <Link to={servicePath} className="learn-more-button">BOOK NOW</Link>
    </div>
  );

export default TreatmentCard
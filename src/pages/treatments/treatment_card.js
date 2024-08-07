import { Link } from 'react-router-dom';

const TreatmentCard = ({ name, price, half, description, imageUrl, servicePath }) => (
    <div className="treatment-card">
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <h3>1000 ML - {price}</h3>
      <h3>500 ML - {half}</h3>
      <p>{description}</p>
      <Link to={servicePath} className="learn-more-button">BOOK NOW</Link>
    </div>
  );

export default TreatmentCard
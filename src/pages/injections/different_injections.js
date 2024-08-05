import { Link } from 'react-router-dom';

const InjectionCard = ({ name, price, half, description, imageUrl, servicePath }) => (
    <div className="treatment-card">
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <h3>{price}</h3>

      <p>{description}</p>
      <Link to={servicePath} className="learn-more-button">BOOK NOW</Link>
    </div>
  );

export default InjectionCard
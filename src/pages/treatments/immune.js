import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../css/treatments.css';

const Immune = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".additional-info p, .additional-info ul, .additional-info li, .additional-info h1");

    const elementInView = (element, offset = 0) => {
      const elementTop = element.getBoundingClientRect().top;
      return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset)
      );
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
    <div className="container">
      <div className="image-container">
        <img src="../images/services/immunity.png" alt="Immunity IV" /> {/* Replace with the actual image path */}
      </div>
      <div className="content-container">
        <h1>IMMUNITY BOOSTER</h1>
        <h2>vitamin c, zinc, sodium chloride</h2>
        <p>
        Contains zinc to block viral replication and assist cells mediating immunity. Provides Vitamin C to boost lymphocyte and phagocyte production and acts as a powerful antioxidant which protects cells and assists healing. 
        </p>
  
        <div className="button-container">
          <Link to="https://booking.hydreight.com/widget">
              <button className="book-now">BOOK NOW</button>
            </Link>
        </div>
      </div>

      <div className="main-container">
        <div className="ingredient-wrapper">
          <div className="ingredient-container">
            <img src="../images/services/smile.png" alt="B-COMPLEX" />
            <h1>VITAMIN C</h1>
            <h3><i>to form blood vessels, cartilage, muscle and collagen in bones</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="MAGNESIUM" />
            <h1>SODIUM CHLORIDE</h1>
            <h3><i>for the absorption and transportation of nutrients</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="B12" /> {/* Replace with the actual image path */}
            <h1>ZINC</h1>
            <h3><i>helps fight off bacteria and viruses</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
          RESTART - DRIP 
      </div>

      <div className="additional-info">
    <h1 className="hidden-text">Benefits of Immune Booster</h1>
    <ul className="hidden-text">
        <li className="hidden-text">Strengthens immunity</li>
        <li className="hidden-text">Contains antioxidants and anti-inflammatory elements</li>
    </ul>
    <h1 className="hidden-text">Immune Booster IV Therapy</h1>
    <p className="hidden-text">
        This targeted IV therapy delivers these nutrients directly into the bloodstream, ensuring rapid absorption and effectiveness. Vitamin C is a potent antioxidant that plays a crucial role in immune function by supporting the production and function of white blood cells, which are essential for fighting infections. Sodium chloride helps maintain electrolyte balance and proper hydration, which is important for overall immune health. Zinc is involved in numerous immune system processes, including the development and activation of immune cells.
    </p>
    <p className="hidden-text">
        Immune booster IV therapy is particularly beneficial during times of increased susceptibility to illness or when the immune system needs additional support. By delivering essential nutrients directly where they are needed most, this therapy helps to enhance immune function, reduce the severity and duration of illnesses, and promote overall wellness.
    </p>
    <p className="hidden-text">
        Regular sessions of immune booster IV therapy can contribute to stronger immune defenses, improved resistance to infections, and faster recovery from illness, making it a valuable option for individuals looking to maintain optimal immune health and well-being.
    </p>
    <h1 className="hidden-text">Why Choose Us for IV Hydration?</h1>
    <p className="hidden-text">
        When you’re in need of liquid IV therapy for a hangover or recovery of any kinds in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast!
    </p>
</div>


    </div>
  );
};

export default Immune;

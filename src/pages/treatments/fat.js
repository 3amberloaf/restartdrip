import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../css/treatments.css';

const Fat = () => {

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
        <img src="../images/services/fat-burner.jpg" alt="Athlete IV" /> {/* Replace with the actual image path */}
      </div>
      <div className="content-container">
        <h1>FAT BURNER</h1>
        <h3>amino blend, b-plex, glutathione, sodium chloride</h3>
        <p>
        These essential amino acids, vitamins and B12, are the perfect blend to transport fatty acids into mitochondria where they can be burned for energy. An extra benefit is mood improvement and additional appetite control.</p>
  
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
            <h1>AMINO BLEND</h1>
            <h3><i>to boost your metabolism, improve energy levels, increase endurance, and help to burn fat</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="MAGNESIUM" />
            <h1>B-PLEX</h1>
            <h3><i> enables the release of energy through metabolism and supports the nervous system</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="B12" /> {/* Replace with the actual image path */}
            <h1>GLUTATHIONE</h1>
            <h3><i>for body detoxification, inflammation, and immune system</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/lightbulb.png" alt="MAGNESIUM" />
            <h1>SODIUM CHLORIDE</h1>
            <h3><i>for the absorption and transportation of nutrients</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
          RESTART - DRIP 
      </div>
      <div className="additional-info">
    <h1 className="hidden-text">Benefits of Fat Burner</h1>
    <ul className="hidden-text">
        <li className="hidden-text">Improves mood</li>
        <li className="hidden-text">Helps appetite control</li>
    </ul>
    <h1 className="hidden-text">Fat Burner IV Therapy</h1>
    <p className="hidden-text">
        Fat burner IV therapy combines essential nutrients such as an amino blend, B-plex vitamins, glutathione, and sodium chloride to support rapid fat metabolism and enhance weight loss. This specialized IV treatment delivers these nutrients directly into the bloodstream, bypassing the digestive system for immediate absorption and effectiveness.
    </p>
    <p className="hidden-text">
        The amino blend plays a crucial role in promoting fat metabolism and maintaining muscle mass, which is essential for individuals aiming to lose weight and improve body composition. B-plex vitamins support energy metabolism, aid in the conversion of food into energy, and help maintain overall metabolic function, all of which are vital for effective weight management. Glutathione acts as a powerful antioxidant, detoxifying the body and improving cellular function.
    </p>
    <p className="hidden-text">
        This targeted IV therapy is particularly beneficial for individuals looking to boost their weight loss efforts and enhance their overall wellness. By ensuring rapid hydration and delivering key nutrients directly where they are needed most, fat burner IV therapy supports effective fat metabolism, improves energy levels, and promotes mental clarity. Regular sessions can contribute to sustained weight loss, improved energy levels, and overall better health, making it a valuable investment in achieving and maintaining peak physical condition and quality of life.
    </p>
    <h1 className="hidden-text">Why Choose Us for IV Hydration?</h1>
    <p className="hidden-text">
        When you’re in need of liquid IV therapy for a hangover or recovery of any kinds in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast!
    </p>
</div>


    </div>
  );
};

export default Fat;

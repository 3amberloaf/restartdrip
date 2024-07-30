import React, {useEffect} from 'react';
import '../../css/treatments.css';
import { Link } from 'react-router-dom';

const Beauty = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".additional-info p, .additional-info li, .additional-info ul, .additional-info h1");

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
        <img src="../images/services/gym.png" alt="Beauty IV" /> {/* Replace with the actual image path */}
      </div>
      <div className="content-container">
        <h1>BEAUTY & YOUTH</h1>
        <h2>vitamin c, biotin, sodium chloride</h2>
        <p>
        This beauty/youth IV infusion provides essential nutrients, antioxidants and vitamins that support our hormone pathways, reduce oxidative stress, and nourish the body to produce fatty acids preventing premature and visible skin aging.</p>
  
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
            <h1>BIOTIN</h1>
            <h3><i> to metabolize carbohydrates, fats, and amino acids as well as build protein</i></h3>
          </div>
          <div className="ingredient-container">
            <img src="../images/services/waterdrop.png" alt="B12" /> {/* Replace with the actual image path */}
            <h1>SODIUM CHLORIDE</h1>
            <h3><i>for the absorption and transportation of nutrients</i></h3>
          </div>
        </div>
      </div>

      <div className="banner">
          RESTART - DRIP 
      </div>

      <div className="additional-info">
    <h1 className="hidden-text">Benefits of Beauty IV Therapy</h1>
    <ul className="hidden-text">
        <li className="hidden-text">Provides essential nutrients</li>
        <li className="hidden-text">Reduces oxidative stress</li>
        <li className="hidden-text">Prevents visible skin aging</li>
    </ul>
    <h1 className="hidden-text">Beauty/Youth IV Therapy</h1>
    <p className="hidden-text">
        Beauty IV therapy is designed to boost skin health and overall beauty through a targeted combination of essential nutrients. Vitamin C serves as a potent antioxidant, protecting the skin from environmental damage and promoting collagen production, which enhances elasticity and firmness. Biotin, also known as Vitamin B7, supports healthy hair, skin, and nails by strengthening them and aiding in renewal and repair processes. Sodium Chloride helps maintain electrolyte balance and hydration, crucial for skin moisture and cellular function.
    </p>
    <p className="hidden-text">This therapy delivers these vital nutrients directly into the bloodstream, ensuring rapid absorption and effectiveness. It's particularly beneficial for improving skin texture, promoting a youthful glow, and strengthening hair and nails. Regular sessions of Beauty IV therapy can enhance overall skin health and contribute to a radiant, healthy appearance. It's a valuable option for individuals seeking to complement their skincare regimen with internal nourishment.
    </p>
    <h1 className="hidden-text">Why Choose Us for IV Hydration?</h1>
    <p className="hidden-text">
        When you’re in need of liquid IV therapy for a hangover or recovery of any kinds in the New Jersey area, look no further than Restart Drip. Our focus is on promoting wellness from within, and that includes helping those who need to feel better fast!
    </p>
</div>


    </div>
  );
};

export default Beauty;

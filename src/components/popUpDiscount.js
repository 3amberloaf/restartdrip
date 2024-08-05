import React from 'react';
import { Link } from 'react-router-dom';
import '../css/popUpDiscount.css';

const PopUpDiscount = ({ show, handleClose }) => {
  return (
    <div className={`modal ${show ? 'display-block' : 'display-none'}`}>
      <section className="modal-main">
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <div className="popup-header">
        </div>
        <div className="discount-text">
          <h1>Unlock 10% Off</h1>
          <p>
            New customers recieve 10% off their first IV therapy service!
          </p>
        </div>
            <Link to="https://booking.hydreight.com/widget">
              <button className="view-services">Sign Up</button>
            </Link>
      </section>
    </div>
  );
};

export default PopUpDiscount;

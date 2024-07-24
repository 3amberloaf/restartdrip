import React from 'react';
import '../css/popUpDiscount.css';

const PopUpDiscount = ({ show, handleClose }) => {
  return (
    <div className={`modal ${show ? 'display-block' : 'display-none'}`}>
      <section className="modal-main">
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <div className="popup-header">
          <img src="images/logo.png" alt="Logo" className="popup-logo" />
        </div>
        <h1>Unlock 20% Off</h1>
        <p>Sign up to receive marketing texts and emails today to receive 20% off your first visit. Gain access to exclusive deals and be the first to know about upcoming events.</p>
        <button className="popup-btn">Sign Up and Unlock Code</button>
      </section>
    </div>
  );
};

export default PopUpDiscount;

import React from 'react';
import '../css/contact.css';

const ContactForm = () => {

  const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new URLSearchParams(new FormData(form)).toString();
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data
    })
    .then(() => {
      document.getElementById('form-success').style.display = 'block';
      document.getElementById('form-error').style.display = 'none';
    })
    .catch(() => {
      document.getElementById('form-success').style.display = 'none';
      document.getElementById('form-error').style.display = 'block';
    });
  };

  return (
    <div className="contact-container">
      <img src="/images/random/stones.jpg" alt="Decorative stones" />
      <h1>Contact Us Today!</h1>
      <div className="sub-contact">
        <img src="/images/homepage/droplet.png" alt="droplet" />
        <h1>We'd Love to Hear from You!</h1>
      </div>
      <form name="contact-form" method="POST" data-netlify="true" onSubmit={submitForm}>
        <input type="hidden" name="form-name" value="contact-form" />
        <p><strong>"*"</strong> indicates required fields</p>
        <p>
          <label>Name* <input type="text" name="name" required /></label>
        </p>
        <p>
          <label>Email* <input type="email" name="email" required /></label>
        </p>
        <p>
          <label>Phone <input type="tel" name="phone" /></label>
        </p>
        <p>
          <label>Location <input type="text" name="location" /></label>
        </p>
        <p>
          <label>Message <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
        <div id="form-success" style={{display: 'none', color: 'green'}}>Thank you for your submission!</div>
        <div id="form-error" style={{display: 'none', color: 'red'}}>Oops! Something went wrong.</div>
      </form>
    </div>
  );
};

export default ContactForm;

import React from 'react';
import '../css/contact.css';

const ContactForm = () => {

  const submitForm = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(event.target)).toString()
    })
    .then(() => {
      document.getElementById('form-success').style.display = 'block';
      document.getElementById('form-error').style.display = 'none';
    })
    .catch((error) => {
      document.getElementById('form-success').style.display = 'none';
      document.getElementById('form-error').style.display = 'block';
    });
  };

  return (
    <div className="contact-us">
      <img src="/images/random/stones.jpg" alt="stones" />
      <h1>GET IN TOUCH WITH US TODAY!</h1>
      <div className="smaller-contact">
        <img src="/images/homepage/droplet.png" alt="droplet" />
        <h1>Questions About Restart Drip? We’d LOVE TO HEAR FROM YOU!</h1>
      </div>
      <form name="contact" method="POST" data-netlify="true" onSubmit={submitForm}>
        <input type="hidden" name="form-name" value="contact" />
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
          <label>Message <textarea name="message" /></label>
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

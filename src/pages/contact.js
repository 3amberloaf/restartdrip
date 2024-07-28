import React from 'react';
import '../css/contact.css';

const ContactForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p><strong>"*"</strong> indicates required fields</p>
      <p>
        <label>Name* <input type="text" name="name" required /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Phone <input type="tel" name="phone" /></label>
      </p>
      <p>
          
          <label>Location <textarea name="location" required></textarea></label>
    
      </p>
      <p>
        <label>Message* <textarea name="message" required></textarea></label>
      </p>
      <p>
        <label><input type="checkbox" name="newsletter" /> Sign Up For Newsletter</label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;

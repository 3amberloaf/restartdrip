import React from 'react';
import '../css/contact.css';

const ContactForm = () => {
  return (
    <div className="contact-us">
        <img src="/images/random/stones.jpg" alt = "stones" />
        <h1>GET IN TOUCH WITH US TODAY!</h1>
        <div className="smaller-contact">
            
        <img src="/images/homepage/droplet.png" alt = "droplet" />
        <h1>Questions About Restart Drip? We’d LOVE TO HEAR FROM YOU!</h1>

        </div>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p><strong>"*"</strong> indicates required fields</p>
      <p>
        <label>Name* <input type="text" name="name" required /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" required/></label>
      </p>
      <p>
        <label>Phone <input type="tel" name="phone" /></label>
      </p>
      <p>
          
          <label>Location <textarea name="location" ></textarea></label>
    
      </p>
      <p>
        <label>Message* <textarea name="message" ></textarea></label>
      </p>
      <p>
        <label><input type="checkbox" name="newsletter" /> Sign Up For Newsletter</label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    </div>
  );
};

export default ContactForm;

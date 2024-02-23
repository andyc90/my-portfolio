import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="global-container contact-container">
      <div className="contact-content">
        <h1>Reach out and elevate your digital experience.</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

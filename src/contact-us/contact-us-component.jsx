import React from "react";
import { ContactUsStyle } from "./contact-us-style";

const ContactUsComponent = () => {
  return (
    <ContactUsStyle>
      <div className="content">
        <h1>GET IN TOUCH</h1>
        <p>
          Have questions or feedback? We're here to help. <br />
          Send us a message and we'll respond soon.
        </p>
        <button className="contactBtn">Contact Us</button>
      </div>
      <div className="imageWrap">
        <img className="imageContainer" src="https://aptitudeguru.in/static/media/get-in-touch.8c521c235d4bd711343c.jpg" alt="Contact Us" />
      </div>
    </ContactUsStyle>
  );
};

export default ContactUsComponent;
import React from 'react';

const Contact = ({ nom, email, adresse, image }) => {
  return (
    <div className="contact">
      <img className="contact-image" src={image} alt="contact" />
      <div>
        <h2>{nom}</h2>
        <p>Email: {email}</p>
        <p>Adresse: {adresse}</p>
      </div>
    </div>
  );
};

export default Contact;

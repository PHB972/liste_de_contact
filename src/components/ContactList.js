import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <Contact key={index} {...contact} />
      ))}
    </div>
  );
};

export default ContactList;

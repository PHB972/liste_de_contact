/*import React from 'react';
import data from './contact.json';
import './App.css';
 
const Contact = ({ nom, email, adresse, image }) => {
  return (
    <div className="contact">
      <img className="contact-image" src={image}/>
      <div>
        <h2>{nom}</h2>
        <p>Email: {email}</p>
        <p>Adresse: {adresse}</p>
      </div>
    </div>
  );
};
 
const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <Contact key={index} {...contact} />
      ))}
    </div>
  );
};
 
const App = () => {
  return (
    <div className="app">
      <h1 className="titre">Liste des contacts</h1>
      <ContactList contacts={data.contacts} />
    </div>
  );
};
 
export default App;*/
import React from 'react';
import ContactList from './components/ContactList';
import data from './contact.json';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1 className="titre">Liste des contacts</h1>
      <ContactList contacts={data.contacts} />
    </div>
  );
};

export default App;

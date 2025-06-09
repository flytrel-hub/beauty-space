import React from 'react';
import ContactForm from '../../components/Contact/ContactForm/ContactForm';
import ContactBlock from '../../components/General/ContactBlock/ContactBlock';
import './Contact.scss';

const Contact = () => {
  return (
    <main className="contact-page">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Свяжитесь с нами</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactBlock />
        </div>
      </div>
    </main>
  );
};

export default Contact;

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS - Created template_id, service_id and publickey which is in the account--> API
    const serviceId = 'service_20sgneb';
    const templateId = 'template_2u795y2';
    const publicKey = 'pkXb0IythIz_ogg64';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Support Team',
      message: message,
    };




    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email sent successfully!', response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      console.error('Error details:', JSON.stringify(error, null, 2)); // Log the full error object
    });

  
  };

  return (
    <form onSubmit={handleSubmit} className="emailForm">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;

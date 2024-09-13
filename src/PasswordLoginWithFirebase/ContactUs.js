import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { signOut } from "firebase/auth";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import './ContactUs.css';
import Navbar from "../Navbar";

function ContactUs() {
  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then(val => {
      console.log(val, "val");
      history('/');
    });
  };

  const [userData, setUserData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: ''
  });

  const data = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const send = async (e) => {
    e.preventDefault();
    const { Name, Email, Subject, Message } = userData;

    // Check if any field is empty
    if (!Name || !Email || !Subject || !Message) {
      alert('Please fill in all fields.');
      return;
    }

    // EmailJS - Created template_id, service_id and publickey which is in the account--> API
    const serviceId = 'service_20sgneb';
    const templateId = 'template_2u795y2';
    const publicKey = 'pkXb0IythIz_ogg64';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: Name,
      from_email: Email,
      to_name: 'Support Team',
      subject: Subject,
      message: Message,
    };

    try {
      // Send email using EmailJS
      const emailResponse = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully!', emailResponse);

      // Save data to Firebase Realtime Database
      const option = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ Name, Email, Subject, Message })
      };

      const dbResponse = await fetch('https://contact-us-1ee67-default-rtdb.firebaseio.com/Messages.json', option);
      console.log(dbResponse);

      if (dbResponse.ok) {
        alert('Message has Sent Successfully!');
        // Clear all fields after sending the message
        setUserData({
          Name: '',
          Email: '',
          Subject: '',
          Message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email or saving data:', error);
      alert('Failed to send message or save data. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="Container">
          <div>
            <button onClick={handleClick}>SignOut</button>
          </div>
          <div className="contact-container">
  <div className="contact-content">
      <div className="contact-message">
        <h1>Contact Us</h1>
        <p>Thank you for your interest in reaching out to us. We value your feedback, inquiries, and suggestions. Please feel free to contact us using the information provided below or by filling out the contact form.</p>
      </div>
      <div className="contact-box">
        <form method='POST' onSubmit={send}>
          <input type='text' name='Name' value={userData.Name} placeholder='Enter your Full Name' autoComplete='off' onChange={data} />
          <input type='text' name='Email' value={userData.Email} placeholder='Enter your Email' autoComplete='off' onChange={data} />
          <input type='text' name='Subject' value={userData.Subject} placeholder='Subject of Message' autoComplete='off' onChange={data} />
          <textarea value={userData.Message} name='Message' placeholder='Your Message' autoComplete='off' onChange={data} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
</div>

</div>
    </div>
 

      <footer>
        <p>&copy; {new Date().getFullYear()} Calories Burnt Prediction System. All rights reserved.</p>
      </footer>
    </>
  );
}

export default ContactUs;

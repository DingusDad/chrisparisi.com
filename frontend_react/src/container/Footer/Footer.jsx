import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Have a chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email1} alt="email" />
          <a href="mailto:parisichris7@gmail.com" className="p-text">
            parisichris7@gmail.com
          </a>
        </div>
        {/* <div className="app__footer-card">
          <img src={images.smartphone} alt="phone number" />
          <a href="tel:parisichris7@gmail.com" className="p-text">
            google voice number
          </a>
        </div> */}
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app_flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app_flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}

      <div className="copyright">
        <p className="p-text">2022 Chris Parisi</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);

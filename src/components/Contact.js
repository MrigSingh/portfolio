import React from 'react';
import contactPerson from '../assets/contact-person.png';
import fb from '../assets/fb.png';
import whatsapp from '../assets/whatsapp.png';
import gmail from '../assets/gmail.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import './styles.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="info">
        <div className="info-item">
          <img src={linkedin} width="40px" />
          <div className="info-link">
            https://www.linkedin.com/in/mriganshu-singh-8a516415a/
          </div>
        </div>
        <div className="info-item">
          <img src={fb} width="40px" />
          <div className="info-link">
            https://www.facebook.com/mriganshu123
          </div>
        </div>
        <div className="info-item">
          <img src={github} width="40px" />
          <div className="info-link">
            https://github.com/MrigSingh
          </div>
        </div>
        <div className="info-item">
          <img src={gmail} width="40px" />
          <div className="info-link">
            singh.mriganshu@gmail.com
          </div>
        </div>
        <div className="info-item">
          <img src={whatsapp} width="40px" />
          <div className="info-link">
            +91 8249331980
          </div>
        </div>
      </div>
      <div className="image">
        <img src={contactPerson} width="100%" />
      </div>
    </div>
  )
}

export default Contact

import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <h4>Contact Us</h4>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Website: www.AcadeSync.com</p>
        </div>
        <div className="footer-item">
          <h4>AcadeSync</h4>
          <p>25 Main Street</p>
          <p>Bambalapitiya, Colombo, Sri Lanka</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AcadeSync. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

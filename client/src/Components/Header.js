import React from 'react';
import './Header.css';
import Logo from '../Components/Images/LOGO.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ name, registrationNumber }) => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="user-info-container">
          {name && registrationNumber && (
            <div>
              <span>Name: {name}</span>
              <span>Registration Number: {registrationNumber}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
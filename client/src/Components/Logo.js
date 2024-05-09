import React from 'react';
import logo from '../Images/lOGO.png'; // Import your logo image
import 'bootstrap/dist/css/bootstrap.min.css';


const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Project Logo" />
    </div>
  );
}

export default Logo;

import React from 'react';
import '../Components/NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle">Programmes</a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Information Technology</a>
                <a href="#" className="dropdown-item">Software Engineering</a>
                <a href="#" className="dropdown-item">Information Systems</a>
                <a href="#" className="dropdown-item">Cyber Security</a>
                <a href="#" className="dropdown-item">Data Science</a>
                <a href="#" className="dropdown-item">Computer Systems & Network Engineering</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">My Courses</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

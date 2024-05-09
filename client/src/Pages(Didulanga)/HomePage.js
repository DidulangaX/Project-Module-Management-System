import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <NavigationBar />

      <div className="hero-banner">
        <div className="container">
          <h1 className="hero-title">Welcome to AcadeSync</h1>
          <p className="hero-description">Your one-stop solution for academic collaboration and communication.</p>
          <a href="/services" className="btn btn-primary">Explore Now</a>
        </div>
      </div>

      <div className="home-content">
      <div className="home-content">
        <section className="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="dashboard-box notices-box">
                  <h2>Notices</h2>
                  <ul>
                    <li>Notice 1: Your notice content here</li>
                    <li>Notice 2: Your notice content here</li>
                    <li>Notice 3: Your notice content here</li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dashboard-box announcements-box">
                  <h2>Announcements</h2>
                  <ul>
                    <li>Announcement 1: Your announcement content here</li>
                    <li>Announcement 2: Your announcement content here</li>
                    <li>Announcement 3: Your announcement content here</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';
import NavigationBar from '../Components/NavigationBar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import '../Pages(Didulanga)/MarksEnter.css';

const EnterMarks = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="enter-marks-container">
        <h2 className="text-center mb-5">Enter Marks for reports</h2>
        <div className="btn-container d-flex flex-column align-items-center">
          <Link to="/report1" className="btn btn-primary btn-lg mb-3">
            Status Report 1
          </Link>
          <Link to="/report2" className="btn btn-primary btn-lg mb-3">
            Status Report 2
          </Link>
          <Link to="/logbook" className="btn btn-primary btn-lg mb-3">
            Log Book
          </Link>
          <Link to="/finalthesis" className="btn btn-primary btn-lg">
            Final Thesis
          </Link>
          <Link to="/website" className="btn btn-primary btn-lg">
            Website
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnterMarks;
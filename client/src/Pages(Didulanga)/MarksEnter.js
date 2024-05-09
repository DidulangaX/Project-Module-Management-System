import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';
import NavigationBar from '../Components/NavigationBar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import './MarksEnter.css';

const EnterMarks = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="enter-marks-container">
        <h2 className="text-center mb-5">Enter Marks</h2>
        <div className="btn-container d-flex flex-column align-items-center">
          <Link to="/enter-marks/proposal" className="btn btn-primary btn-lg mb-3">
            Proposal
          </Link>
          <Link to="/enter-marks/progress1" className="btn btn-primary btn-lg mb-3">
            Progress 1
          </Link>
          <Link to="/enter-marks/progress2" className="btn btn-primary btn-lg mb-3">
            Progress 2
          </Link>
          <Link to="/enter-marks/final" className="btn btn-primary btn-lg">
            Final
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnterMarks;
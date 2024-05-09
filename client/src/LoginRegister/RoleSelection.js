// RoleSelectionPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import Logo from '../Components/Images/LOGO1.png';

import StudentRegistrationForm from './StudentRegistrationForm';
import CordinatorRegistrationForm from './CordinatorRegistrationForm';
import ProjectMembersRegistrationForm from './ProjectMembersRegistrationForm';
import ExaminerRegistrationForm from './ExaminerRegistrationForm';
import SupervisorRegistrationForm from './SupervisorRegistrationForm';
import CoSupervisorRegistrationForm from './CoSupervisorRegistrationForm';


const RoleSelectionPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const renderRegistrationForm = () => {
    switch (selectedRole) {
      case 'Student':
        return <StudentRegistrationForm role="Student" />;
      case 'Coordinator':
        return <CordinatorRegistrationForm role="Coordinator" />;
      case 'Project Member':
        return <ProjectMembersRegistrationForm role="Project Member" />;
      case 'Examiner':
        return <ExaminerRegistrationForm role="Examiner" />;
      case 'Supervisor':
        return <SupervisorRegistrationForm role="Supervisor" />;
      case 'Co-Supervisor':
        return <CoSupervisorRegistrationForm role="Co-Supervisor" />;
      default:
        return null;
    }
  };

  return (
    <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo-image" />
    <div className="background-frame">
      <div>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '28px', color: '#124E66', marginTop: '20px', fontWeight: 'bold', textTransform: 'uppercase' }}>Register Here!</h3>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ color: '#124E66' }}>Already have an account? <Link to="/" style={{ color: '#124E66', fontWeight: 'bold' }}>Login</Link></p>
        </div>

        <div className="role-selection-page">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="role-nav">
                  <h3 className="role-nav-heading">Select Your Role</h3>
                  <ul className="role-list">
                    <li><button onClick={() => handleRoleSelect('Student')}>Student</button></li>
                    <li><button onClick={() => handleRoleSelect('Coordinator')}>Project Coordinator</button></li>
                    <li><button onClick={() => handleRoleSelect('Project Member')}>Project Member</button></li>
                    <li><button onClick={() => handleRoleSelect('Examiner')}>Examiner</button></li>
                    <li><button onClick={() => handleRoleSelect('Supervisor')}>Supervisor</button></li>
                    <li><button onClick={() => handleRoleSelect('Co-Supervisor')}>Co-Supervisor</button></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="registration-form">
                  {renderRegistrationForm()}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RoleSelectionPage;

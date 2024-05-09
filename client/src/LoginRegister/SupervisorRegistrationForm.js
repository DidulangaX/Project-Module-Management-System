import './Register.css';
import React, { useState } from 'react';

const SupervisorRegistrationForm = ({ role }) => {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    contactNumber: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    role,
  });
  const [passwordMatch, setPasswordMatch] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === 'confirmPassword') {
      setPasswordMatch(e.target.value === formData.password);
    } else if (e.target.name === 'password') {
      setPasswordMatch(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registration successful');
        // Reset form data or perform any other actions
      } else {
        console.error('Error during user registration');
      }
    } catch (err) {
      console.error('Error during user registration', err);
    }
  };

  return (
    <div>
      <h2>Supervisor Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
          <div className="input-field">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="input-field">
            <label>Registration Number:</label>
            <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
          </div>
          <div className="input-field">
            <label>Contact Number:</label>
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
          </div>
          <div className="input-field">
            <label>Email:</label>
            <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
          </div>
          <div className="input-field">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="input-field">
            <label>Confirm Password:</label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{ paddingRight: '30px' }}
              />
              <div style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}>
                {passwordMatch === false && <span style={{ color: 'red' }}>&#10007;</span>}
                {passwordMatch === true && <span style={{ color: 'green' }}>&#10003;</span>}
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SupervisorRegistrationForm;
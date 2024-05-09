import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const StudentRegistrationForm = ({ role }) => {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    batch: '',
    specialization: '',
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
      <div>
        <h2>Student Registration</h2>
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
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
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
            <div className="input-field">
              <label>Batch:</label>
              <select name="batch" value={formData.batch} onChange={handleChange}>
                <option value="Regular">Regular</option>
                <option value="June">June</option>
              </select>
            </div>
            <div className="input-field">
              <label>Specialization:</label>
              <select name="specialization" value={formData.specialization} onChange={handleChange}>
                <option value="IT">Information Technology (IT)</option>
                <option value="SE">Software Engineering (SE)</option>
                <option value="IS">Information Systems (IS)</option>
                <option value="CS">Cyber Security (CS)</option>
                <option value="DS">Data Science (DS)</option>
                <option value="CSNE">Computer Systems and Network Engineering (CSNE)</option>
              </select>
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
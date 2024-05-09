// ExaminerRegistrationForm.js
import './Register.css';
import React, { useState } from 'react';

const ExaminerRegistrationForm = ({ role }) => {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    contactNumber: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    role,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => { // mark the function as async
    e.preventDefault();
    // Placeholder logic for checking uniqueness
    const isRegistrationNumberUnique = true; // Replace with actual logic
    const isEmailUnique = true; // Replace with actual logic

    if (!isRegistrationNumberUnique) {
      console.error('Registration number already exists');
      return;
    }

    if (!isEmailUnique) {
      console.error('Email already exists');
      return;
    }

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      console.error('Password and confirm password do not match');
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

    // Handle form submission
    console.log(formData);
  };

  return (
    <div>
      <h2>Examiner Registration Form</h2>
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
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ExaminerRegistrationForm;

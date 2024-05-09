import './Login.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Components/Images/LOGO1.png';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '', role: '' });
  const [userInfo, setUserInfo] = useState({ name: '', registrationNumber: '' });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'role') {
      setFormData({ ...formData, role: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, password, role } = formData;
      const response = await axios.post(
        'http://localhost:8000/api/login',
        { registrationNumber: username, password, role },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.data;
      if (response.status === 200) {
        // Login successful, navigate to home page
        setUserInfo({ name: data.name, registrationNumber: data.registrationNumber });
        navigate('/Pages(Didulanga)/MarksEnter');
      } else {
        // Login failed, display error message
        console.error(data.message);
      }
    } catch (err) {
      console.error('An error occurred', err);
    }
  };

  return (
    <div className="logo-container">
      <img src={Logo} alt="Logo" className="logo-image" />
      <div className="login-container">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Cordinator">Coordinator</option>
              <option value="Project Member">Project Member</option>
              <option value="Examiner">Examiner</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Co-Supervisor">Co Supervisor</option>
            </select>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
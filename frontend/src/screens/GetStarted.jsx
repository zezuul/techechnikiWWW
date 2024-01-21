import React from 'react';
import { useState } from "react";
import '../styles/GetStarted.css'; // You can create this CSS file for styling
import { Link, useNavigate } from 'react-router-dom';

const GetStarted = () => {
  
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
  const {email, password} = formData;
  
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  
  const onClick = async e => {
      e.preventDefault();
      login(email, password);
  };
  const navigate = useNavigate();
    
    return (
      <div className="GetStarted">
      <div className='log-form'>
      <input type="email" placeholder="Enter your email" name='email' value={email} onChange={e => onChange(e)} required />
      <input type="password" placeholder="Enter your password" name='password' value={password} onChange={e => onChange(e)} required />
          <button onClick={e => onClick(e)}>Continue</button>
          <p>
            New user? <Link to="/register">Register</Link>
          </p>
      </div>
      </div>
    )
  };

  
export default GetStarted;
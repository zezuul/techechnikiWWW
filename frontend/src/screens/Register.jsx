import React from 'react';
import { useState } from "react";
import '../styles/Register.css';
import { Link, useNavigate} from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        pasword2: ''
    });

    const {email, password, password2} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onClick = async e => {
        e.preventDefault();
        if(password !== password2){
            setAlert('Passwords dont match', 'danger');
        } else {
            register({email, password});
        }
    };

    const navigate = useNavigate();
    
  return (
    <div className="Register">
    <div className='log-form'>
    <input type="email" placeholder="Enter your email" name='email' value={email} onChange={e => onChange(e)} required />
    <input type="password" placeholder="Enter your password" name='password' value={password} onChange={e => onChange(e)} required />
    <input type="password" placeholder="Repeat your password" name='password2' value={password2} onChange={e => onChange(e)} required />
        <button onClick={e => onClick(e)}>Continue</button>
        <p>
          Already have an account? <Link to="/GetStarted">Log in</Link>
        </p>
    </div>
    </div>
  );
};

export default Register;
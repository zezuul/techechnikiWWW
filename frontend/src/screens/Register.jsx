import React from 'react';
import { useState, useEffect } from "react";
import '../styles/Register.css';
import { Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import Loader from '../elements/Loader';
import { useRegisterMutation } from '../slices/usersApiSlice.js';
import { setCredentials } from '../slices/authSlice.js';

const Register = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [register, {isLoading}] = useRegisterMutation();
    const {userInfo} = useSelector((state) => state.auth);

    useEffect(() => {
        if(userInfo){
            navigate('/profile');
        }
    }, [navigate, userInfo]);
  
    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            toast.error('Passwords do not match');
        } else {
            try {
                const res = await register({email, password}).unwrap();
                dispatch(setCredentials({...res}));
                navigate('/profile');
            } catch(err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };
    
  return (
    <div className="Register">
    <div className='log-form'>
    <input type="email" placeholder="Enter your email" name='email' value={email} onChange={e => setEmail(e.target.value)} required />
    <input type="password" placeholder="Enter your password" name='password' value={password} onChange={e => setPassword(e.target.value)} required />
    <input type="password" placeholder="Repeat your password" name='confirmPassword' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
        <button onClick={e => submitHandler(e)}>Continue</button>
        {isLoading && <Loader />}
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
    </div>
    </div>
  );
};

export default Register;
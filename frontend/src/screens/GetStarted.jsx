import React, { useEffect } from 'react';
import { useState } from "react";
import '../styles/GetStarted.css'; // You can create this CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice.js';
import { toast } from 'react-toastify';
import Loader from '../elements/Loader';

const GetStarted = () => {
  
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, {isLoading}] = useLoginMutation();

    const {userInfo} = useSelector((state) => state.auth);

    useEffect(() => {
        if(userInfo){
            navigate('/profile');
        }
    }, [navigate, userInfo]);

  
    const submitHandler = async (e) => {
        e.preventDefault();
        try{
            const res = await login({email, password}).unwrap();
            dispatch(setCredentials({...res}));
            navigate('/profile');
        } catch(err){
            toast.error(err?.data?.message || err.error);
        }
    };
    
    return (
      <div className="GetStarted">
      <div className='log-form'>
      <input type="email" placeholder="Enter your email" name='email' value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Enter your password" name='password' value={password} onChange={e => setPassword(e.target.value)} required />
          <button onClick={e => submitHandler(e)}>Continue</button>
          {isLoading && <Loader />}
          <p>
            New user? <Link to="/register">Register</Link>
          </p>
      </div>
      </div>
    )
  };

  
export default GetStarted;
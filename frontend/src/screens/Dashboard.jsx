import React from 'react';
import '../styles/Dashboard.css';
import { SlLogout } from "react-icons/sl";
import 'bootstrap/dist/css/bootstrap.css';

import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import { useLogoutMutation } from '../slices/usersApiSlice.js';
import { logout } from '../slices/authSlice.js';

import TimerApp from '../elements/timer/TimerApp';
import TodoApp from '../elements/todo/TodoApp';

const Dashboard = () => {
    const dispatch = useDispatch();
  const {userInfo} = useSelector((state)=> state.auth);
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try{
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate('/');
    } catch(err) {
        console.log(err);
    }
  };

    return (
        <div className='Dashboard'>
         <div className = "top-container">
            <p className="header"> PLANNERLY </p>
          <SlLogout className="logout-container" style={{ cursor: 'pointer', color: '#ff6d38' }} 
          onClick={logoutHandler} />
            
          </div>

        <div className="rest-container">
        <TimerApp className="col-6"/>
        <TodoApp className="col-6"/>
            
        </div>
        </div>
      );
};

export default Dashboard;
//<TimerApp className="col-6"/>
//<TodoApp className="col-6"/>
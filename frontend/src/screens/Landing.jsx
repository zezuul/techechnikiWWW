import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/Landing.css';
import names from "../images/Plannerly.png";
import shapes from "../images/canvas.png";

const Landing = () => {
    const [position, setPosition] = useState(window.scrollY)
    const [visible, setVisible] = useState(true) 
    useEffect(()=> {
        const handleScroll = () => {
           let moving = window.scrollY
           
           setVisible(position > moving);
           setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

  const cls = visible ? "visible" : "hidden";

  const navigate = useNavigate();
  const showLogin = () => {
    console.log('Button clicked. Navigating to /login');
    navigate('/login');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try{
        console.log('Button clicked. Navigating to /login');
        navigate('/login');
    } catch(err){
        toast.error(err?.data?.message || err.error);
    }
};

  return (
    <div className="Landing">
        <header className={cls} font='body'>
        <div className="one-option-button" onClick={e => submitHandler(e)}>
        <div className="marquee">
        <div className="track">
        <div className="content">
            Get Started
            Get Started
            Get Started
            Get Started
            Get Started
            Get Started
            Get Started
            Get Started
            Get Started
            </div></div></div>
      </div> 
      </header>
        <div className='one-screen-container'>
        <div className='images-container'>
          <div className="above-image-container">
          <img src={names} alt="names" />
          </div>
          <div className="image-container">
          <img src={shapes} alt="shapes" />
          </div>
        </div>
          
        </div>
        <div className='one-screen-container second-one-screen-container'>
        
      
    </div>
        </div>
  );
};

export default Landing;
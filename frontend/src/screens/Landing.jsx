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

  let navigate = useNavigate();
  const showLogin = () => {
    navigate('/GetStarted');
  };

  return (
    <section className="Landing">
        <header className={cls} font='body'>
        <div className="one-option-button" onClick={showLogin}>
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
        </section>
  );
};

export default Landing;
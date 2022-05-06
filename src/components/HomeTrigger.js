import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/my-logo.png';

export default function HomeTrigger() {
  const [home, setHome] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='home-trigger'>
      <p className={home ? 'home-title show' : 'home-title'}>Home</p>
      <img 
        className={home ? 'home-logo emphasis' : 'home-logo'} 
        onMouseOver={() => setHome(true)} 
        onMouseLeave={() => setHome(false)}
        onClick={() => navigate('/')}
        src={logo} 
      />
    </div>
  )
}

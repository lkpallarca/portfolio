import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from '../assets/lkpallarca.jpg';
import '../css/index.css';

export default function WelcomeScreen() {
  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  const [contact, setContact] = useState(false);
  const navigate = useNavigate();

  return (
    <section className='welcome-screen'>
      <div className='title-card'>
        <div 
          className='title-text'
          onMouseOver={() => setAbout(true)} 
          onMouseLeave={() => setAbout(false)} 
        >
          {about ? <div className='subtle' onClick={() => navigate('/about')}>About</div> : 'Hello.'}
        </div>
        <div 
          className='title-text emphasis'
          onMouseOver={() => setWork(true)} 
          onMouseLeave={() => setWork(false)} 
        >
          {work ? <div className='subtle' onClick={() => navigate('/work')}>Work</div> : 'I am'}
        </div>
        <div 
          className='title-text emphasis'
          onMouseOver={() => setContact(true)} 
          onMouseLeave={() => setContact(false)} 
        >
          {contact ? <div className='subtle' onClick={() => navigate('/contact')}>Contact</div> : 'Lance'}
        </div>
      </div>
      <div className='title-image'>
        <img className='my-image' src={myImage}/>
      </div>
    </section>
  )
}

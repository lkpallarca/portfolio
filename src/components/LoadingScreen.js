import React, { useState, useEffect } from 'react'
import logo from '../assets/my-logo.png';

export default function LoadingScreen() {
  const [loading, setLoading] = useState('');

  useEffect(() => {
    setLoading('hide')
  }, [])

  return (
    <div className='loading-screen'>
      <div className={`left ${loading}`}></div>
      <div className={`right ${loading}`}>
        <img src={logo} />
      </div>
    </div>
  )
}

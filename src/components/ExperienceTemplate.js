import React from 'react';

export default function ExperienceTemplate({ position, company, location, title, date }) {
  return (
    <div className='experience'>
      <div className={position === 'left' ? 'left' : 'none'}>
        <p className='exp-company'>{company}</p>
        <p className='exp-info'>{location}</p>
        <p className='exp-info'>{title}</p>
        <p>{date}</p>
      </div>

      <div className={position === 'right' ? 'right' : 'none'}>
        <p className='exp-company'>{company}</p>
        <p className='exp-info'>{location}</p>
        <p className='exp-info'>{title}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}

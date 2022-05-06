import React from 'react';

export default function ProjectTemplate({ link, snip, title, body, foot }) {
  return (
    <div className='project'>
      <a href={link} target='blank'><img className='project-image' src={snip}/></a>
      <div className='project-infogroup'>
        <h4>{title}</h4>
        <p>
          {body}
        </p>
        <span>
          {foot}
        </span>
      </div>
    </div>
  )
}

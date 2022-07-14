import React from 'react';
import getResumeLink from '../utils/resumeLink';
import HomeTrigger from './HomeTrigger';
import MyEmail from './MyEmail';

export default function AboutScreen() {
  return (
    <section className='about-screen'>
      <p className='about-title'>About me</p>
      <div className='about-body'>
        <h3>
          Hello! My name is Lance, and I enjoy being involved with things that live on the internet.
        </h3>
        <div>
          As a graduate of <a href='https://www.patts.edu.ph/' target='blank'>Aeronautical Engineering,</a> I have always been fascinated by the advancement of technology and afraid of being left behind.
          Because of this, I dived into the world of software engineering, and it turns out that I am a pretty darn fast learner! I love collaborations and I hope to be involved with more in the future.
        </div>
        <div>
          Fast forward to today, I've had the opportunity to be taken under the wing of an awesome <a href='https://www.avionschool.com/' target='blank'>bootcamp</a>. My main focus these days is learning more and absorbing as much as I can from all forms of education.
        </div> 
        <div>
          Here are some of the languages and tools that I have learned/am learning throughout my journey as an aspiring software developer.
        </div>
        <div className='about-list'>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Sass</li>
            <li>Tailwind Css</li>
            <li>Javascript (ES6+)</li>
            <li>React</li>
          </ul>
          <ul>
            <li>Git</li>
            <li>Heroku</li>
            <li>Ruby</li>
            <li>Postgresql</li>
            <li>Ruby on Rails</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          More info? Here's my <a href={getResumeLink()} target='blank'>resume</a>.
        </div>
      </div>
      <MyEmail/>
      <HomeTrigger/>      
    </section>
  )
}

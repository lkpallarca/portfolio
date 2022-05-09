import React from 'react'
import HomeTrigger from './HomeTrigger'

export default function ContactScreen() {
  return (
    <section className='contact-screen'>
      <p className='contact-title'>Get in touch</p>
      <div className='contact-body'>
        <h3>
          Whether you are a representative of a company, or just an awesome developer looking to collaborate,
           you can always message me. Let's talk!
        </h3>
        <div className='contact-body-info'>
          You can press the button below to be redirected to your device's default mailing app.
        </div>
        <button className='send-message'>Send a message</button>
        <div>
          Let's get social
        </div>
        <p>
          You can also find and connect with me on these social platforms.
        </p>
        <div className='social-group'>
          <a href='https://www.facebook.com/LKPallarca/' target='blank'><button className='socials fb'>Facebook</button></a>
          <a href='https://linkedin.com/in/lkpallarca' target='blank'><button className='socials linked'>LinkedIn</button></a>
          <a href='https://github.com/lkpallarca' target='blank'><button className='socials git'>GitHub</button></a>
        </div>
      </div>
      <HomeTrigger/>
    </section>
  )
}

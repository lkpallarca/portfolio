import React, { useState } from 'react'
import HomeTrigger from './HomeTrigger'

export default function ContactScreen() {
  const [show, setShow] = useState(false);

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
        <a href='mailto:kencepallarca@gmail.com'><button onClick={() => setShow(true)} className='send-message'>Send a message</button></a>
        <p className={show ? 'sent show' : 'sent'}>Please wait for your default mailing app to load, Thank you for reaching out!</p>
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

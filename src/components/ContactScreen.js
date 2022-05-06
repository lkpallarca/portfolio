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
      </div>
      <HomeTrigger/>
    </section>
  )
}

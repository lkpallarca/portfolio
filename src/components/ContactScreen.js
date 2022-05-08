import React, { useState } from 'react'
import axios from 'axios'
import HomeTrigger from './HomeTrigger'

var _ = require('lodash');

export default function ContactScreen() {
  const config = {
    cors: 'https://cors-anywhere.herokuapp.com',
    formUrl: 'https://docs.google.com/forms/d/e/https://docs.google.com/forms/u/0/d/e/1FAIpQLSclulAcCDmOe9VzD78Lml0qgdKOJm7QZE7AXduNP0uIgvF-lg/formResponse'
  }

  const [information, setInformation] = useState(
    {
    name: {id: 927954881, value: ''},
    email: {id: 1135380900, value: ''},
    message: {id: 1366555900, value: ''}
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData= new FormData();
    _.map(information, (item) => {
      formData.append(`entry.${item.id}`, item.value)
    });

    await axios({
      url: `${config.cors}${config.formUrl}`,
      method: 'post',
      data: formData,
      responseType: 'json'
    })
    .then(res => {
      console.log('response', res);
    })
    .catch(err => {
      console.log('err', err);
    })
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    information[name].value = value;
    setInformation(information);
  }

  return (
    <section className='contact-screen'>
      <p className='contact-title'>Get in touch</p>
      <div className='contact-body'>
        <h3>
          Whether you are a representative of a company, or just an awesome developer looking to collaborate,
           you can always message me. Let's talk!
        </h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='Name'>Name</label>
            <br></br>
            <input onChange={(e) => handleChange(e)} type='text' name='name' id='name' required/>
          </div>
          <div>
            <label htmlFor='Email'>Email</label>
            <br></br>
            <input onChange={(e) => handleChange(e)} type='email' name='email' id='email' required/>
          </div>
          <div>
            <label htmlFor='Message'>Message</label>
            <br></br>
            <input onChange={(e) => handleChange(e)} type='text' name='message' id='message' required/>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <HomeTrigger/>
    </section>
  )
}

import React from 'react';
import HomeTrigger from './HomeTrigger';
import MyEmail from './MyEmail';
import bank from '../assets/banking-app.png';
import slack from '../assets/messaging-app.png';
import ProjectTemplate from './ProjectTemplate';

export default function WorkScreen() {
  const projects = [
    {
      link : 'https://github.com/lkpallarca/slack-clone-app',
      snip : slack,
      title : 'Messaging App Clone',
      body : 'This is a hybrid clone between whatsapp, slack, and messenger. Elements from the references are infused together, featuring API integrations and pseudo live chatting.',
      foot : 'Features my implementation of API requests and handling of fetched data.'
    },
    {
      link : 'https://github.com/lkpallarca/Banking-app',
      snip : bank,
      title : 'Banking App',
      body : 'This is a comprehensive banking simulation featuring admin access, account categories and budgeting options.',
      foot : 'Features my use of local storage, and also experiencing collaboration with a partner developer.'
    }
  ];

  return (
    <section className='work-screen'>
      <p className='work-title'>My work</p>
      <div className='work-body'>
        <h3>
          Here are my work experiences and some of my projects.
        </h3>
        {projects.map(each => 
          (<ProjectTemplate
            link={each.link}
            snip={each.snip}
            title={each.title}
            body={each.body}
            foot={each.foot}
          />)
        )}
      </div>
      <MyEmail/>
      <HomeTrigger/>
    </section>
  )
}

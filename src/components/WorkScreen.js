import React from 'react';
import HomeTrigger from './HomeTrigger';
import MyEmail from './MyEmail';
import bank from '../assets/banking-app.png';
import slack from '../assets/messaging-app.png';
import ProjectTemplate from './ProjectTemplate';
import ExperienceTemplate from './ExperienceTemplate';

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

  const experiences = [
    {
      position: 'left',
      company: 'DILG & DOH',
      location: 'Brgy. San Isidro, Parañaque',
      title: 'COVID-19 Frontliner Contact Tracer',
      date: 'Aug - Nov 2021'
    },
    {
      position: 'right',
      company: 'Alorica',
      location: 'Alphaland, Makati',
      title: 'Technical Support Representative',
      date: 'Nov - Jan 2020'
    },
    {
      position: 'left',
      company: 'Civil Aviation Authority of the Philippines',
      location: 'MIA Road, Pasay',
      title: 'Aeronautical Mobile Station, Air Traffic Service On the Job Trainee',
      date: 'April - July 2019'
    }
  ]

  return (
    <section className='work-screen'>
      <p className='work-title'>My work</p>
      <h3>
        Here are my featured projects and a summary of my work experiences.
      </h3>
      <div className='work-projects'>
        <h3>
          Featured Projects
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
      <div className='work-experiences'>
        <h3>
          Experiences
        </h3>
        {experiences.map(each => 
          (<ExperienceTemplate
            position={each.position}
            company={each.company}
            location={each.location}
            title={each.title}
            date={each.date}
          />)
        )}
      </div>
      <div className='resume'>
        More info? Here's my <a href='https://drive.google.com/uc?export=download&id=1X-HxwM5oHXAkwaUXer9JeASETENeXD1F' target='blank'>resume</a>.
      </div>
      <MyEmail/>
      <HomeTrigger/>
    </section>
  )
}

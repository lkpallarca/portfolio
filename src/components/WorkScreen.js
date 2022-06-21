import React from 'react';
import HomeTrigger from './HomeTrigger';
import MyEmail from './MyEmail';
import ProjectTemplate from './ProjectTemplate';
import ExperienceTemplate from './ExperienceTemplate';
import getResumeLink from '../utils/resumeLink';
import projects from '../utils/projects';
import experiences from '../utils/experiences';

export default function WorkScreen() {
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
        {projects().map(each => 
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
        {experiences().map(each => 
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
        More info? Here's my <a href={getResumeLink()} target='blank'>resume</a>.
      </div>
      <MyEmail/>
      <HomeTrigger/>
    </section>
  )
}

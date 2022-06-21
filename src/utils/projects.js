import bank from '../assets/banking-app.png';
import slack from '../assets/messaging-app.png';
import dates_and_tasks from '../assets/dates-and-tasks-app.png';

export default function projects() {
  const projects = [
    {
      link : 'https://github.com/lkpallarca/dates-and-tasks',
      snip : dates_and_tasks,
      title : 'Dates and Tasks',
      body : 'A backend Journal / Calendar app that serves as a way for users to document their tasks chronologically. Users can also categorize their tasks per day for extra convenience.',
      foot : 'Features my initial exposure to integration tests and BDD/TDD approach. Includes devise™, simple_calendar™, and rspec-rails™ gems. Developed using Ruby on Rails.'
    },
    {
      link : 'https://github.com/lkpallarca/slack-clone-app',
      snip : slack,
      title : 'Messaging App Clone',
      body : 'This is a hybrid clone between whatsapp, slack, and messenger. Elements from the references are infused together, featuring API integrations and pseudo live chatting.',
      foot : 'Features my implementation of API requests and handling of fetched data. Developed using React.'
    },
    {
      link : 'https://github.com/lkpallarca/Banking-app',
      snip : bank,
      title : 'Banking App',
      body : 'This is a comprehensive banking simulation featuring admin access, account categories and budgeting options.',
      foot : 'Features my use of local storage, and also experiencing collaboration with a partner developer. Developed using React.'
    }
  ];
  
  return projects;
}

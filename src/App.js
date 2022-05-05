import { Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import AboutScreen from './components/AboutScreen';
import WorkScreen from './components/WorkScreen';
import ContactScreen from './components/ContactScreen';
import './css/index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <WelcomeScreen/> }/>
        <Route path='/about' element={ <AboutScreen/> }/>
        <Route path='/work' element={ <WorkScreen/> }/>
        <Route path='/contact' element={ <ContactScreen/> }/>
      </Routes>
    </div>
  );
}

export default App;

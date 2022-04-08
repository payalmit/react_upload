
import './App.css';

import {Education} from './components/Education'
import {Courses_internships} from './components/Courses_internships'
import {Skills} from './components/Skills'
import { Projects } from './components/Projects';
import { Intro } from './components/intro';


function App() {
  return (
   <div >
      <Intro/>
      <Education/>
      <Courses_internships/>
      <Skills/>
      <Projects/>

     
    </div>
     
    
  );
}

export default App;

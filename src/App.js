import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Biography from './components/Biography';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>陳宇凱</h1>
          <p>軟體工程師 | AR/VR 開發專家 | Android 應用程式開發</p>
        </div>
      </header>

      <div className="container">
        <div className="content">
          <PersonalInfo />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Biography />
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
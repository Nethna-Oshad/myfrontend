import React from 'react';
import Header from './components/Header';


function App() {
  return (
    <div>
      
      <Header />
      <section id="home" className="vh-100 d-flex align-items-center justify-content-center bg-primary text-white">
        <h1>Welcome to My Portfolio</h1>
      </section>
      <section id="about" className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <h2>About Me</h2>
      </section>
      <section id="projects" className="vh-100 d-flex align-items-center justify-content-center bg-secondary text-white">
        <h2>My Projects</h2>
      </section>
      <section id="skills" className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
        <h2>My Skills</h2>
      </section>
      <section id="contact" className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <h2>Contact Me</h2>
      </section>
    </div>
      
   
  );
}

export default App;

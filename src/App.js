import React, {useState} from 'react';
import {ExperienceTimeline, EducationTimeline} from './components/TimeLine';
import cover from './assets/cover.jpg';
import avatar from './assets/avatar.jpg';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { smoothScroll } from './scroll'
import './App.css';

function App() {
  const [header, setHeader] = useState('hello');
  return (
    <div id="hello" className="App">
      <div className="header-container">
        <ul>
          <li onClick={() => setHeader('hello')} className={header === "hello" ? "underline" : null}><a onClick={() => smoothScroll.scrollTo('hello')}>Hello</a></li>
          <li onClick={() => setHeader('about')} className={header === "about" ? "underline" : null}><a onClick={() => smoothScroll.scrollTo('about')}>About</a></li>
          <li onClick={() => setHeader('skills')} className={header === "skills" ? "underline" : null}><a onClick={() => smoothScroll.scrollTo('skills')}>Skills</a></li>
          <li onClick={() => setHeader('projects')} className={header === "projects" ? "underline" : null}><a onClick={() => smoothScroll.scrollTo('projects')}>Projects</a></li>
          <li onClick={() => setHeader('contact')} className={header === "contact" ? "underline" : null}><a onClick={() => smoothScroll.scrollTo('contact')}>Contact</a></li>
        </ul>
      </div>
      <div className="cover-container">
        <img src={cover} className="cover-img" />
        <div className="cover-content">
          <img src={avatar} className="avatar" />
          <h1 className="greet"><i> Hello, Hola,नमस्ते !</i></h1>
          <h1 className="animated animated-text"><i>
            <span className="mr-2">Welcome, I'm</span>
            <div className="animated-info">
              <span className="animated-item">Mriganshu Singh</span>
              <span className="animated-item">Full Stack Developer</span>
              <span className="animated-item">Software Engineer</span>
            </div></i>
          </h1>
          <h3 className="role"><i>Full Stack Engineer with an experience of around a couple of years. Skilled in React, React Native, Javascript, Core Java, and Back-End Web Development. Strong engineering professional with a Bachelor of Technology - BTech focused in Computer Science from Biju Patnaik University of Technology, Odisha. Still a beginner but always ready for new challenges. </i></h3>
          <button className="btn">Know More</button>
        </div>
      </div>
      <div id="about" className="section-heading">
        <h1 className="animated-heading animated-text">
          <span>About</span>
          <div className="animated-head">
            <span className="animated-item-head">Me.</span>
            <span className="animated-item-head">Experience.</span>
            <span className="animated-item-head">Education.</span>
          </div>
        </h1>
      </div>
      <div className="section-container experience">
        <div className="timeline-container">
          <div className="timeline-item">
            <h3>Experiences</h3>
            <ExperienceTimeline />
          </div>
          <div className="timeline-item">
            <h3>Educations</h3>
            <EducationTimeline />
          </div>
        </div>
      </div>
      <div id="skills" className="section-heading">
        <h1 className="animated-heading animated-text">
          <span>My</span>
          <div className="animated-head">
            <span className="animated-item-head">Skills.</span>
            <span className="animated-item-head">Expertise.</span>
            <span className="animated-item-head">Techs.</span>
          </div>
        </h1>
      </div>
      <div className="section-container">
        <Skills />
      </div>
      <div id="projects" className="section-heading">
        <h1 className="animated-heading animated-text">
          <span>My</span>
          <div className="animated-head">
            <span className="animated-item-head">Projects.</span>
            <span className="animated-item-head">Works.</span>
            <span className="animated-item-head">Portfolio.</span>
          </div>
        </h1>
      </div>
      <div className="section-container">
        <Projects />
      </div>
      <div id="contact" className="section-heading">
        <h1 className="animated-heading animated-text">
          <span>Let's</span>
          <div className="animated-head">
            <span className="animated-item-head">Contact.</span>
            <span className="animated-item-head">Connect.</span>
            <span className="animated-item-head">Meet.</span>
          </div>
        </h1>
      </div>
      <div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

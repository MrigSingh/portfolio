import React from 'react';
import Button from '@material-ui/core/Button';
import synquiz from '../assets/synquiz.png';
import itunes from '../assets/itunes.png';
import graphql from '../assets/graphql-1.png';
import './styles.css';

function Projects() {
  return (
    <>
    <div className="item-container">
      <div className="avatar-container">
        <img src={synquiz} className="avatar-img" />
      </div>
      <div className="details-container">
        <h1>Synquiz - Your Technical Buddy</h1>
        <p>A full-stack application (MERN) that can be used by students to grasp new technologies and language used in current industry that for FREEEEEEE. This platform comprises of best videos tutorial along with quizzes to track their progress while learning.</p>
        <h3 className="tech">Technologies used:</h3>
        <div className="tech-container">
          <div className="tech-item">React</div>
          <div className="tech-item">Node</div>
          <div className="tech-item">Express</div>
          <div className="tech-item">MongoDB</div>
        </div>
        <br />
        <Button variant="outlined" color="primary">
          Check Code
        </Button>
        <div className="gap" />
        <Button variant="outlined" color="primary">
          Check Live
        </Button>
      </div>
    </div>
    <br />
    <div className="item-container">
      <div className="details-container-right showInDesktop">
        <h1>iTunes Songs Search</h1>
        <p>This application has been integrated with iTunes API which returns the song queryed by user. Redux-thunk has been used for state management.</p>
        <h3 className="tech">Technologies used:</h3>
        <div className="tech-container">
          <div className="tech-item">React</div>
          <div className="tech-item">Redux</div>
        </div>
        <br />
        <Button variant="outlined" color="primary">
          Check Code
        </Button>
        <div className="gap" />
        <Button variant="outlined" color="primary">
          Check Live
        </Button>
      </div>
      <div className="avatar-container-right">
        <img src={itunes} className="avatar-img-right" />
      </div>
      <div className="showInMobile">
      <div className="details-container">
        <h1>iTunes Songs Search</h1>
        <p>This application has been integrated with iTunes API which returns the song queryed by user. Redux-thunk has been used for state management.</p>
        <h3 className="tech">Technologies used:</h3>
        <div className="tech-container">
          <div className="tech-item">React</div>
          <div className="tech-item">Redux</div>
        </div>
        <br />
        <Button variant="outlined" color="primary">
          Check Code
        </Button>
        <div className="gap" />
        <Button variant="outlined" color="primary">
          Check Live
        </Button>
      </div>
      </div>
    </div>
    <br />
    <div className="item-container">
      <div className="avatar-container">
        <img src={graphql} className="avatar-img" />
      </div>
      <div className="details-container">
        <h1>Books - Authors API</h1>
        <p>This small application provides GraphQL API for collections of books and authors which is build to demonstrate GraphQL using Node on backend and MongoDB as database.</p>
        <h3 className="tech">Technologies used:</h3>
        <div className="tech-container">
          <div className="tech-item">GraphQL</div>
          <div className="tech-item">Node</div>
          <div className="tech-item">Express</div>
          <div className="tech-item">MongoDB</div>
        </div>
        <br />
        <Button variant="outlined" color="primary">
          Check Code
        </Button>
        <div className="gap" />
        <Button variant="outlined" color="primary">
          Check Live
        </Button>
      </div>
    </div>
    </>
  )
}

export default Projects;

import React, { useState } from "react";
import { 
  Container
  } from 'reactstrap';



const Projects = () => {

    return (
        <>
        <Container>
          <h2>My Projects</h2>
            <ul className="examples">
                <li>
                    <h4 className="projectTitle">Get-A-Job</h4>
                    <p className="workLinks"><a href="https://get-a-job-fg15.onrender.com/" target="_blank"> Get-A Job</a></p>
                    <p className="projectDesc"> A job search tool I’ve built as a Flask App. Users create job searches, save job posts to their profile to apply to. AI is integrated to provide user feedback on job match as well as optimize job search.</p>
                </li>
                <li>
                    <h4 className="projectTitle">Who's Hungry?</h4>
                    <p className="workLinks"><a href="https://github.com/natesmith21/whos-hungry" target="_blank">GitHub</a></p>
                    <p className="projectDesc"> My final project in my certificate. This simple app connects to the SpoonacularAPI to allow users to search for recipes or browse by cuisine type </p>
                </li>
            </ul>
        </Container>
        </>
    )
}

export default Projects;
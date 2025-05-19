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
                    <h4 className="projectTitle">Who's Hungry?</h4>
                    <p className="workLinks"><a href="https://github.com/natesmith21/whos-hungry" target="_blank">GitHub</a> | <a href="https://whos-hungry-frontend.onrender.com/" target="_blank">Who's Hungry?</a></p>
                    <p className="projectDesc"> Used React, Node, Express, PostgreSQL, and ReactStrap, to build a webpage to function as a recipe finder. </p>
                </li>
                <li>
                    <h4 className="projectTitle">Jobly</h4>
                    <p className="workLinks"><a href="https://github.com/natesmith21/react-jobly-frontend" target="_blank">GitHub</a> | <a href="https://react-jobly-frontend-ki3b.onrender.com/" target="_blank">Jobly</a></p>
                    <p className="projectDesc"> I was provided a backend and filler data, then used React, Node, Express, PostgreSQL, and ReactStrap to build a job search platform. </p>
                </li>
                <li>
                    <h4 className="projectTitle">Database DJ</h4>
                    <p className="workLinks"><a href="https://github.com/hatchways-community/database-dj-672e1e3b746348dc9ac57f1a0675c68a" target="_blank">GitHub</a> | </p>
                    <p className="projectDesc"> I created a simple Flask App using Django where users can create playlists. </p>
                </li>
                <li>
                    <h4 className="projectTitle">Github: natesmith21</h4>
                    <p className="workLinks"><a href="https://github.com/natesmith21" target="_blank">GitHub</a> | </p>
                    <p className="projectDesc"> Feel free to check out any of my other work I'm done on my GitHub page. Currently, it's full of homework assignments from my certificate program. </p>
                </li>
            </ul>
        </Container>
        </>
    )
}

export default Projects;
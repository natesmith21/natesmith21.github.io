import React from "react";
import './resume2.css'
import headshot from '../assets/nate_lake_canada.png'
import { Container, Col } from "reactstrap";
import { Link } from "react-router-dom";
import smithn_resume from '../assets/smithn_resume.pdf'


const Resume = () => {

    return (
        <div className="resume">
        <Container fluid="md" className="intro">
         <img src={headshot} id="profile_pic" alt="Nate Smith Headshot" />
         <div>
            <h1>Nathan Smith</h1>
            <a className="downloadLink" href={smithn_resume} target="_blank" >Download Resume</a>
         </div>
        </Container>
        <Container className="skills">
            <h2>Core Competencies & Technical Skills</h2>
            <ul>
                <li>
                    <span className="skillGroup">Admissions Marketing Strategy:</span> Integrated campaign development, lifecycle messaging, audience segmentation, enrollment funnel strategy, student-centered communications design
                </li>
                <li>
                    <span className="skillGroup">Enrollment Analytics & Reporting:</span> Funnel analytics, dashboard design, data-informed communications optimization, SQL, Excel, Power BI, Tableau
                </li>
                <li>
                    <span className="skillGroup">Software:</span> HTML/CSS, Liquid Markup, Python (Flask), JavaScript, Node.js, React, Bootstrap, PicoCSS, PostgreSQL, Git/GitHub
                </li>
                <li>
                    <span className="skillGroup">Leadership & Collaboration:</span> Staff supervision, cross-unit coordination, project planning, stakeholder management, Agile/Scrum, Jira, Microsoft Planner
                </li>
                <li>
                    <span className="skillGroup">Tools:</span> SFTP, Git/GitHub, GitHub Desktop
                </li>
            </ul>
        </Container>

        <Container className="experience">
            <h2>Experience</h2>
            <h3 className="employer">YMCA of the Inland Northwest</h3>
            <p className="dates">Spokane, WA -- June 2025 - Present</p>
            <ul className="examples">
                <li>
                    <h4 className="exampleTitle">Facilities Technician</h4>
                    <ul className="examplesExp">
                        <li>Independently scope and execute facility maintenance projects at the South Branch</li>
                        <li>Also work with CEO as the Software Development Project Manager, assistnating with Monday.com configuration and programming projects</li>
                    </ul>
                </li>
            </ul>
            <h3 className="employer">Queens University of Charlotte</h3>
            <p className="dates">Charlotte, NC -- July 2017 - June 2024</p>
            <ul className="examples">
                <li>
                <h4 className="exampleTitle">Assistant Director for Enrollment Operations</h4>
                    <ul className="examplesExp">
                        <li>
                       Maintained data pipelines between Admissions, Student Financial Services, the Registrar’s Office and Institutional Research
                        </li>
                        <li>
                       Created and maintained executive level reports for the President and VPs to track the admissions funnel   
                        </li>
                        <li>
                        Led yearly ‘cycle-prep’, preparing Applications, Events, Forms, and Portals for the next recruitment class
                        </li>
                        <li>
                        Collaborated with marketing to deliver timely, informative recruitment messaging to prospective students and their families
                        </li>
                    </ul>
                </li>
                <li>
                <h4 className="exampleTitle">Admissions Operations Analyst</h4>
                    <ul className="examplesExp">
                        <li>Created first custom application portal to dynamically display relevant information to prospective students</li>
                        <li>Overhauled Nursing School application, eliminating the need for 2 separate applications. This improved the completed application rate and simplified the review process. Our team was able to fill the nursing program and begin holding a waitlist of admitted students. 
                        </li>
                        <li>Created an on-demand year to date year-over-year funnel report
                        </li>
                    </ul>
                </li>
                <li>
                    <h4 className="exampleTitle">Admissions Counselor</h4>
                </li>
            </ul>
        </Container>

        <Container>
            <h2>Education</h2>
            <ul className="examples">
                <li>
                    <h4 className="exampleTitle">Software Engineering Certificate</h4>
                    <p className="dates">Gonzaga University -- 2025</p>
                </li>
                <li>
                     <h4 className="exampleTitle">Master of Business Administration</h4>
                     <p className="dates">Queens University of Charlotte -- 2020</p>
                </li>
                <li>
                    <h4 className="exampleTitle">Bachelor of Arts in     Communication</h4>
                    <p className="dates">Queens University of Charlotte -- 2017</p>
                </li>
            </ul>
        </Container>
        <Container>
            <h2><a href="/projects" id="projects">Projects</a></h2>
        </Container>
        <Container>
            <h2>Additional Information</h2>
            <ul className="examples">
                <li>
                    <h4 className="exampleTitle">Seasonal Brush Cut Team</h4>
                    <p className="dates">Mt. Spokane Ski and Snowboard Park</p>
                </li>
                <li>
                    <h4 className="exampleTitle">NCAA DII Athlete XC/Track & Field</h4>
                    <p className="dates">Queens University of Charlotte</p>
                </li>
                <li>
                    <h4 className="exampleTitle">Spanish Speaker</h4>
                    <p className="dates">Intermediate level</p>
                </li>
            </ul>
        </Container>
        </div>
    )
}

export default Resume;
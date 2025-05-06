import React from "react";
import './resume2.css'
import headshot from '../assets/nate_lake_canada.png'
import { Container, Col } from "reactstrap";

const Resume2 = () => {

    return (
        <>
        <Container fluid="md" className="intro">
         <img src={headshot} id="profile_pic" alt="Nate Smith Headshot" />
         <h1>Nathan Smith</h1>
         <h2>Summary</h2>
         <p>
            I'm an ambitious problem solver and sales-ops professional seeking to build on my experience with a Software Developer Certificate. My combination MBA + Cert + work experience clearly makes me a rare breed.
         </p>
        </Container>
        <Container fluid="md">
            <h2>Skills + Work Experience</h2>
            <Container className="experience">
                <Col>
                <h3 className="experienceTitle">Slate @ QUoC</h3>
                <p className="dates">07/2017 - 06/2024</p>
                <p>
                    I worked in the Admissions office at Queens University of Charlotte from July 2017 until June 2024. I was breifly an Admssions counselor there, but I worked predominately on the Operations Team. We used Slate by Technolutions as our CRM. While there I had several job titles, but my role was consistent - to be our office's Slate Expert.
                </p>
                <ul>
                    <li>
                        Database Configuration and Management
                        <p className="expDesc">
                            Over my time at Queens I became an integral part to our team of Slate power-users. I lead several projects in both the undergraduate and graduate instances of Slate which required planning and creation of new fields. I became a trusted source for information due to my ability to quickly and accurately query our database. 
                        </p>
                        <ul className="expExamples">
                            <li>
                                Created new data fields, migrated data, removed depreciated fields, created retention policies inline with university policies
                            </li>
                            <li>
                                Internal and External Integrations
                                <p className="exampleDesc">
                                    I worked with IT on internal integrations with Jenzabar, PowerFAIDs, and ARMs. I also set up incoming dataflows from ACT, SAT, Rasie.Me, Niche. I created several daily reports which were shared with consultants via SFTP.
                                    </p>    
                            </li>
                            <li>
                                Created and Maintained Users + User Permissions
                            </li>
                        </ul>
                    </li>
                    <li>
                        Admissions Marketing Efforts
                        <p className="expDesc">
                            As a small instituion our Marketing Efforts greatly impacted our Enrollment.  Along with efforts to deliver marketing messages to students, I created several reports and dashboards to track our efforts. 
                        </p>
                        <ul className="expExamples">
                            <li>
                                Call Plans
                                <p className="exampleDesc">
                                    A main responsibilty of our Admissions Counselors was calling and connecting with students and thier familes. I worked with our Director and Assistant Directors to conceptualize the group of people to be called, as well create and organize the lists for our counselors to make the outreach. 
                                </p>
                            </li>
                            <li>
                                Email Plans + Execution
                                <p className="exampleDesc">
                                While working with marketing on our emails I became the expert for injecting Liquid Markup (a ruby module?) into our emails. Through working with our emails I began to learn HTML/CSS as I needed to make small adjustments to emails created in [the program name].
                                </p>
                            </li>
                            <li>
                                Portals
                                <p className="exampleDesc">
                                    As Slate continued to grow much of it's newest functionality worked with 'Portals'. These were small webpages where you could users with pertinent information. I implemented our first custom portal at Queens for our Undergraduate applicants. I also created portals for our Coaches on Campus to track student athlete progress, portals as landing pages for several Admissions events among others. 
                                </p>
                            </li>
                            <li>Engagement Scoring
                                <p className="exampleDesc">
                                    I two different scoring systems for student engagement. One calculated engagement across the last 7 days, it was intended to help counselors find students who were considering commiting to queens. The other had the goal of calculating student engagement across their entire lifetime in our database.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Application Processing
                        <p className="expDesc">
                            In our Undergraduate instance our office received around [X num] of applications each year across all semesters and programs. I helped plan, and maintain our workflows to eliminate barriers for student applicatins and allow our counselor team to efficently but throughlly review each application individually. 
                        </p>
                        <ul className="expExamples">
                            <li>
                                Reporting
                                <p className="exampleDesc">
                                    I created several applicaion funnel reports that were used daily by our VP and shared with the President.
                                </p>
                            </li>
                            <li>
                                Review Forms + Workflows
                                <p className="exampleDesc">
                                    In the Undergrad review process, Queens utilized a holistic review process. There were several required forms to accuratly review an app. I created our review forms and ensured they worked seemsly across reviewers and programs. 
                                </p>
                            </li>
                            <li>
                                Nursing Application 
                                <p className="exampleDesc">
                                    I designed and implemented a new app flow for our upper division nursing program. In doing so I streamlined the process from requiring two separate applications to 1 straightforward application. We improved our app complete rate. This program had ~[X] apps.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
                </Col>
                <Col>
                <h3 className="experienceTitle">Full Stack Engineering Cert</h3>
                <p className="dates">02/2024 - 04/2025</p>
                <p>
                    This was a self-paced program that I enrolled in to advance my career. At times this program tested my resiliance, but it allowed me to continue flexing and growing my research and problem-solving skills. This program gave me foundational software development skills that will allow me to join a team and be ready to grow into a high developer. 
                </p>
                <ul>
                    <li>
                        RESTful API Conventions
                        <p className="expDesc">
                          I interacted with several different public APIs. I also wrote my own simple APIs using RESTful conventions. 
                        </p>
                        <ul className="expExamples">
                            <li>
                                example1
                            </li>
                            <li>
                                example2
                                <p className="exampleDesc">
                                    example2 description
                                    </p>    
                            </li>
                        </ul>
                    </li>
                    <li>
                        JavaScript
                        <p className="expDesc">
                            Before we began learning how to create react applications, I was taught foundational JS skills
                        </p>
                    </li>
                    <li>
                        React
                        <p className="expDesc">
                            I have worked on several small React projects where I learned the basics of react. This has allowed me to both begin creating muscle memory of how to write react/JSX but also helped me begin to think about how to accomplish tasks in the most 'react-y' way. I built my applications useing Node.js and Express.js 
                        </p>
                    </li>
                    <li>
                        Flask/Django
                        <p className="expDesc">
                            Along with learning JS and React, my course spent time teaching us basics in Python, along with how to create a server in Flask and a front-end with Django. 
                        </p>
                    </li>
                    <li>
                        PostgreSQL
                        <p className="expDesc">
                            We used PostgreSQL in the certificate program. I have prior SQL experience from my time at Queens.
                        </p>
                    </li>
                    <li>
                        Git
                        <p className="expDesc">
                            I turned all of my assignements in via GitHub. I tracked my work via git locally, and pushed it to GitHub using both the Terminal and GitHub Desktop
                        </p>
                    </li>
                    <li>
                        Data Structures and Algorithms
                        <p className="expDesc">
                            This course spent time discussing different Data Structures and Algorithms.
                        </p>
                        <ul className="expExample">
                            <li>Big O Notation</li>
                            <li>Stacks and Queues</li>
                            <li>Sorting Algos - bubble sort, name others (better ones)</li>
                        </ul>
                    </li>
                </ul>
                </Col>
            </Container>
        </Container>
        <Container>
            <h2>Education</h2>
        </Container>
        </>
    )
}

export default Resume2;
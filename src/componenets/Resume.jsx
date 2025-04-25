import React from "react";
import './resume.css';
import headshot from '../assets/nate_lake_canada.png'

const Resume = () => {

    return (
        <>
        <div class="paper">
            <section class="intro_container">
                <div id="profile_pic"> 
                    <img src={headshot} alt="Nate Smith Headshot" />
                </div>
                <div id="name">
                    <h1>Nathan Smith</h1>
                </div>
            </section>
            <section class="summary">
                <h2>Summary</h2>
                <p>
                    I'm an ambitious problem solver and sales-ops professional seeking to build on my experience with a Software Developer Certificate. My combination MBA + Cert + work experience clearly makes me a rare breed.
                     </p>
            </section>
            <section class="experience">
                <h2>Experience</h2>
                <ul>
                    <li>
                        <h3>Assistant Director for Enrollment Operations</h3>
                        <ul>
                            <li>
                                Maintained several application portal 'views' for students completing their application, those who have been admited, and those who have commited to comeing, among other custom content. 
                            </li>
                            <li>
                                Collaborated with the Director and Assistant Directors of admissions to organize weekly call lists for admissions counselor outreach. 
                            </li>
                            <li>
                                Led our teams reporting efforts - I created and maintained our most crucial reports
                            </li>
                            <li>
                                I was the main point of contact for further data-analysis projects we worked on with thrid party partners where I sent and received data via API and SFTP and ensured we shared with them clean and accurate data
                            </li>
                            <li>
                                Created Documentation for work completed. 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>Admissions Operatins Analyst</h3>
                        <ul>
                            <li>
                                I self-taught myself advanced Query writing skills, and became our teams go-to for query writing. This included mass emails, data analysis efforts, and data sharing for national reporting.
                            </li>
                            <li>
                                Designed and implemented a simplified, streamlined Nursing School application, which reduced barriers for students, allowing us to grow our application pool and report more accuratly on nursing student applicants.
                            </li>
                            <li>
                                I self-taught myself simple HTML/CSS and created Queens's first custom student applicaion portal. This allowed us to share more dynamic, custom and branded information to students across different demographics. 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>Admissions Counselor</h3>
                        <ul>
                            <li>
                                I was the face and primary point of contact for 150-200 prospective Adult and Transfer Students per semester. In my best semester, I net 50 students across both populations.
                            </li>
                            <li>
                                My division also handled the Upper Division Nursing applictions, where we worked with the Nursing Department to admit the top students to a competitive program.
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section class="skills">
                <h2>Relevant Skills</h2>
                <ul>
                    <li>
                       SQL 
                    </li>
                    <li>
                       Python (Flask/Django)
                    </li>
                    <li>
                       JavaScript (Node, Express, React)
                    </li>
                    <li>
                        HTML/CSS
                    </li>
                    <li>
                       Slate by Technolutions
                       <ul>
                        <li>
                            UTM + Google Analytics 
                        </li>
                        <li>
                            Slate Ping
                        </li>
                       </ul>
                    </li>
                    <li>
                        Agile Environments -- using both scrum (jira) and kanban (trello, microsoft planner) 
                    </li>
                </ul>

            </section>
            <section class="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <h3>Gonzaga University</h3>
                        <ul>
                            <li>
                                Software Development Certificate - April 2025
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>Queens University of Charlotte</h3>
                    
                        <ul>
                            <li>
                                Master of Business Administration - 2020
                            </li>
                            <li>
                                Bachelor of Arts Communication - 2017
                            </li>
                            <li>4-year Cross Country + Track Athlete</li>
                        </ul>
                    </li>
                </ul>
            </section>
            </div>
        </>
    )
}

export default Resume;
import React from "react";
import './resume2.css'
import headshot from '../assets/nate_lake_canada.png'
import { Container, Col } from "reactstrap";

const Resume = () => {

    return (
        <div className="resume">
        <Container fluid="md" className="intro">
         <img src={headshot} id="profile_pic" alt="Nate Smith Headshot" />
         <h1>Nathan Smith</h1>
        </Container>
        <Container className="skills">
            <h2>Skills</h2>
            <ul>
                <li>
                    <span className="skillGroup">CRM Management:</span> Slate, Jenzabar, PowerFAIDs
                </li>
                <li>
                    <span className="skillGroup">Programming & Web Development:</span> JavaScript (Node.js, Express.js, React), Python (Flask, Django), HTML/CSS
                </li>
                <li>
                    <span className="skillGroup">Database & APIs:</span> SQL (PostgreSQL), RESTful APIs
                </li>
                <li>
                    <span className="skillGroup">Data & Reporting:</span> Querying, Data Migration, Funnel Reporting, Dashboards
                </li>
                <li>
                    <span className="skillGroup">Tools:</span> SFTP, Liquid Markup, Git/GitHub, GitHub Desktop
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

        <Container className="experience">
            <h2>Experience</h2>
            <h3 className="employer">Queens University of Charlotte</h3>
            <p className="dates">Charlotte, NC -- July 2017 - June 2024</p>
            <ul className="examples">
                <li>
                <h4 className="exampleTitle">Assistant Director for Enrollment Operations</h4>
                    <ul className="examplesExp">
                        <li>
                        Partnered with the Vice President and Director of Admissions to guide, track, and optimize office workflows using data-driven insights
                        </li>
                        <li>
                        Managed and maintained Slate CRM database tools, building enhanced functionality for application processing and communication   
                        </li>
                        <li>
                        Wrote queries to export data for internal stakeholders and external partners (via API and SFTP)
                        </li>
                        <li>
                        Maintained application portal views for applicants, admitted, and committed students, delivering custom content throughout the enrollment funnel
                        </li>
                        <li>Led reporting efforts, creating and maintaining mission-critical reports for leadership</li>
                        <li>Created and maintained documentation for all systems and reporting workflows
                        </li>
                        <li>Organized weekly call lists to support counselor outreach and enrollment initiatives</li>
                    </ul>
                </li>
                <li>
                <h4 className="exampleTitle">Admissions Operations Analyst</h4>
                    <ul className="examplesExp">
                        <li>Self-taught advanced Slate query writing; became the team's go-to expert for data pulls supporting mass communications, analysis, and national reporting</li>
                        <li>Designed and implemented a streamlined Nursing School application process, increasing application volume and improving reporting accuracy
                        </li>
                        <li>Developed Queens's first custom student application portal using HTML/CSS, enabling dynamic and branded content delivery to segmented student groups
                        </li>
                        <li>Supported data integration projects with IT and third-party partners, ensuring accuracy and consistency of exchanged datasets</li>
                    </ul>
                </li>
                <li>
                    <h4 className="exampleTitle">Admissions Counselor</h4>
                    <ul className="examplesExp">
                        <li>Served as primary point of contact for 150–200 prospective Adult and Transfer Students per semester, enrolling up to 50 students in a single term</li>
                        <li>Managed Upper Division Nursing applications, collaborating with the Nursing Department to admit top candidates into a competitive program</li>
                        <li>Delivered high-quality customer service through in-person meetings, phone consultations, and email communications</li>
                        <li>Represented Queens University at community colleges across North Carolina, building relationships with students and advising staff
                        </li>
                        <li>Reviewed and evaluated application materials as part of a holistic admissions process</li>
                    </ul>
                </li>
            </ul>
        </Container>
        </div>
    )
}

export default Resume;
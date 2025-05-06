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
         Versatile operations specialist with 7+ years of experience harnessing data, CRM systems, and process improvements to drive admissions and enrollment success. Proven track record of building scalable database solutions, leading reporting initiatives, and collaborating cross-functionally to solve complex problems. Just completed a Full Stack Software Development Certificate to deepen technical expertise and transition into a software development role. Unique blend of business acumen (MBA), technical proficiency, and analytical rigor — poised to contribute as a developer with strong operational insight.
         </p>
        </Container>
        <Container fluid="md">
            <h2>Experience</h2>
            <Container className="experience">
                <Col>
                <h3 className="experienceTitle">Queens University of Charlotte</h3>
                <p className="dates">Charlotte, NC -- July 2017 - June 2024</p>
                <ul>
                    <li>
                    <h3 className="experienceTitle">Assistant Director for Enrollment Operations</h3>
                        <ul className="expExamples">
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
                    <h3 className="experienceTitle">Admissions Operations Analyst</h3>
                        <ul className="expExamples">
                            <li>Self-taught advanced Slate query writing; became the team's go-to expert for data pulls supporting mass communications, analysis, and national reporting</li>
                            <li>Designed and implemented a streamlined Nursing School application process, increasing application volume and improving reporting accuracy
                            </li>
                            <li>Developed Queens's first custom student application portal using HTML/CSS, enabling dynamic and branded content delivery to segmented student groups
                            </li>
                            <li>Supported data integration projects with IT and third-party partners, ensuring accuracy and consistency of exchanged datasets</li>
                        </ul>
                    </li>
                    <li>
                        <h3 className="experienceTitle">Admissions Counselor</h3>
                        <ul className="expExamples">
                            <li>Served as primary point of contact for 150–200 prospective Adult and Transfer Students per semester, enrolling up to 50 students in a single term</li>
                            <li>Managed Upper Division Nursing applications, collaborating with the Nursing Department to admit top candidates into a competitive program</li>
                            <li>Delivered high-quality customer service through in-person meetings, phone consultations, and email communications</li>
                            <li>Represented Queens University at community colleges across North Carolina, building relationships with students and advising staff
                            </li>
                            <li>Reviewed and evaluated application materials as part of a holistic admissions process</li>
                        </ul>
                    </li>
                </ul>
                </Col>
            </Container>
        </Container>
        <Container>
            <h2>Education</h2>
            <h3 className="experienceTitle">Software Engineering Certificate</h3>
            <p className="dates">Gonzaga University -- 2025</p>
            <h3 className="experienceTitle">Master of Business Administration</h3>
            <p className="dates">Queens University of Charlotte -- 2020</p>
            <h3 className="experienceTitle">Bachelor of Arts in Communication</h3>
            <p className="dates">Queens University of Charlotte -- 2017</p>
        </Container>
        </>
    )
}

export default Resume2;
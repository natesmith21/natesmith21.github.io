import React from "react";
import { Route, Routes} from 'react-router-dom';
import Home from './Home';
import AboutMe from "./About";
import Resume from './Resume'
import Projects from "./Projects";
import ContactForm from "./Connect";

const Router = () => {

    return (
        <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/aboutme' element={<AboutMe />}/>
            <Route path='/resume' element={<Resume />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/connect' element={<ContactForm />}/>
        </Routes>
        </>
    )
}

export default Router;
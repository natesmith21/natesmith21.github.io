import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";

const Home = () => {

    return (
           <Container className='msg-area' fluid="lg">
             <h1 className="welcome-msg">Welcome to the Home Page for Nate Smith</h1>
             <Link className="enter-btn" to='/resume'>Enter</Link>
           </Container>
    )
}

export default Home;
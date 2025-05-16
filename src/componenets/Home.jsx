import React from "react";
import './home.css';
import { Container } from "reactstrap";

const Home = () => {

    return (
           <Container className='msg-area' fluid="lg">
             <h1 className="welcome-msg">Welcome to the Home Page for Nate Smith</h1>
           </Container>
    )
}

export default Home;
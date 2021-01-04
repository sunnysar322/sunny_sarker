import Navbar from 'react-bootstrap/Navbar';
import * as ReactBootStrap from 'react-bootstrap';
import React from 'react';
import { MDBIcon, MDBContainer } from 'mdbreact';

function NavbarPage(){
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
            <ReactBootStrap.Nav className="mr-auto">
                <ReactBootStrap.Nav.Link href="#me">About Me</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#exp">Work Experience</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#proj">Projects</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#ex">Extracurriculars</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav.Link href="https://www.linkedin.com/in/sunny-sarker/" className="mr-sm-2">
                <a id="nav_icon">
                    <MDBIcon fab icon="linkedin-in" />
                </a>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="https://github.com/sunnysar322/sunny_sarker" className="justify-content-end">
                <a id="nav_icon">
                    <MDBIcon fab icon="github" />
                </a>
            </ReactBootStrap.Nav.Link>
        </Navbar>
    )
}

export default NavbarPage;
import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';

import './Menu.css';

class Menu extends React.Component{
    render() {
        return(
            <Navbar bg="dark" id={'mainMenu'} expand="lg" variant="dark" className="justify-content-end">
                <Navbar.Brand href="#home">Textler</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto nav-items">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Overview</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;
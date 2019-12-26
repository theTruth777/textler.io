import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';

import './Menu.css';

class Menu extends React.Component{
    render() {
        return(
            <Navbar bg="dark" expand="lg" id={'mainMenu'} variant="dark">
                <Navbar.Brand href="#home">Swagnuke</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">What is Swagnuke</Nav.Link>
                        <Nav.Link href="#link">Markdown Overview</Nav.Link>
                        <Nav.Link href="#github">Fork me on Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;
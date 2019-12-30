import React from 'react';

import {Navbar, Nav, NavDropdown, Modal, Row, Col, Container, Button} from 'react-bootstrap';

import './Menu.css';

class Menu extends React.Component{

    callModalAbout() {
        const [show, setShow] = React.useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Nav.Link href="#home" onClick={handleShow}>What is Textler.IO</Nav.Link>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>What is Textler.IO</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Textler.IO is a simple markdown editor. It offers you
                        a direct preview of the markdown you have written.
                        You can also export your final result as an HTML or
                        PDF file.

                        If you don't know what the markdown syntax is,
                        checkout this <a target={'_blank'} href={'https://en.wikipedia.org/wiki/Markdown'}>Wikipedia article here</a>.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }


    render() {
        return(
            <Navbar bg="dark" expand="lg" id={'mainMenu'} variant="dark">
                <Navbar.Brand href="#home">Textler.IO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <this.callModalAbout />
                        <Nav.Link target={'_blank'} href="https://www.markdownguide.org/basic-syntax/">Markdown Overview</Nav.Link>
                        <Nav.Link target={'_blank'} href="https://github.com/theTruth777/textler.io">Fork me on Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;
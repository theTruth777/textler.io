import React, { Fragment, Component } from 'react';

import {
    Navbar,
    Nav,
    Modal,
    Button
} from 'react-bootstrap';

import './Menu.css';

class Menu extends Component {

    callModalAbout() {
        const [show, setShow] = React.useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <Fragment>
                <Nav.Link active={false} onClick={handleShow}>What is textler.io</Nav.Link>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>What is textler.io</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        textler.io is a simple markdown editor. It offers you
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
            </Fragment>
        );
    }


    render() {
        return(
            <Navbar bg="dark" expand="sm" id={'mainMenu'} variant="dark">
                <Navbar.Brand href="#home">textler.io</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <this.callModalAbout />
                        <Nav.Link active={false}  target={'_blank'} href="https://www.markdownguide.org/basic-syntax/">Markdown Overview</Nav.Link>
                        <Nav.Link active={false}  target={'_blank'} href="https://github.com/theTruth777/textler.io">Fork me on Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;
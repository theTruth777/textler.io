import React, { Component } from 'react';
import './Footer.css';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render() {
        return(
            <Row className="fixed-bottom">
                <Col id={'footer'}>
                    <div className="d-flex justify-content-center align-bottom">
                        <a href="https://github.com/EraTeam">
                            <FontAwesomeIcon icon={faGithubSquare} className="icon"/>                        
                        </a>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Footer;
import React, { Component } from 'react';
import './Footer.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {observer} from "mobx-react";

const Footer = observer(class Footer extends Component {
    render() {
        return(
            <Row id={'footer'}>
                <Col sm>
                    <div className="d-flex justify-content-center">

                        {/*TODO: This is just a placeholder until the real footer is ready */}
                        <div className={'footer-content'}>
                            Characters: {this.props.store.characterCount} |
                            Words: {this.props.store.wordsCount}
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
});

export default Footer;
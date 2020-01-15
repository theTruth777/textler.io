import React, { Component } from 'react';
import './Footer.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends Component {
    render() {
        return(
            <Row id={'footer'}>
                <Col sm>
                    <div className="d-flex justify-content-center">

                        {/*TODO: This is just a placeholder until the real footer is ready */}
                        <div style={{height: "30px"}} />

                    </div>
                </Col>
            </Row>
        );
    }
}

export default Footer;
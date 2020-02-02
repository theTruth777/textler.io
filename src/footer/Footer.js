import React, {Component} from 'react';
import './Footer.css';
import { Row, Col } from 'react-bootstrap';

import { observer } from 'mobx-react';

const Footer = observer(class Footer extends Component {
  render() {
    return (
        <Row id={'footer'}>
          <Col sm>
            <div className={'d-flex justify-content-center'}>
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
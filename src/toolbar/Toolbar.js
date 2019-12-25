import React from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Toolbar extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Row>
                <Col sm>
                    <ButtonToolbar>
                        <DropdownButton size="sm" as={ButtonGroup} title="Download as..." id="bg-nested-dropdown" variant="success">
                            <Dropdown.Item eventKey="1" onClick={() => this.downloadAsMarkdown()}>Markdown</Dropdown.Item>
                            <Dropdown.Item eventKey="2">HTML</Dropdown.Item>
                            <Dropdown.Item eventKey="3">PDF</Dropdown.Item>
                        </DropdownButton>

                        <Button variant="dark" size="sm" className={'button-style'} >
                            Save session
                        </Button>

                        <Button variant="danger" size="sm" className={'button-style'} onClick={() => {this.resetEditor()}}>
                            Reset document
                        </Button>

                    </ButtonToolbar>

                </Col>
                <Col sm>
                    Word Count
                </Col>
            </Row>
        );
    }


    downloadAsMarkdown() {
        let text = this.props.markdownValue;
        let filename = 'document.md';
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    resetEditor(){
        this.props.setEditorState('', '');
    }
}

export default Toolbar;
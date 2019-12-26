import React from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import '../Editor.css'

class Toolbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {documentName: 'Untitled Document'};
        this.documentNameInput = React.createRef();
    }

    render(){
        return(
            <Row>
                <Col sm>
                    <ButtonToolbar>
                        <DropdownButton size="sm" as={ButtonGroup} title="Download as..." id="bg-nested-dropdown" variant="success">
                            <Dropdown.Item eventKey="1" onClick={() => this.downloadAsMarkdown()}>Markdown</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={() => this.downloadAsHtml()}>HTML</Dropdown.Item>
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
                    <Form.Control
                        type="text"
                        value={this.state.documentName}
                        onChange={() => {this.setDocumentName()}}
                        ref={this.documentNameInput}
                        className={'document-name'}
                    />
                </Col>
            </Row>
        );
    }

    setDocumentName(){
        this.setState({documentName: this.documentNameInput.current.value});
    }

    downloadAsHtml(){
        const text = this.props.htmlValue;
        const filename = this.state.documentName;
        this.downloadFile(text, filename);
    }

    downloadAsMarkdown() {
        const text = this.props.markdownValue;
        const filename = this.state.documentName;
        this.downloadFile(text, filename);
    }

    downloadFile(text, filename){
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
        localStorage.removeItem('markdownValue');
    }
}

export default Toolbar;
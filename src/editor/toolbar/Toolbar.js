import React, { Component } from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import '../Editor.css'

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {documentName: ''};
        this.documentNameInput = React.createRef();
        this.defaultDocumentName = 'Untitled Document';
    }

    componentDidMount() {
        if (localStorage.getItem("documentName") !== ''){
            this.setState({documentName: localStorage.getItem("documentName")});
            return;
        }

        this.setState({documentName: this.defaultDocumentName});
        localStorage.setItem('documentName', this.defaultDocumentName);
    }

    setDocumentName(){
        this.setState({documentName: this.documentNameInput.current.value});
        localStorage.setItem('documentName', this.documentNameInput.current.value);
    }

    downloadAsHtml(){
        const text = this.props.htmlValue;
        const filename = `${this.state.documentName}.html`;
        this.downloadFile(text, filename);
    }

    downloadAsMarkdown() {
        const text = this.props.markdownValue;
        const filename = `${this.state.documentName}.md`;
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
        this.setState({documentName: 'Untitled Document'});
        localStorage.removeItem('markdownValue');
        localStorage.setItem('documentName', this.defaultDocumentName);
    }

    render(){
        return(
            <Row>
                <Col>
                    <ButtonToolbar className={'button-toolbar'}>
                        <DropdownButton size="sm" as={ButtonGroup} title="Download as..." id="bg-nested-dropdown" variant="dark">
                            <Dropdown.Item eventKey="1" onClick={() => this.downloadAsMarkdown()}>Markdown</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={() => this.downloadAsHtml()}>HTML</Dropdown.Item>
                        </DropdownButton>

                        <Button variant="dark" size="sm" className={'button-style'} onClick={() => {this.resetEditor()}}>
                            Reset document
                        </Button>

                    </ButtonToolbar>

                </Col>    
                
                <Col>
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
}

export default Toolbar;
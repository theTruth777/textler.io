import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, ButtonGroup, Dropdown, Button, Col, Row, Form } from 'react-bootstrap';

import '../Editor.css'

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {documentName: ''};
        this.documentNameInput = React.createRef();
        this.defaultDocumentName = 'Untitled Document';
    }

    componentDidMount() {
        if (localStorage.getItem("documentName") !== null){
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

    downloadAsHtml(styled = false){
        const text = this.props.htmlValue;
        const filename = `${this.state.documentName}.html`;

        let htmlDocument = null;
        if(styled){
            htmlDocument = "<html>\n<head>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css\"><title>" +
                filename +
                "</title>\n</head>\n<body>\n" +
                "<div class='markdown-body'>\n" +
                text +
                "</div></body>\n</html>";
        }else{
            htmlDocument = "<html>\n<head>\n<title>" + filename + "</title>\n</head>\n<body>\n" + text + "</body>\n</html>";
        }

        this.downloadFile(htmlDocument, filename);
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
        this.props.store.characterCount = 0;
        this.props.store.wordsCount = 0;
    }

    render(){
        return(
            <Row>
                <Col>
                    <ButtonToolbar className={'button-toolbar'}>
                        <DropdownButton size="sm" as={ButtonGroup} title="Download as..." id="bg-nested-dropdown" variant="dark">
                            <Dropdown.Item eventKey="1" onClick={() => this.downloadAsMarkdown()}>Markdown</Dropdown.Item>
                            <Dropdown.Item eventKey="2" onClick={() => this.downloadAsHtml()}>Unstyled HTML</Dropdown.Item>
                            <Dropdown.Item eventKey="3" onClick={() => this.downloadAsHtml(true)}>Styled HTML</Dropdown.Item>
                        </DropdownButton>

                        <Button variant="dark" size="sm" className={'button-style'} onClick={() => {this.resetEditor()}}>
                            Reset
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
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import MarkdownIt from 'markdown-it';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-textmate";

import 'github-markdown-css/github-markdown.css'
import "bootstrap/dist/css/bootstrap.css";
import './Editor.css';

class Editor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', html: ''};
        this.md = new MarkdownIt({breaks: true});
    }

    render() {

        return (
            <Container fluid={true}>
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
                <Row>
                    <Col className={'col-style-editor'} sm>

                        <div className={'editor-header'}>
                            Markdown
                        </div>

                        <AceEditor
                            mode="markdown"
                            theme="textmate"
                            wrapEnabled={true}
                            fontSize={18}
                            enableBasicAutocompletion={false}
                            onChange={value => {
                                this.onEditorContentChange(value);
                            }}
                            value={this.state.value}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{ $blockScrolling: true}}
                            style={{height: "70vh", overflowY: 'auto', maxHeight: "80vh", width: "100%"}}
                        />
                    </Col>
                    <Col className={'col-style-editor'} sm>

                        <div className={'editor-header'}>
                            Preview
                        </div>

                        <div
                            className={'markdown-body'}
                            dangerouslySetInnerHTML={{__html: this.state.html}}
                            style={{height: "70vh", overflowY: 'auto', maxHeight: "80vh", overflowX: 'auto'}}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }

    componentDidMount() {
        this.onEditorContentChange("# Swagnuke \n load here the readme file of swagnuke!");
    }

    onEditorContentChange(value) {
        let mdHtml = this.md.render(value);
        this.setState({html: mdHtml});
        this.setState({value: value});
    }

    resetEditor(){
        this.onEditorContentChange('');
    }

    downloadAsMarkdown() {
        let text = this.state.value;
        let filename = 'document.md';
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
}

export default Editor;
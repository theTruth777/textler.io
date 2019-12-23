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
                    <Col>
                        <ButtonToolbar>
                            <DropdownButton size="sm" as={ButtonGroup} title="Export Markup as..." id="bg-nested-dropdown" variant="success">
                                <Dropdown.Item eventKey="1">HTML</Dropdown.Item>
                                <Dropdown.Item eventKey="2">PDF</Dropdown.Item>
                            </DropdownButton>

                            <Button variant="dark" size="sm" className={'button-style'}>
                                Save session
                            </Button>

                            <Button variant="danger" size="sm" className={'button-style'}>
                                Reset document
                            </Button>

                        </ButtonToolbar>

                    </Col>
                    <Col>
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
                            fontSize={18}
                            enableBasicAutocompletion={false}
                            onChange={value => {
                                this.onChange(value);
                            }}
                            value={this.state.value}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{ $blockScrolling: true}}
                            style={{height: "90vh", overflowY: 'auto', maxHeight: "80vh", width: "100%"}}
                        />
                    </Col>
                    <Col className={'col-style-editor'} sm>

                        <div className={'editor-header'}>
                            Preview
                        </div>

                        <div
                            className={'markdown-body'}
                            dangerouslySetInnerHTML={{__html: this.state.html}}
                            style={{height: "90vh", overflowY: 'auto', maxHeight: "80vh", overflowX: 'auto'}}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }

    componentDidMount() {
        this.onChange("# Swagnuke \n load here the readme file of swagnuke!");
    }

    onChange(value) {
        let mdHtml = this.md.render(value);
        this.setState({html: mdHtml});
        this.setState({value: value});
    }
}

export default Editor;
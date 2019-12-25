import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MarkdownIt from 'markdown-it';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-textmate";

import 'github-markdown-css/github-markdown.css'
import "bootstrap/dist/css/bootstrap.css";
import './Editor.css';

import Toolbar from '../toolbar/Toolbar';

class Editor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', html: ''};
        this.md = new MarkdownIt({breaks: true});
        this.setEditorState = this.setEditorState.bind(this)
    }

    setEditorState(value, html) {
        this.setState({
            value: value,
            html: html
        })
    }

    render() {

        return (
            <Container fluid={true}>

                <Toolbar markdownValue={this.state.value} setEditorState={this.setEditorState}/>

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


}

export default Editor;
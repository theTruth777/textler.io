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
import EditorBody from './EditorBody';

class Editor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', html: ''};
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

                <Toolbar markdownValue={this.state.value} setEditorState={this.setEditorState} htmlValue={this.state.html}/>
                <EditorBody markdownValue={this.state.value} setEditorState={this.setEditorState} htmlValue={this.state.html}/>

            </Container>
        );
    }


}

export default Editor;
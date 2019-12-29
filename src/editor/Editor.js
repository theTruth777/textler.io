import React from 'react';


import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-textmate";
import 'github-markdown-css/github-markdown.css'

import "bootstrap/dist/css/bootstrap.css";
import './Editor.css';

import Toolbar from './toolbar/Toolbar';
import EditorBody from './body/EditorBody';

class Editor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '', html: ''};
        this.setEditorState = this.setEditorState.bind(this);
    }

    setEditorState(value, html) {
        this.setState({
            value: value,
            html: html
        })
    }

    render() {

        return (
            <div>

                <Toolbar markdownValue={this.state.value} setEditorState={this.setEditorState} htmlValue={this.state.html}/>
                <EditorBody markdownValue={this.state.value} setEditorState={this.setEditorState} htmlValue={this.state.html}/>

            </div>
        );
    }


}

export default Editor;
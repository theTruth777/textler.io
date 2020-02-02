import React, { Component } from 'react';
import Toolbar from './toolbar/Toolbar';
import EditorBody from './body/EditorBody';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-textmate';
import './Editor.css';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdownContent: '',
            html: ''
        };
        this.setEditorState = this.setEditorState.bind(this);
    }

    setEditorState(markdownContent, html) {
        this.setState({
            markdownContent,
            html
        })
    }

    render() {
        return (
            <div className={'editor-container'}>
                <Toolbar 
                    markdownValue={this.state.markdownContent}
                    setEditorState={this.setEditorState} 
                    htmlValue={this.state.html}
                    className={'toolbar'}
                    store={this.props.store}
                />
                <EditorBody 
                    markdownValue={this.state.markdownContent}
                    setEditorState={this.setEditorState} 
                    htmlValue={this.state.html}
                    className={'editor-body'}
                    store={this.props.store}
                    />
            </div>
        );
    }
}

export default Editor;
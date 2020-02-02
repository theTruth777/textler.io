import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import AceEditor from 'react-ace';
import MarkdownIt from 'markdown-it';
import { observer } from 'mobx-react';

import defaultText from './defaultText';

const EditorBody = observer(class EditorBody extends Component {
  constructor(props) {
    super(props);
    this.markdown = new MarkdownIt({breaks: true});
  }

  componentDidMount() {
    if (localStorage.getItem("markdownValue") !== null) {
      this.onEditorContentChange(localStorage.getItem("markdownValue"));
      return;
    }
    this.onEditorContentChange(defaultText);
  }

  onEditorContentChange(value) {
    let markdownHtml = this.markdown.render(value);
    this.props.setEditorState(value, markdownHtml);

    //Store the current markdown value in the browser local storage
    localStorage.setItem('markdownValue', value);
    this.props.store.characterCount = value.length;

    const words = value.split(/\s|\n/);
    const wordsLen = words.length;

    if (words[wordsLen - 1] === '') {
      this.props.store.wordsCount = wordsLen - 1;
      return;
    }

    this.props.store.wordsCount = wordsLen;

  }

  render() {
    return (
        <div className={'splitted-editor'}>
          <Row>
            <div className={'editor-header ace-header'}>
              Markdown
            </div>
            <div className={'editor-header preview-header'}>
              Preview
            </div>
          </Row>
          <Row className={'editor'}>
            <div className={'ace-editor'}>
              <AceEditor
                  mode="markdown"
                  theme="textmate"
                  wrapEnabled={true}
                  fontSize={18}
                  enableBasicAutocompletion={false}
                  onChange={value => {
                    this.onEditorContentChange(value);
                  }}
                  value={this.props.markdownValue}
                  name="ace"
                  editorProps={{$blockScrolling: true}}
                  style={{height: '100%', overflowY: 'auto', width: "100%"}}
                  showPrintMargin={false}
              />
            </div>
            <div className={'editor-header mobile-preview-header'}>Preview</div>
            <Col className={'preview'}>
              <div
                  className={'markdown-body'}
                  dangerouslySetInnerHTML={{__html: this.props.htmlValue}}
                  style={{height: "100%", overflowY: 'auto', width: "100%"}}
              />
            </Col>
          </Row>
        </div>

    );
  }
});

export default EditorBody;
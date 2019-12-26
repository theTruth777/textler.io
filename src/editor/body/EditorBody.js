import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AceEditor from "react-ace";
import Container from "react-bootstrap/Container";
import MarkdownIt from "markdown-it";

class EditorBody extends React.Component {
    constructor(props) {
        super(props);
        this.md = new MarkdownIt({breaks: true});
    }

    render() {
        return(
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
                        value={this.props.markdownValue}
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
                        dangerouslySetInnerHTML={{__html: this.props.htmlValue}}
                        style={{height: "70vh", overflowY: 'auto', maxHeight: "80vh", overflowX: 'auto'}}
                    />
                </Col>
            </Row>
        );
    }

    componentDidMount() {
        //load either the last document that the user wrote or the default swagnuke document
        //if nothing else is defined.

        if (localStorage.getItem("markdownValue") !== null){
            this.onEditorContentChange(localStorage.getItem("markdownValue") );
            return;
        }

        this.onEditorContentChange("# Swagnuke \n load here the readme file of swagnuke!");
    }

    onEditorContentChange(value) {
        let mdHtml = this.md.render(value);
        this.props.setEditorState(value, mdHtml);

        //Store the current markdown value in the browser local storage
        localStorage.setItem('markdownValue', value);
    }

}

export default EditorBody;
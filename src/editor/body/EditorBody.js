import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AceEditor from "react-ace";
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
                            style={{height: "75vh", overflowY: 'auto', maxHeight: "80vh", width: "100%"}}
                        />
                    </Col>
                    <Col className={'col-style-editor'} sm>

                        <div className={'editor-header'}>
                            Preview
                        </div>

                        <div
                            className={'markdown-body'}
                            dangerouslySetInnerHTML={{__html: this.props.htmlValue}}
                            style={{height: "75vh", overflowY: 'auto', maxHeight: "80vh", overflowX: 'auto'}}
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

        //TODO: put this somewhere else and not as a constant in the method
        const textlerIoStartupText = "# Textler.IO\n" +
            "\n" +
            "Start writing your document content here. On the right side you will see the HTML output. \n" +
            "\n" +
            "---\n" +
            "\n" +
            "\n" +
            "If you need some help, here are a few resources that might help you to get started:\n" +
            "* [What is markdown?](https://en.wikipedia.org/wiki/Markdown)\n" +
            "* [Markdown syntax overview](https://www.markdownguide.org/basic-syntax/)\n" +
            "\n" +
            "Last but not least, if you want to start writing a README.MD file, you might need a template for that. Checkout github user [@PurpleBooth](https://gist.github.com/PurpleBooth) template, for [writing a decent README file](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).\n" +
            "\n" +
            "\n" +
            "If you want to contribute to this project or host it for yourself, [checkout the repository here](https://github.com/theTruth777/textler.io).";

        this.onEditorContentChange(textlerIoStartupText);
    }

    onEditorContentChange(value) {
        let mdHtml = this.md.render(value);
        this.props.setEditorState(value, mdHtml);

        //Store the current markdown value in the browser local storage
        localStorage.setItem('markdownValue', value);
    }

}

export default EditorBody;
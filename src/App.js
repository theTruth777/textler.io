import React from 'react';

import Menu from './menu/Menu';
import Editor from './editor/Editor';

class NameForm extends React.Component{

    render() {
        return (
            <div>
                <Menu />
                <Editor />
            </div>

        )
    }
}

export default NameForm;
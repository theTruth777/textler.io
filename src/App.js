import React from 'react';

import Menu from './menu/Menu';
import Editor from './editor/Editor';
import Footer from './footer/Footer';
import Container from 'react-bootstrap/Container';

class NameForm extends React.Component{

    render() {
        return (
            <div>                            
                <Menu />
                <Container fluid={true}>
                    <Editor />      
                    <Footer />          
                </Container>
            </div>

        )
    }
}

export default NameForm;
import React from 'react';

import Menu from './menu/Menu';
import Editor from './editor/Editor';
import Footer from './footer/Footer';
import Container from 'react-bootstrap/Container';
import './App.css';

class App extends React.Component{

    render() {
        return (                            
            <div className={'grid-container'}>
                <Menu className={'menu'} />                                                             
                <Container fluid >                    
                    <Editor className={'editor'}/>                                                                                                                                                                                            
                </Container> 
                <Container fluid>
                    <Footer className={'footer'}/>
                </Container>
            </div>            
        )
    }
}

export default App;
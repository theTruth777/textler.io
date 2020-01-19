import React from 'react';

import Menu from './menu/Menu';
import Editor from './editor/Editor';
import Footer from './footer/Footer';
import Container from 'react-bootstrap/Container';
import './App.css';

import store from './MobxStore'

class App extends React.Component{

    render() {
        return (                            
            <div className={'grid-container'}>
                <Menu className={'menu'} />                                                             
                <Container fluid >                    
                    <Editor store={store} className={'editor'}/>
                </Container> 
                <Container fluid>
                    <Footer store={store} className={'footer'}/>
                </Container>
            </div>            
        )        
    }
}

export default App;
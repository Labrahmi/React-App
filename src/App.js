import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { About, Contact, Home, Project, Skills} from './components';



class App extends Component {
    render()
    {
        return (
            <Home />
        )
    }
    
}

export default App

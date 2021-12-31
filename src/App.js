import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { About, Contact, Home, Project, Skills} from './components';



class App extends Component {
    render()
    {
        return (
            <BrowserRouter>
            <div className='prinUL'>
                <ul>
                    <Link to="/home">
                        <li> Home </li>
                    </Link>
                    <Link to="/about">
                        <li> About </li>
                    </Link>
                    <Link to="/contact">
                        <li> Contact </li>
                    </Link>
                    <Link to="/project">
                        <li> Project </li>
                    </Link>
                    <Link to="/skills">
                        <li> Skills </li>
                    </Link>

                </ul>
            </div>
                <Routes>
                        <Route exact path = '/' element = {<Home />} />
                        <Route path = '/home' element = {<Home />} />
                        <Route path = '/about' element = {<About />} />
                        <Route path = '/contact' element = {<Contact />} />
                        <Route path = '/project' element = {<Project />} />
                        <Route path = '/skills' element = {<Skills />} />
                </Routes>
            </BrowserRouter>
        )
    }
    
}

export default App

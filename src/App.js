import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Administrador from './Administrador';
    
class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('Email',"jonatan@mail.com");
        localStorage.setItem('Password',"1234");
    }

    render() {

        return (
            <Router>
                <div className="App">
                <Administrador />
                </div>
            </Router>
        );
    }
}

export default App;

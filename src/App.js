import React, { Component } from 'react';
import { Game } from './Game';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Game/>
                <footer>
                    LightsUp! By Nicolas Rouvière with <a href="https://facebook.github.io/react/" target="_blank">React</a>.
                    See sources on <a href="https://github.com/WaSa42/lightsup" target="_blank">GitHub</a>
                </footer>
            </div>
        );
    }
}

export default App;

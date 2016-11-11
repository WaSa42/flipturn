import React, { Component } from 'react';
import { Game } from './Game';
import { levels } from './Level';
import './App.css';

class App extends Component {
    constructor() {
        super();
        if (!sessionStorage.getItem('currentLevelId')) {
            sessionStorage.setItem('currentLevelId', '0');
        }
        if (!sessionStorage.getItem('levels')) {
            sessionStorage.setItem('levels', JSON.stringify(levels));
        }
    }
    render() {
        return (
            <div className="app">
                <Game/>
                <footer>
                    LightsUp! By <a href="http://nrouviere.fr" target="_blank">Nicolas Rouvière</a> with
                    <a href="https://facebook.github.io/react/" target="_blank"> React</a>.
                    See sources on <a href="https://github.com/WaSa42/lightsup" target="_blank">GitHub</a>.
                </footer>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Game } from './Game';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-content">
                    <Game levelId={0}/>
                </div>
            </div>
        );
    }
}

export default App;

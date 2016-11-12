import React, { Component } from 'react';
import { Game } from './Game';
import { levels } from './Level';
import { colors } from './Square';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './lib.css';
import './App.css';

class App extends Component {
    constructor() {
        super();
        if (!sessionStorage.getItem('currentLevelId')) {
            sessionStorage.setItem('currentLevelId', '0');
        }
        if (!sessionStorage.getItem('lastLevelId')) {
            sessionStorage.setItem('lastLevelId', '0');
        }
        if (!sessionStorage.getItem('levels')) {
            sessionStorage.setItem('levels', JSON.stringify(levels));
        }
        this.state = {
            levels: {
                visibility: false
            }
        }
    }
    toggleLevels() {
        this.setState({
            levels: {
                visibility: !this.state.levels.visibility
            }
        })
    }
    goToLevel(index) {
        if (index > sessionStorage.getItem('lastLevelId'))
            return false;

        this.refs['game'].setState({
            currentLevelId: index
        });

        this.toggleLevels();
    }
    renderLevels() {
        const last = sessionStorage.getItem('lastLevelId');
        return JSON.parse(sessionStorage.getItem('levels')).map((level, index) => {
            const status = level.completed ? 'completed' : (parseInt(last, 16) === index ? 'in-progress' : 'disabled');
            const icon = level.completed ? 'fa-star' : (parseInt(last, 16) === index ? 'fa-circle-o-notch fa-spin' : 'fa-question-circle');
            return <div className={`level-box ${colors[index%colors.length]} ${status}`} key={`level-${index + 1}`} onClick={(e) => this.goToLevel(index, e)}>
                <header>Level {index + 1}</header>
                <div className="content">
                    <i className={`fa ${icon}`}> </i>
                </div>
            </div>
        })
    }
    render() {
        const last = sessionStorage.getItem('lastLevelId');
        return (
            <div className="app">
                <div className={`levels ${!this.state.levels.visibility && 'hidden'}`}>
                    <header className="jumbotron">
                        <div className="container-fluid">
                            <h1>
                                LightsUp! <small>Everything must be <span className={colors[last%colors.length]}>colorful!</span></small>
                            </h1>
                            <p>
                                Touch, tap or click on the squares and make the grid full of colors !
                                But be careful of what you turn, it may change the state of his neighbors.
                            </p>
                        </div>
                        <i className="fa fa-2x fa-times" onClick={(e) => this.toggleLevels(e)}> </i>
                    </header>
                    <div className="content container-fluid">{this.renderLevels()}</div>
                </div>
                <Game ref="game" toggleLevels={this.toggleLevels.bind(this)}/>
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

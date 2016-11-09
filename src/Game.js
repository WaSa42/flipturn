import React from 'react';
import { levels, Level } from './Level';
import { colors } from './Square';
import './Game.css';

export class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            currentLevelId: 0
        }
    }
    getCurrentLevelId() {
        return this.state.currentLevelId;
    }
    previousLevel() {
        const levelId = this.getCurrentLevelId();
        if (levelId > 0) {
            this.setState({
                currentLevelId: levelId - 1
            });
            this.refs[`level-${levelId + 1}`].setState({
                visible: false
            });
            this.refs[`level-${levelId}`].setState({
                visible: true
            });
        }
    }
    nextLevel() {
        const levelId = this.getCurrentLevelId();
        if (levelId < levels.length) {
            this.setState({
                currentLevelId: levelId + 1,
            });
            this.refs[`level-${levelId + 1}`].setState({
                visible: false
            });
            this.refs[`level-${levelId + 2}`].setState({
                visible: true
            });
        }
    }
    showStar (levelCompleted) {
        this.setState({
            star: levelCompleted ? 'visible' : 'hidden'
        })
    }
    renderLevels() {
        return levels.map((level, index) => {
            return <Level
                index={index}
                board={level.board}
                ref={`level-${index + 1}`}
                key={`level-${index + 1}`}
                getCurrentLevelId={this.getCurrentLevelId.bind(this)}
                previousLevel={this.previousLevel.bind(this)}
                nextLevel={this.nextLevel.bind(this)}
                showStar={this.showStar.bind(this)}
            />
        })
    }
    render() {
        let disablePrevious = this.getCurrentLevelId() === 0 && 'disabled';
        let disableNext = this.getCurrentLevelId() === levels.length - 1 && 'disabled';
        return (
            <div className="game">
                <h1>Everything must be <span className={colors[this.state.currentLevelId%colors.length]}>colorful!</span></h1>
                {this.renderLevels()}
                <div className="btn-group" role="group">
                    <button
                        type="button"
                        className="btn btn-default"
                        disabled={disablePrevious}
                        onClick={(e) => this.previousLevel(e)}
                    >
                        &#x2190;
                    </button>
                    <button className="btn btn-default level-name">
                        Level {this.state.currentLevelId + 1}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default"
                        disabled={disableNext}
                        onClick={(e) => this.nextLevel(e)}
                    >
                        &#x2192;
                    </button>
                </div>
            </div>
        );
    }
}

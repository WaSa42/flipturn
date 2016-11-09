import React from 'react';
import { levels, Level } from './Level';

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
        if (levelId < 3) {
            this.setState({
                currentLevelId: levelId + 1
            });
            this.refs[`level-${levelId + 1}`].setState({
                visible: false
            });
            this.refs[`level-${levelId + 2}`].setState({
                visible: true
            });
        }
    }
    renderLevels() {
        return levels.map((level, index) => {
            return <Level
                index={index}
                name={level.name}
                board={level.board}
                ref={`level-${index + 1}`}
                key={`level-${index + 1}`}
                getCurrentLevelId={this.getCurrentLevelId.bind(this)}
                previousLevel={this.previousLevel.bind(this)}
                nextLevel={this.nextLevel.bind(this)}
            />
        })
    }
    render() {
        let disablePrevious = this.getCurrentLevelId() === 0 && 'disabled';
        let disableNext = this.getCurrentLevelId() === 3 && 'disabled'; // TODO get last completed level
        return (
            <div className="game">
                <h1>Everything must be <span className="blue">colorful !</span></h1>
                {this.renderLevels()}
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default" disabled={disablePrevious} onClick={(e) => this.previousLevel(e)}>&#x2190;</button>
                    <span className="btn btn-default btn-fake">Level {this.state.currentLevelId + 1}</span>
                    <button type="button" className="btn btn-default" disabled={disableNext} onClick={(e) => this.nextLevel(e)}>&#x2192;</button>
                </div>
            </div>
        );
    }
}

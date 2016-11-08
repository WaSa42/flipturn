import React from 'react';
import { levels, Level } from './Level';

export class Game extends React.Component {
    constructor(){
        super();
        this.nextLevel = this.nextLevel.bind(this);
    }
    getCurrentLevelId() {
        return this.props.levelId;
    }
    previousLevel() {
        if (this.props.levelId > 0) {
            this.refs[`level-${this.props.levelId + 1}`].setSate({
                visible: false
            });
            this.refs[`level-${this.props.levelId}`].setSate({
                visible: true
            });
            this.props.levelId--;
        }
    }
    nextLevel() {
        if (this.props.levelId < 3) {  // TODO get last completed level
            const current = this.refs[`level-${this.props.levelId + 1}`];
            const next = this.refs[`level-${this.props.levelId + 2}`];
            console.log(next);
            current.setSate({
                visible: false
            });
            next.setSate({
                visible: true
            });
            this.props.levelId++;
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
        let disablePrevious = this.props.levelId === 0 && 'disabled';
        let disableNext = this.props.levelId === 3 && 'disabled'; // TODO get last completed level
        return (
            <div className="game">
                <h1>Everything must be <span className="blue">colorful !</span></h1>
                {this.renderLevels()}
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default" disabled={disablePrevious} onClick={(e) => this.previousLevel(e)}>&#x2190;</button>
                    <span className="btn btn-default btn-fake">Level {this.props.levelId + 1}</span>
                    <button type="button" className="btn btn-default" disabled={disableNext} onClick={(e) => this.nextLevel(e)}>&#x2192;</button>
                </div>
            </div>
        );
    }
}

import React from 'react';
import { levels, Level } from './Level';
import { colors } from './Square';
import './Game.css';

export class Game extends React.Component {
    constructor(){
        super();
        this.state = {
            currentLevelId: parseInt(sessionStorage.getItem('currentLevelId'), 16)
        };
    }
    componentDidUpdate(prevProps, prevState) {
        this.goToLevel(prevState.currentLevelId, this.state.currentLevelId);
        sessionStorage.setItem('currentLevelId', this.state.currentLevelId);
    }
    getCurrentLevelId() {
        return this.state.currentLevelId;
    }
    goToLevel(prevLevelId, levelId) {
        if (levelId > sessionStorage.getItem('lastLevelId'))
            return false;

        this.refs[`level-${prevLevelId + 1}`].setState({
            visible: false
        });
        this.refs[`level-${levelId + 1}`].setState({
            visible: true
        });
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
        if (levelId < sessionStorage.getItem('lastLevelId')) {
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
        return JSON.parse(sessionStorage.getItem('levels')).map((level, index) => {
            return <Level
                level={level}
                index={index}
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
        let disableNext = this.getCurrentLevelId() === parseInt(sessionStorage.getItem('lastLevelId'), 16) && 'disabled';
        return (
            <div className="game">
                <h1>Everything must be <span className={colors[this.state.currentLevelId%colors.length]}>colorful!</span></h1>
                {this.renderLevels()}
                <div className="btn-group" role="group">
                    <button
                        type="button"
                        className="btn btn-default btn-lg"
                        disabled={disablePrevious}
                        onClick={(e) => this.previousLevel(e)}
                    >
                        <i className="fa fa-long-arrow-left"> </i>
                    </button>
                    <button className="btn btn-default btn-lg level-name" onClick={this.props.toggleLevels}>
                        Level {this.state.currentLevelId + 1}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default btn-lg"
                        disabled={disableNext}
                        onClick={(e) => this.nextLevel(e)}
                    >
                        <i className="fa fa-long-arrow-right"> </i>
                    </button>
                </div>
            </div>
        );
    }
}

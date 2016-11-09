import React from 'react';
import './Square.css';

export const colors = [
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
    'red',
    'pink',
    'purple'
];
export class Square extends React.Component {
    constructor() {
        super();
        this.state = {
            turn: 'off',
        };
    }
    componentDidMount() {
        this.setState({turn: this.props.init.turn});
    }
    render() {
        return (
            <div className={`square ${this.props.init.type} ${this.state.turn} ${colors[this.props.levelId%colors.length]}`} onClick={() => this.props.turn(this)}>
                <span className="row-index hidden">{this.props.row}</span>
                <span className="col-index hidden">{this.props.col}</span>
            </div>
        );
    }
}

Square.propTypes = {
    turn: React.PropTypes.func
};

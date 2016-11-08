import React from 'react';

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
            <div className={`square ${this.props.init.type} ${this.state.turn}`} onClick={() => this.props.turn(this)}>
                <span className="row-index hidden">{this.props.row}</span>
                <span className="col-index hidden">{this.props.col}</span>
            </div>
        );
    }
}

Square.propTypes = {
    turn: React.PropTypes.func
};

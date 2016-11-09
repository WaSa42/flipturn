import React from 'react';
import { _ } from 'underscore';
import { Square } from './Square';
import './Board.css';

export class Board extends React.Component {
    handleSquareTurn(square) {
        if (this.props.level.state.completed)
            return false;

        turn(square);
        const neighbors = [
            this.refs[`square-${square.props.row - 1}-${square.props.col}`],
            this.refs[`square-${square.props.row}-${square.props.col + 1}`],
            this.refs[`square-${square.props.row + 1}-${square.props.col}`],
            this.refs[`square-${square.props.row}-${square.props.col - 1}`]
        ];

        let promise = new Promise((resolve, reject) => neighbors.forEach(neighbor => resolve(neighbor && turn(neighbor))));
        promise.then(() => checkSuccess(this) && this.props.handleSuccess());

        function turn(square) {
            if (square.props.init.type === 'plain')
                square.setState({turn: square.state.turn === 'on' ? 'off' : 'on' });
        }
        function checkSuccess(board) {
            return _.every(board.refs, square => {
                return square.props.init.type === 'empty' || square.state.turn === 'on'
            })
        }
    }
    renderRows(board) {
        return board.map((row, index) => (
            <div className="row" id={`row-${index}`} key={`row-${index}`}>
                {this.renderSquares(row.squares, index, board)}
            </div>
        ));
    }
    renderSquares(squares, rowIndex) {
        return squares.map((square, index) => <Square
            init={square}
            row={rowIndex}
            col={index}
            ref={`square-${rowIndex}-${index}`}
            key={`row-${rowIndex}-col-${index}`}
            turn={this.handleSquareTurn.bind(this)}
            levelId={this.props.levelId}
        />);
    }
    render() {
        return (
            <div className="board">
                {this.renderRows(this.props.board)}
            </div>
        );
    }
}

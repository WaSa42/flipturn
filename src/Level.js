import React from 'react';
import { default as swal } from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'sweetalert2/dist/sweetalert2.min';
import { Board } from './Board';

export class Level extends React.Component {
    constructor() {
        super();
        this.state = {
            completed: false,
            visible: false,
        };
    }
    componentDidMount() {
        if (this.props.index === this.props.getCurrentLevelId())
            this.setState({
                visible: true,
            });
    }
    handleSuccess() {
        this.setState({completed: true});
        swal({
            title: "Yeah!",
            text: "Congratulation, this level is completed.",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: '#9bc783',
            confirmButtonText: "Next",
            confirmButtonClass: 'btn btn-success',
            allowOutsideClick: false,
            html: false
        }).then(() => this.props.nextLevel());
    }
    render() {
        return (
            <div className={`level ${!this.state.visible && 'hidden'}`}>
                <Board
                    level={this}
                    handleSuccess={this.handleSuccess.bind(this)}
                    board={this.props.board}
                />
            </div>
        );
    }
}

export const levels = [{
    name: 'Level 1',
    board: [{
        squares: [{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        }]
    },{
        squares: [{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        }]
    },{
        squares: [{
            type: 'plain',
            turn: 'on'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        }]
    }]
}, {
    name: 'Level 2',
    board: [{
        squares: [{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'empty'
        }]
    },{
        squares: [{
            type: 'empty'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'empty'
        }]
    },{
        squares: [{
            type: 'empty'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'on'
        }]
    }]
}, {
    name: 'Level 3',
    board: [{
        squares: [{
            type: 'empty'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'empty'
        }]
    },{
        squares: [{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'on'
        },{
            type: 'plain',
            turn: 'off'
        }]
    },{
        squares: [{
            type: 'empty'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'empty'
        }]
    }]
}, {
    name: 'Level 4',
    board: [{
        squares: [{
            type: 'plain',
            turn: 'on'
        },{
            type: 'empty'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'empty'
        },{
            type: 'plain',
            turn: 'on'
        }]
    },{
        squares: [{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'off'
        }]
    },{
        squares: [{
            type: 'plain',
            turn: 'on'
        },{
            type: 'empty'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'empty'
        },{
            type: 'plain',
            turn: 'on'
        }]
    }]
}];

// const nbLevels = 100;
// export const levels = generateLevels();
//
// function generateLevels() {
//     let levels = [];
//     let size = 3;
//     let generatedBoardsBySize = 0;
//
//     for (let i = 0; i < nbLevels; i++) {
//         let level = designLevel(initBoard({
//             name: `Level ${i + 1}`,
//             size: size,
//             success: false,
//             board: []
//         }));
//
//         generatedBoardsBySize++;
//         level = designLevel(level);
//         levels.push(level);
//
//         if (generatedBoardsBySize === Math.pow(level.size, 2)) {
//             size++;
//             generatedBoardsBySize = 0;
//         }
//     }
//
//     return levels;
// }
//
// function initBoard(level) {
//     for (let j = 0; j < level.size; j++) {
//         let squares = [];
//         for (let k = 0; k < level.size; k++) {
//             const square = {
//                 type: 'plain',
//                 turn: 'off'
//             };
//             squares.push(square)
//         }
//         level.board.push({
//             squares: squares
//         })
//     }
//     return level;
// }
//
// function designLevel (level) {
//     const random = _.random(1, Math.pow(level.size));
//     let nbSquaresOn = 0;
//     do {
//         const squareRow = _.random(0, level.size -1);
//         const squareCol= _.random(0, level.size -1);
//         if (level.board[squareRow].squares[squareCol].turn !== 'on') {
//             level.board[squareRow].squares[squareCol].turn = 'on';
//             nbSquaresOn++
//         }
//     } while (nbSquaresOn <= random);
//     return level
// }
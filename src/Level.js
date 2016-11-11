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
        this.setState({
            completed: JSON.parse(sessionStorage.getItem('levels'))[this.props.index].completed,
            visible: this.props.index === this.props.getCurrentLevelId(),
        });
    }
    componentDidUpdate () {
        const sessionLevels = JSON.parse(sessionStorage.getItem('levels'));
        sessionLevels[this.props.index].completed = this.state.completed;
        sessionStorage.setItem('levels', JSON.stringify(sessionLevels))
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
                    levelId={this.props.index}
                    handleSuccess={this.handleSuccess.bind(this)}
                    board={this.props.board}
                />
            </div>
        );
    }
}

export const levels = [{
    completed: false,
    board: [{
        squares: [{
            type: 'plain',
            turn: 'on'
        },{
            type: 'plain',
            turn: 'off'
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
            turn: 'on'
        }]
    }]
},{
    completed: false,
    board: [{
        squares: [{
            type: 'empty'
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
            turn: 'on'
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
            type: 'empty'
        }]
    }]
},{
    completed: false,
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
},{
    completed: false,
    board: [{
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
            type: 'plain',
            turn: 'on'
        },{
            type: 'plain',
            turn: 'off'
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
            turn: 'on'
        },{
            type: 'plain',
            turn: 'off'
        }]
    }]
},{
    completed: false,
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
},{
    completed: false,
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
            type: 'empty',
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'empty',
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
},{
    completed: false,
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
},{
    completed: false,
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
            type: 'plain',
            turn: 'off'
        }]
    },{
        squares: [{
            type: 'empty',
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'empty',
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'empty',
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
    }]
},{
    completed: false,
    board: [{
        squares: [{
            type: 'empty',
        },{
            type: 'plain',
            turn: 'on'
        },{
            type: 'plain',
            turn: 'on'
        },{
            type: 'plain',
            turn: 'on'
        },{
            type: 'empty',
        }]
    },{
        squares: [{
            type: 'plain',
            turn: 'on'
        },{
            type: 'plain',
            turn: 'on'
        },{
            type: 'plain',
            turn: 'off'
        },{
            type: 'plain',
            turn: 'on'
        },{
            type: 'plain',
            turn: 'on'
        }]
    },{
        squares: [{
            type: 'empty'
        },{
            type: 'plain',
            turn: 'on'
        },{
            type: 'plain',
            turn: 'on'
        },{
            type: 'plain',
            turn: 'on'
        },{
            type: 'empty',
        }]
    }]
},{
    completed: false,
    board: [{
        squares: [{
            type: 'plain',
            turn: 'on'
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
},];

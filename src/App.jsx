import React from "react";
import './App.css';
import Dashboard from './components/dashboard/index.jsx';
import Board from './components/board/index.jsx';
import Detail from './components/detail/index.jsx';

export default class App extends React.Component
{
    terrain = [
        ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
        ['D', 'F', 'W', 'W', 'W', 'W', 'W', 'W', 'F', 'D'],
        ['D', 'F', 'F', 'W', 'W', 'W', 'W', 'F', 'F', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'C', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'C', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
        ['D', 'D', 'F', 'F', 'W', 'W', 'F', 'F', 'D', 'D'],
    ]

    control = [
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', 'memphis', 'memphis', '', ''],
        ['', '', '', '', '', '', 'memphis', 'memphis', '', ''],
        ['', '', '', '', '', '', 'memphis', 'memphis', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', 'thebes', 'thebes', '', ''],
        ['', '', '', '', '', '', 'thebes', 'thebes', '', ''],
        ['', '', '', '', '', '', 'thebes', 'thebes', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
    ]

    constructor(props)
    {
        super(props);
        this.state = {
            turn: 1,
            reputation: 0,
            gold: 10,
            detail: {
                y: -1,
                x: -1,
                terrain: '',
                control: '',
                adjacent: false,
            },
            terrain: this.terrain,
            control: this.control,
        };
        this.incrementTurn = this.incrementTurn.bind(this);
        this.getDetail = this.getDetail.bind(this);
        this.irrigate = this.irrigate.bind(this);
    }
    
    incrementTurn()
    {
        const state = this.state;

        let harvest = 0;
        state.control.forEach((row, y) =>
            row.forEach((cell, x) => harvest += cell === 'thebes' && state.terrain[y][x] === 'F')
        );
        state.gold += harvest;

        state.turn++;
        this.setState(state);
    }

    getDetail(y, x)
    {
        const state = this.state;

        let adjacent = false;
        
        if (x > 0 && state.control[y][x - 1] === 'thebes') {
            adjacent = true;
        } else if (x < 9 && state.control[y][x + 1] === 'thebes') {
            adjacent = true;
        } else if (y > 0 && state.control[y - 1][x] === 'thebes') {
            adjacent = true;
        } else if (y < 39 && state.control[y + 1][x] === 'thebes') {
            adjacent = true;
        }

        if (state.control[y][x] === 'thebes') {
            adjacent = false;
        }

        state.detail = {
            y,
            x, 
            terrain: state.terrain[y][x],
            control: state.control[y][x],
            adjacent: adjacent,
        }

        this.setState(state);
    }

    irrigate(y, x)
    {
    }

    render = () => (
        <div className="App">
            <Dashboard
                turn={this.state.turn}
                reputation={this.state.reputation}
                gold={this.state.gold}
                incrementTurn={this.incrementTurn} />
            <Board
                terrain={this.state.terrain}
                control={this.state.control}
                getDetail={this.getDetail} />
            <Detail
                y={this.state.detail.y}
                x={this.state.detail.x}
                terrain={this.state.detail.terrain}
                control={this.state.detail.control}
                adjacent={this.state.detail.adjacent}
                gold={this.state.gold}
            />
        </div>
    );
}

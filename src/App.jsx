import React from "react";
import './App.css';
import Dashboard from './components/dashboard/index.jsx';
import Board from './components/board/index.jsx';
import Detail from './components/detail/index.jsx';
import Data from './components/data/index.jsx';
import Log from './components/log/index.jsx';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});


export default class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            turn: 1,
            map: Data.map,
            events: Data.events,
            flood: 1,
            player: {
                faction: 'thebes',
                reputation: 0,
                gold: 10,
                soldiers: 10,
            },
            detail: {
                y: -1,
                x: -1,
            },
            raids: {
                nubia: 0,
                sudan: 0,
            },
            log: [{
                    title: 'Turn 1',
                    description: ''
                }],
        };
        this.incrementTurn = this.incrementTurn.bind(this);
        this.getDetail = this.getDetail.bind(this);
        this.detailAction = this.detailAction.bind(this);
    }

    /* static */ getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    incrementTurn()
    {
        let state = this.state;

        let harvest = 0;
        state.map.control.forEach((row, y) =>
            row.forEach((cell, x) =>
                harvest += cell === state.player.faction &&
                           state.map.terrain[y][x][0] === 'F' &&
                           parseInt(state.map.terrain[y][x][1]) <= state.flood
            )
        );
        state.player.gold += harvest;

        const event = this.state.events[this.getRandomInt(this.state.events.length)];
        state.log.push({
            kind: 'event',
            title: event.name,
            description: event.description,
        });
        state = event.effect(state);

        switch(this.getRandomInt(6)) {
            case 0:
                state.flood = 0;
                break;
            case 1:
            case 2:
                state.flood = 1;
                break;
            case 3:
            case 4:
                state.flood = 2;
                break;
            case 5:
                state.flood = 3;
                break;
            default:
                console.error('Unknown flood state');
                break;
        }

        state.turn++;
        state.log.push({
                    title: 'Turn ' + state.turn,
                    description: ''
        });
        
        this.setState(state);
    }

    getDetail(y, x)
    {
        const state = this.state;

        if (state.detail.y !== -1 && state.detail.x !== -1) {
            state.map.terrain[state.detail.y][state.detail.x] = state.map.terrain[state.detail.y][state.detail.x].replace(' selected', '');
        }
        state.map.terrain[y][x] += ' selected';

        state.detail = {
            y,
            x,
        }

        this.setState(state);
    }

    detailAction(action, y, x)
    {
        const state = this.state;

        switch (action) {
            case 'irrigate':
                state.gold -= 2;
                state.map.control[y][x] = state.player.faction;
                break;
            case 'attack':
                const soldiersRequired = this.getRandomInt(6);
                if (soldiersRequired > state.player.soldiers) {
                    state.player.soldiers = 0;
                } else {
                    state.player.soldiers -= soldiersRequired;
                    state.map.control[y][x] = state.player.faction;
                }
                break;
            case 'equipSoldier':
                state.player.gold--;
                state.player.soldiers++;
                break;
            case 'raidNubia':
                state.player.soldiers -= 2;
                state.player.gold += 4;
                state.raids.nubia++;

                if (state.raids.nubia === 3) {
                    this.state.events.push({
                        name: 'Nubian Revenge',
                        description: 'Soldiers from Nubia have attacked you',
                        effect: state => {
                            state.map.control[39][8] = 'nubia';
                            return state;
                        },
                    });
                }
                break;                
            default:
                break;
        }

        this.setState(state);
    }

    render = () => (
        <div className="App">
            <div className="info">
                <Dashboard
                    turn={this.state.turn}
                    player={this.state.player}
                    incrementTurn={this.incrementTurn} />
                <Log
                    log={this.state.log} />
            </div>
            <Board
                map={this.state.map}
                flood={this.state.flood}
                getDetail={this.getDetail} />
            <Detail
                map={this.state.map}
                detail={this.state.detail}
                player={this.state.player}
                detailAction={this.detailAction} />
        </div>
    );
}

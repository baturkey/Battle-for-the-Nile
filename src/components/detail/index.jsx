import React, { Component } from "react";
import "./index.css";

export default class Detail extends Component
{
    render()
    {
        const {map, detail, player} = this.props;
        const {y, x} = detail;

        const kingdomActions = [];
        if (player.gold > 0) {
            kingdomActions.push(
                (<button key="equipSoldier" onClick={() => this.props.detailAction('equipSoldier')}>Equip Soldier (1 Gold)</button>)
            );
        }

        if (y === -1) {
            return (
                <div className="detail">
                    <b>Kingdom Actions</b>
                    {kingdomActions}
                    <b>Tile Actions</b>
                    <div>Click on a Tile</div>
                </div>
            );
        }
        
        let adjacent = false;
        if (map.control[y][x] !== player.faction) {
            if ((x > 0 && map.control[y][x - 1] === player.faction) ||
                (x < 9 && map.control[y][x + 1] === player.faction) ||
                (y > 0 && map.control[y - 1][x] === player.faction) ||
                (y < 39 && map.control[y + 1][x] === player.faction)) {
                adjacent = true;
            }
        }
        
        const tileActions = [];
        if (adjacent && player.gold >= 2 && map.control[y][x] === '') {
            tileActions.push(
                (<button key="irrigateButton" onClick={() => this.props.detailAction('irrigate', y, x)}>Irrigate (2 Gold)</button>)
            );
        }
        if (adjacent && map.control[y][x] !== '' && map.control[y][x] !== player.faction) {
            tileActions.push(
                (<button key="attackButton" onClick={() => this.props.detailAction('attack', y, x)}>Attack (0 - 5 Soldiers)</button>)
            );
        }
        if (map.control[y][x] === player.faction && map.resources[y][x] === 'N' && player.soldiers >= 2) {
            tileActions.push(
                (<button key="raidNubia" onClick={() => this.props.detailAction('raidNubia')}>Raid Nubia (2 Soldiers)</button>)
            );
        }

        let title = 'Click on a map tile';
        let description = '';
        switch (map.terrain[y][x].split(' ')[0]) {
            case 'N':
                title = 'The Nile River';
                description = 'Egypt is the gift of the Nile';
                break;
            case 'W':
                title = 'The Mediterranean Sea';
                break;
            case 'F0':
                title = 'Farmland';
                break;
            default:
                break;
        }

        return (
            <div className="detail">
                <b>Kingdom Actions</b>
                <div>y: {y}</div>
                <div>x: {x}</div>
                {kingdomActions}
                <b>Tile Actions</b>
                <div>{title}</div>
                <div>{map.control[y][x] ? 'Controlled by ' + map.control[y][x][0].toUpperCase() + map.control[y][x].substring(1) : 'Not controlled by any kingdom'}</div>
                <div><i>{description}</i></div>
                {tileActions}
            </div>
        );
    }
}

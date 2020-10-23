import React from "react";
import "./index.css";

export default class Dashboard extends React.Component
{
    render = () => (
        <div className="dashboard">
            <div>&#x132F9; Battle for the Nile</div>
            <div>Turn: {this.props.turn}</div>
            <div>Gold: {this.props.player.gold}</div>
            <div>Reputation: {this.props.player.reputation}</div>
            <div>Soldiers: {this.props.player.soldiers}</div>
            <button type="submit" onClick={this.props.incrementTurn}>Next Turn</button>
        </div>
    )
}

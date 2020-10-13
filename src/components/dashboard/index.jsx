import React from "react";
import "./index.css";

export default class Dashboard extends React.Component
{
    render = () => (
        <div className="dashboard">
            <div>Battle for the Nile</div>
            <div>Turn: {this.props.turn}</div>
            <div>Gold: {this.props.gold}</div>
            <div>Reputation: {this.props.reputation}</div>
            <button type="submit" onClick={this.props.incrementTurn}>Next Turn</button>
        </div>
    )
}

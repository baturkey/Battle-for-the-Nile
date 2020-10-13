import React, { Component } from "react";
import "./index.css";

export default class Board extends Component
{
    render = () => (
        <div className="board">
        {this.props.terrain.map((row, y) => (
            <div className="row" key={`row_${y}`}>
            {row.map((cell, x) => (
                <div key={`cell_${y}_${x}`}
                     onClick={() => this.props.getDetail(y, x)}
                     className={`cell bg_${cell} ${this.props.control[y][x]}`}></div>
            ))}
        </div>
        ))}
        </div>
    )
}

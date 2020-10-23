import React, { Component } from "react";
import "./index.css";

export default class Board extends Component
{
    render = () => (
        <div className="board">
            <div className={`terrain flood${this.props.flood}`}>
                {this.props.map.terrain.map((row, y) => (
                    <div className="row" key={`trow_${y}`}>
                        {row.map((cell, x) => (
                            <div key={`ctell_${y}_${x}`}
                                 className={`cell bg_${cell}`}>{this.props.map.resources[y][x]}</div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="control">
                {this.props.map.control.map((row, y) => (
                    <div className="row" key={`crow_${y}`}>
                        {row.map((cell, x) => (
                            <div key={`ccell_${y}_${x}`}
                                 onClick={() => this.props.getDetail(y, x)}
                                 className={`cell ${cell}`}></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

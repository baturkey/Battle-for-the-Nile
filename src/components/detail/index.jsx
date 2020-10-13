import React, { Component } from "react";
import "./index.css";

export default class Detail extends Component
{
    render()
    {
        const options = [];
        const {y, x, terrain, control, adjacent, gold} = this.props;
        let a = adjacent ? 'Y' : 'N'

        if (adjacent && gold > 2) {
            options.push((<button>Irrigate</button>));
        }

        return (
            <div className="detail">
                {y}
                {x}
                {terrain}
                {control}
                {a}
                {gold}
                {options.map(o => o)}
            </div>
        );
    }
}

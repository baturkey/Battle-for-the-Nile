import React from "react";
import "./index.css";

export default class Log extends React.Component
{
    render = () => (
        <div className="logContainer">
            <div className="log">
                {this.props.log.map((l, i) =>
                    (<div key={`log${i}`} className="event">
                        <div>{l.title}</div>
                        <div>{l.description}</div>
                    </div>)
                )}
            </div>
        </div>
    )
}

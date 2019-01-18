import React from "react";

const Scoreboard = props => (
    <div className="scoreboard">
        <div className="title">{props.children}</div>
        <div className="scores">
            Score: {props.score} Highscore: {props.highscore}
        </div>
    </div>);

export default Scoreboard;
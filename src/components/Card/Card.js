import React from "react";

const Card = props => (
  <div className="card">
    <div className="card-body">
      <img className="neckBeard" alt={props.image} src={props.image} />
    </div>
  </div>
)
export default Card;

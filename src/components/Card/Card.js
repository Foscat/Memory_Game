import React from "react";



const Card = props => (
    <div className="card" onClick={() => props.handleClick(props.id)}>
        <div className="card-body">
            <img alt={props.name} 
            src={props.image} 
            width="220px"  
            height="180px"
            />
        </div>
    </div>
    );

    export default Card;
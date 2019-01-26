import React from "react";



const Card = props => (
    <div className="card" onClick={() => props.Counter(props.id)}>
        <div className="card-body">
            <img alt={props.name} 
            src={props.image} 
            data-state={props.count} 
            width="220px"  
            height="180px"
            />
        </div>
    </div>
    );

    export default Card;
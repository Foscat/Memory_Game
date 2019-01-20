import React from "react";

const Jumbotron = props =>  {
  return (
    <div className="jumbotron">

      <div className="allText">
        
        <h1 className="center">Neckbeardia</h1>

        <h3 className="font-italic center">
          Home the the finest assortment of true "gentlemen".
        </h3>

        <h5 className="center">Don't click the same picture twice!</h5>

      </div>

      <div className="Scorebox">

        <div className="userScore">
          Score: {props.score}
        </div>

        <br/>

        <div className="highScore">
          Highscore: {props.highscore}
        </div>

      </div>

    </div>
  );
}

export default Jumbotron;

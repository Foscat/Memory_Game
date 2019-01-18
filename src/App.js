import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Wrapper from "./components/Wrapper/Scoreboard";
import Card from "./components/Card/Card";
import neckbeards from "./neckbeards.json";

let highscore = 0;
let score = 0;

class App extends Comment {

  state = {
    neckbeards,
    highscore,
    score
  };

  RenderCards() {
    return (
      <div>
      <Jumbotron></Jumbotron>
      
      <Wrapper>
        <Scoreboard score={this.state.score} highscore={this.state.highscore}></Scoreboard>
        {this.state.neckbeards.map(beard => (
          <Card
            clickCount={this.clickCount}
            id={beard.id}
            key={beard.id}
            image={beard.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
     

  // Function that tracks user clicks each game
  ClickCounter = id => {
    // It finds the list neckbreads in the state and each is held in the nb argument.
    //  The i as the second argument stands as a iteratior giving this function a for-loop
    this.state.neckbeards.find((nb, i) => {

      // If the id of the clicked object matches with that particular nb that has that id then run function
      if (nb.id === id) {
        // The inital state of all nb is zero so if it true move to next function
        if(neckbeards[i].count === 0) {
          // This changes the set state of the game score to increment one 
          this.setState({score : this.state.score + 1} , function(){
            // Then console log that the change has been made
            console.log(this.state.score);
          });
          // Once score has increased then reshuffle cards
          this.state.neckbeards.sort(() => Math.random() - 0.5);
          return true;
        } // If the count of the individual nb is not equil to 0 then call game over function
          else{
            this.gameOver();
          }
      }
    })
  }
}
}

export default App;

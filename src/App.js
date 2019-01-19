import React, { Component } from "react";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import neckbeards from "./neckbeards.json";

let highscore = 0;
let score = 0;

class App extends Component {

  state = {
    neckbeards,
    highscore,
    score
  };

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
            this.GameOver();
          }
      }; // End of if nb function
    }); // End of find neckbeard state 
  }; // End of ClickCounter
  
  // Start of card rendering function
  RenderCards() {
    return (
      <Wrapper>
        <Jumbotron score={this.state.score} highscore={this.state.highscore}></Jumbotron>
        {this.state.neckbeards.map(beard => (
          <Card
            ClickCounter={this.ClickCounter}
            id={beard.id}
            key={beard.id}
            image={beard.image}
          />
        ))}
      </Wrapper>
    );
  } //End of RenderCards
     



  // Handles all Game over outcomes
  GameOver = () => {
    // If when the game ends that the users score is over the current highscore
    if(this.state.score > this.state.highscore) {
      // Then set the highscore to the users score.
      this.setState({highscore: this.state.highscore}, function() {
        // Check for updated highscore in the function
        console.log(this.state.highscore);
      });
    }
    // Loop through all neckbeard cards and set count back to 0 for next game
    this.state.neckbeards.forEach(beard => {
      beard.count = 0;
    });
    alert(`Your beard busting days are over bucco! \nYour score: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  

} // End of App


export default App;

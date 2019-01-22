import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
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
    Counter = id => {
      // alert("this is an alert");
      // It finds the list neckbreads in the state and each is held in the nb argument.
      // The i as the second argument stands as a iteratior giving this function a for-loop
      // eslint-disable-next-line
      this.state.neckbeards.find((nb, i) => {
      
        // If the id of the clicked object matches with that particular nb that has that id then run function
        if (nb.id === id) {
          // The inital state of all nb is zero so if it true move to next function
          if(neckbeards[i].count === 0) {
            // This changes the set state of the game score to increment one 
            this.setState({score : this.state.score + 1} , function(){
              // Then console log that the change has been made
              console.log("Score: ", this.state.score);
            });

            // this.setState({count : this.data.state + 1}, function() {
            //   console.log("Count: ", this.state.count);
            // });
            // Once score has increased then reshuffle cards
            this.state.neckbeards.sort(() => Math.random() - 0.5);
            return false;
          } // If the count of the individual nb is not equil to 0 then call game over function
            else{
              this.GameOver();
            }
        }; // End of if nb function
      }); // End of find neckbeard state 
    }; // End of ClickCounter

  
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



    // use render() becase its a built in react function
    render() {
        return (
          // hold all JSX elements inside blank div
          <div>
            {/* Score is held in the jumbotron */}
            <Jumbotron score={this.state.score} highscore={this.state.highscore}></Jumbotron>
            {/* Wrapper holds all the cards and displays them in a grid */}
            <Wrapper> 
              {/* Map function goes through earch beard and makes a new array */}
              {this.state.neckbeards.map(beard => (
                <Card
                  Counter={this.Counter}
                  id={beard.id}
                  key={beard.id}
                  count={beard.count}
                  image={beard.image}
                />
              ))}
            </Wrapper>
          </div>
          );
        } //End of render
    
  
  }; // End of App


export default App;

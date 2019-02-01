import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import neckbeards from "./neckbeards.json";
  
  class App extends Component {

    state = {
      neckbeards,
      highscore: 0,
      score: 0
    };

    componentDidMount() {
      this.setState({ neckbeards: this.shuffleCards(this.state.neckbeards) });
    }
  
    // if a guess is regestered as correct call this method
    handleCorrectGuess = shuffle => {
      const { highscore, score } = this.state;
      // This changes the set state of the game score to increment one 
      const newScore = score + 1;
      // If the current score is higher than the current highscore increase highscore 
      const newHighscore = Math.max(newScore, highscore);
  
      this.setState({
        // Once score has increased then reshuffle cards
        neckbeards: this.shuffleCards(shuffle),
        score: newScore,
        highscore: newHighscore
      });
    };
  
    // If a guess is regestered as incorrect the call this method
    handleIncorrectGuess = data => {
      this.setState({
        // Calls game over shuffle method
        neckbeards: this.GameOver(neckbeards),
        // Set score back to zero
        score: 0
      });
    };

    // Handles all Game over outcomes
    GameOver = neckbeards => {
      // Loop through all neckbeard cards and set count back to 0 for next game
      const resetDeck = neckbeards.map(cards => ({ ...cards, clicked: false }));
      alert(`Your beard busting days are over bucco! \nYour score: ${this.state.score}`);
      return this.shuffleCards(resetDeck);
    };
  
    // Shuffles cards by re-arranging the array
    shuffleCards = neckbeards => {
      let i = neckbeards.length - 1;
      while (i > 0) {
        const nb = Math.floor(Math.random() * (i + 1));
        const beards = neckbeards[i];
        neckbeards[i] = neckbeards[nb];
        neckbeards[nb] = beards;
        i--;
      }
      return neckbeards;
    };

    handleCardClick = id => {
      let guessedCorrectly = false;
      const newData = this.state.neckbeards.map(item => {
        const newItem = { ...item };
        if (newItem.id === id) {
          if (!newItem.clicked) {
            newItem.clicked = true;
            guessedCorrectly = true;
          }
        }
        return newItem;
      });
      guessedCorrectly
        ? this.handleCorrectGuess(newData)
        : this.handleIncorrectGuess(newData);
    };

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
                  handleClick={this.handleCardClick}
                  id={beard.id}
                  key={beard.id}
                  image={beard.image}
                />
              ))}
            </Wrapper>
          </div>
          );
        } //End of render
    
  
  }; // End of App


export default App;

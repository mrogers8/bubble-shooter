import React, { Component } from 'react'
import './Game.css';

class Title extends Component {
  render() {
    return (
      <header className="Title">
        Bubble Shooter
      </header>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="Game" >
        <Title />
        <div className="Border" >
        </div>
      </div>
    );
  }
}

export default Game

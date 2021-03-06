import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList';
import AddPlayer from './components/AddPlayer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: 'Kunegunda',
          score: 5
        },
        {
          name: 'Antoś',
          score: 0
        }
      ]
    }
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    })
  };

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0
    };

    this.setState({
      players: [...this.state.players, newPlayer]
    })
  };

  onPlayerRemove = (idx) => {
    const players = [...this.state.players];
    players.splice(idx, 1);

    this.setState({players})
  };

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} onPlayerAdd={this.onPlayerAdd} />
        <PlayersList players={this.state.players}
                     onScoreUpdate={this.onScoreUpdate}
                     onPlayerRemove={this.onPlayerRemove}/>
      </div>
    );
  }
}

export default App;
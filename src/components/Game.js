import React, { Component } from 'react';
import { rooms, start as currentRoom } from '../rooms';
import Player from './Player';
// import Room from './Room';

export default class Game extends Component {

  state = {
    action: '',
    player: {
      name: 'Player 1',
      inventory: []
    },
    rooms,
    currentRoom
  };

  handleNameChange = name => {
    this.setState(({ player }) => {
      player.name = name;
      return { player };
    });
  };

  render() {
    const { player, /*currentRoom, action*/ } = this.state;

    return (
      <div>
        <h2>Pokemon Adventure!</h2>
        
        <Player player={player} 
          onUse={this.handleUse}
          onNameChange={this.handleNameChange}/>

        {/* <Room room={currentRoom}
          action={action} 
          onMove={this.handleMove}
          onCatch={this.handleCatch}/> */}

      </div>
    );
  }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Door from './Door';
import ChooseItem from './ChooseItem';

export default class Room extends Component {

    static propTypes = {
      room: PropTypes.object,
      action: PropTypes.string,
      onMove: PropTypes.func.isRequired,
      onPickup: PropTypes.func.isRequired
        
    };

    render() {
        
      const { room, action, onMove, onPickup } = this.props;
      const { title, image, description, items, doors } = room;
      
      return (

        <section className=".room" style={{ backgroundImage: `url(${image})` }}>
          <h2>{title}</h2>
          <p>{description}</p>
          {!!items.length && (
            <div>
              <h3>Pokemon in room</h3>
              <ChooseItem items={items} onChoose={onPickup}/>
            </div>
          )}
          <h4>Doors</h4>
          <ul className="doors">
            {Object.entries(doors).map(([direction, roomKey]) => {
              return <Door
                key={direction}
                direction={direction}
                onOpen={() => onMove(roomKey)}/>;
            })}
          </ul> 
          {action && <p className="action">{action}</p>}           
        </section>
      );

    }

}
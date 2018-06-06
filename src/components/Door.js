import React from 'react';
import PropTypes from 'prop-types';

const directions = {
  top: 'Top',
  right: 'Right',
  left: 'Left',
  bottom: 'Bottom'
};

export default function Door({ direction, onOpen }) {

  return (
    <li key="direction">
      <button onClick={onOpen}>
        {directions[direction]}
      </button>

    </li>
  );
}

Door.propTypes = {
  direction: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired
};
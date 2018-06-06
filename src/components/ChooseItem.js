import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChooseItem.css';

export default function ChooseItem({ items, onChoose }) {
  return (
    <ul className={styles.chooseItem}>
      {items.map(item => (
        <li key={item.key}>
          <a onClick={() => onChoose(item)}><img src={item.image}/></a>
        </li>
      ))}
    </ul>
  );
}

ChooseItem.propTypes = {
  items: PropTypes.array,
  onChoose: PropTypes.func.isRequired
};
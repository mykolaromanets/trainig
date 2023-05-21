import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" className="Counter__button" onClick={onIncrement}>
      Увеличить
    </button>
    <button type="button" className="Counter__button" onClick={onDecrement}>
      Уменьшить
    </button>
  </div>
);
export default Controls;

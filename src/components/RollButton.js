import React from 'react';

const RollButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '1rem' }}>
      Roll Dice
    </button>
  );
};

export default RollButton;

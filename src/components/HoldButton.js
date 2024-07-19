import React from 'react';

const HoldButton = ({ onClick, isHeld }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ 
        padding: '10px 20px', 
        fontSize: '1rem', 
        backgroundColor: isHeld ? 'red' : 'gray' 
      }}>
      {isHeld ? 'Release' : 'Hold'}
    </button>
  );
};

export default HoldButton;

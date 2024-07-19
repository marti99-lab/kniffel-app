import React from 'react';

const Dice = ({ value, onClick, isHeld }) => {
  return (
    <div 
      onClick={onClick} 
      style={{
        width: '100px', 
        height: '100px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        border: '1px solid black', 
        backgroundColor: isHeld ? 'lightgray' : 'white', 
        cursor: 'pointer', 
        fontSize: '2rem'
      }}>
      {value}
    </div>
  );
};

export default Dice;

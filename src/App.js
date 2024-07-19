import React, { useState } from 'react';
import Dice from './components/Dice';
import RollButton from './components/RollButton';
import HoldButton from './components/HoldButton';

const App = () => {
  const NUM_DICE = 5;
  const NUM_ROLLS = 3;

  const [dice, setDice] = useState(Array(NUM_DICE).fill(0));
  const [heldDice, setHeldDice] = useState(Array(NUM_DICE).fill(false));
  const [rollCount, setRollCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const rollDice = () => {
    if (rollCount < NUM_ROLLS && !gameOver) {
      setRollCount(prevCount => {
        const newCount = prevCount + 1;
        if (newCount >= NUM_ROLLS) setGameOver(true);
        return newCount;
      });
      setDice(dice.map((d, i) => (heldDice[i] ? d : Math.floor(Math.random() * 6) + 1)));
    }
  };

  const toggleHold = (index) => {
    if (!gameOver) {
      setHeldDice(heldDice.map((h, i) => i === index ? !h : h));
    }
  };

  const resetGame = () => {
    setDice(Array(NUM_DICE).fill(0));
    setHeldDice(Array(NUM_DICE).fill(false));
    setRollCount(0);
    setGameOver(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {dice.map((value, index) => (
          <div key={index} onClick={() => toggleHold(index)}>
            <Dice value={value} isHeld={heldDice[index]} onClick={() => toggleHold(index)} />
            <HoldButton onClick={() => toggleHold(index)} isHeld={heldDice[index]} />
          </div>
        ))}
      </div>
      <RollButton onClick={rollDice} />
      <div style={{ marginTop: '20px', fontSize: '1.5rem' }}>Roll Count: {rollCount}</div>
      {gameOver && <div style={{ marginTop: '20px', fontSize: '1.5rem', color: 'red' }}>Game Over</div>}
      <button onClick={resetGame} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem' }}>
        Reset Game
      </button>
    </div>
  );
};

export default App;

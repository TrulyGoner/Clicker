import React from 'react';

export default function Clicker({ count, setCount, clickPower }) {
  return (
    <div className="clicker-panel">
      <div className="counter">
        <h2>⚡ {count} кликов</h2>
        <button 
          className="pixel-button"
          onClick={() => setCount(c => c + clickPower)}
        >
          Зарядить ядро (+{clickPower})
        </button>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import Clicker from './components/Clicker';
import Achievements from './components/Achievements';
import Upgrades from './components/Upgrades';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [achievements, setAchievements] = useState([]);

  // Исправленный useEffect
  useEffect(() => {
    setAchievements(prev => {
      const newAchievements = [];
      const achieved = new Set(prev); // Используем предыдущее состояние
      
      if (count >= 10 && !achieved.has('10 кликов!')) newAchievements.push('10 кликов!');
      if (count >= 50 && !achieved.has('50 кликов!')) newAchievements.push('50 кликов!');
      if (count >= 100 && !achieved.has('100 кликов!')) newAchievements.push('100 кликов!');

      return [...prev, ...newAchievements];
    });
  }, [count]); 

  return (
    <div className="app-container">
      <div className="game-frame">
        <h1 className="game-title">🌌 Space Clicker</h1>
        
        <div className="main-panel">
          <Clicker count={count} setCount={setCount} clickPower={clickPower} />
          
          <div className="stats-container">
            <Upgrades 
              count={count} 
              setCount={setCount} 
              clickPower={clickPower} 
              setClickPower={setClickPower} 
            />
            
            <Achievements achievements={achievements} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
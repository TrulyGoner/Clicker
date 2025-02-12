import React, { useState } from 'react';

function Upgrades({ count, setCount, clickPower, setClickPower }) {
  const [upgradeLevels, setUpgradeLevels] = useState({
    1: 0,
    2: 0,
    3: 0,
  });

  const upgrades = [
    { id: 1, name: 'Улучшение +1', baseCost: 10, power: 1 },
    { id: 2, name: 'Улучшение +2', baseCost: 50, power: 2 },
    { id: 3, name: 'Улучшение +5', baseCost: 100, power: 5 },
  ];

  const handleBuyUpgrade = (id, baseCost, power) => {
    const level = upgradeLevels[id];
    const cost = baseCost * (level + 1);

    if (count >= cost) {
      setCount(count - cost);
      setClickPower(clickPower + power);
      setUpgradeLevels({ ...upgradeLevels, [id]: level + 1 });
    } else {
      alert('Недостаточно кликов для покупки!');
    }
  };

  return (
    <div className="upgrades">
      <h2>Улучшения</h2>
      <ul>
        {upgrades.map((upgrade) => {
          const level = upgradeLevels[upgrade.id];
          const cost = upgrade.baseCost * (level + 1);
          return (
            <li key={upgrade.id}>
              <button
                onClick={() =>
                  handleBuyUpgrade(upgrade.id, upgrade.baseCost, upgrade.power)
                }
                disabled={count < cost}
              >
                {upgrade.name} (Уровень: {level}, Цена: {cost} кликов)
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Upgrades;
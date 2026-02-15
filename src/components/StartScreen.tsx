/**
 * StartScreen - Game Start Screen
 *
 * Here the player chooses a name and scenario.
 * 🎯 CURSOR TASK: Improve the design, add animations
 */

import { useState } from 'react';
import { GameScenario } from '../types/game';
import { SCENARIOS } from '../utils/prompts';

interface StartScreenProps {
  onStart: (playerName: string, scenario: GameScenario) => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [playerName, setPlayerName] = useState('');
  const [selectedScenario, setSelectedScenario] = useState<GameScenario | null>(null);

  const handleStart = () => {
    if (playerName.trim() && selectedScenario) {
      onStart(playerName.trim(), selectedScenario);
    }
  };

  return (
    <div className="start-screen">
      <div className="start-header">
        <h1 className="game-title">&#x2694;&#xFE0F; הרפתקאות בינה מלאכותית &#x2694;&#xFE0F;</h1>
        <p className="game-subtitle">משחק הרפתקאות טקסט מבוסס בינה מלאכותית</p>
      </div>

      <div className="start-form">
        <div className="input-group">
          <label htmlFor="player-name">מה השם שלך, הרפתקן/ית?</label>
          <input
            id="player-name"
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="הקלד/י את השם שלך..."
            className="name-input"
            maxLength={20}
            onKeyDown={(e) => e.key === 'Enter' && handleStart()}
          />
        </div>

        <div className="scenario-selection">
          <label>בחר/י תרחיש:</label>
          <div className="scenario-grid">
            {SCENARIOS.map((scenario) => (
              <button
                key={scenario.id}
                className={`scenario-card ${selectedScenario?.id === scenario.id ? 'selected' : ''}`}
                onClick={() => setSelectedScenario(scenario)}
              >
                <span className="scenario-emoji">{scenario.emoji}</span>
                <span className="scenario-title">{scenario.titleHe}</span>
                <span className="scenario-desc">{scenario.descriptionHe}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          className="start-button"
          onClick={handleStart}
          disabled={!playerName.trim() || !selectedScenario}
        >
          התחל/י הרפתקה!
        </button>
      </div>

      <div className="start-footer">
        <p>נבנה בסדנת קורסור ובינה מלאכותית</p>
      </div>
    </div>
  );
}

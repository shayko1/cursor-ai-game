/**
 * GameHeader - Game Header During Gameplay
 *
 * Displays information about the current game.
 * 🎯 CURSOR TASK: Add health bar, score, timer
 */

interface GameHeaderProps {
  playerName: string;
  scenarioTitle: string;
  scenarioEmoji: string;
  messageCount: number;
  onReset: () => void;
}

export function GameHeader({
  playerName,
  scenarioTitle,
  scenarioEmoji,
  messageCount,
  onReset,
}: GameHeaderProps) {
  return (
    <div className="game-header">
      <div className="header-info">
        <span className="header-scenario">
          {scenarioEmoji} {scenarioTitle}
        </span>
        <span className="header-player">Player: {playerName}</span>
        <span className="header-turns">Turn: {Math.ceil(messageCount / 2)}</span>
      </div>
      <button className="reset-button" onClick={onReset}>
        New Game
      </button>
    </div>
  );
}

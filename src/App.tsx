/**
 * App - Main Component
 *
 * Manages navigation between screens.
 */

import { useGame } from './hooks/useGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import './App.css';

function App() {
  const { state, startGame, sendPlayerAction, resetGame } = useGame();

  return (
    <div className="app">
      {state.phase === 'start' && (
        <StartScreen onStart={startGame} />
      )}

      {(state.phase === 'playing' || state.phase === 'ended') && (
        <GameScreen
          state={state}
          onSendAction={sendPlayerAction}
          onReset={resetGame}
        />
      )}
    </div>
  );
}

export default App;

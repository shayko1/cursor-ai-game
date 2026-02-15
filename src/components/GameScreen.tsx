/**
 * GameScreen - Main Game Screen
 *
 * Displays messages and allows the player to send actions.
 * 🎯 CURSOR TASK: Add sound, animations, inventory sidebar
 */

import { useEffect, useRef } from 'react';
import { GameState } from '../types/game';
import { GameHeader } from './GameHeader';
import { MessageBubble } from './MessageBubble';
import { PlayerInput } from './PlayerInput';

interface GameScreenProps {
  state: GameState;
  onSendAction: (action: string) => void;
  onReset: () => void;
}

export function GameScreen({ state, onSendAction, onReset }: GameScreenProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  return (
    <div className="game-screen">
      <GameHeader
        playerName={state.playerName}
        scenarioTitle={state.scenario.titleHe}
        scenarioEmoji={state.scenario.emoji}
        messageCount={state.messages.length}
        onReset={onReset}
      />

      <div className="messages-container">
        {state.messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {state.isLoading && (
          <div className="message-bubble message-narrator loading">
            <div className="message-header">
              <span className="message-icon">📜</span>
              <span className="message-label">המספר</span>
            </div>
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <PlayerInput onSubmit={onSendAction} disabled={state.isLoading} />
    </div>
  );
}

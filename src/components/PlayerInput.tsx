/**
 * PlayerInput - Player Input Field
 *
 * This is where the player types their actions.
 * 🎯 CURSOR TASK: Add command history (up/down arrows)
 * 🎯 CURSOR TASK: Add quick action buttons
 */

import { useState, useRef, useEffect } from 'react';

interface PlayerInputProps {
  onSubmit: (action: string) => void;
  disabled: boolean;
}

export function PlayerInput({ onSubmit, disabled }: PlayerInputProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus when input becomes enabled
  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]);

  const handleSubmit = () => {
    if (input.trim() && !disabled) {
      onSubmit(input.trim());
      setInput('');
    }
  };

  return (
    <div className="player-input">
      <div className="input-container">
        <span className="input-prompt">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder={disabled ? 'Waiting for response...' : 'What do you do?'}
          disabled={disabled}
          className="action-input"
        />
        <button
          onClick={handleSubmit}
          disabled={disabled || !input.trim()}
          className="send-button"
        >
          Send
        </button>
      </div>
    </div>
  );
}

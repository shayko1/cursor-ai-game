/**
 * MessageBubble - Chat Message Bubble
 *
 * Displays a single message - from narrator, player, or system.
 * 🎯 CURSOR TASK: Add typing animation, fade-in effect
 */

import { GameMessage } from '../types/game';

interface MessageBubbleProps {
  message: GameMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const roleConfig = {
    narrator: {
      className: 'message-narrator',
      label: 'המספר',
      icon: '📜',
    },
    player: {
      className: 'message-player',
      label: 'את/ה',
      icon: '🗡️',
    },
    system: {
      className: 'message-system',
      label: 'מערכת',
      icon: '⚙️',
    },
  };

  const config = roleConfig[message.role];

  return (
    <div className={`message-bubble ${config.className}`}>
      <div className="message-header">
        <span className="message-icon">{config.icon}</span>
        <span className="message-label">{config.label}</span>
      </div>
      <div className="message-content">
        {message.content.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}

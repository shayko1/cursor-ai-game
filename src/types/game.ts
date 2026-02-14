/**
 * Game Types — Type definitions for the game
 *
 * 🎯 CURSOR TASK: Add new types as you extend the game!
 */

export interface GameMessage {
  id: string;
  role: 'narrator' | 'player' | 'system';
  content: string;
  timestamp: Date;
}

export interface GameState {
  phase: 'start' | 'playing' | 'ended';
  messages: GameMessage[];
  isLoading: boolean;
  playerName: string;
  scenario: GameScenario;
  // 🎯 CURSOR TASK: Add an inventory system for the player
  // inventory: InventoryItem[];
  // 🎯 CURSOR TASK: Add health/mana to the game
  // health: number;
  // mana: number;
}

export interface GameScenario {
  id: string;
  title: string;
  titleHe: string;
  description: string;
  descriptionHe: string;
  systemPrompt: string;
  emoji: string;
}

// 🎯 CURSOR TASK: Define the InventoryItem type
// export interface InventoryItem {
//   id: string;
//   name: string;
//   description: string;
//   emoji: string;
//   quantity: number;
// }

export type GameAction =
  | { type: 'START_GAME'; playerName: string; scenario: GameScenario }
  | { type: 'ADD_MESSAGE'; message: GameMessage }
  | { type: 'SET_LOADING'; isLoading: boolean }
  | { type: 'END_GAME' }
  | { type: 'RESET' };

/**
 * useGame Hook - Game State Management
 *
 * This is the heart of the game - all state is managed here.
 * 🎯 CURSOR TASK: Extend the hook with new features
 */

import { useReducer, useCallback } from 'react';
import { GameState, GameAction, GameMessage, GameScenario } from '../types/game';
import { sendMessage } from '../services/openai';
import { buildInitialPrompt } from '../utils/prompts';

const initialState: GameState = {
  phase: 'start',
  messages: [],
  isLoading: false,
  playerName: '',
  scenario: {
    id: '',
    title: '',
    titleHe: '',
    description: '',
    descriptionHe: '',
    systemPrompt: '',
    emoji: '',
  },
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        phase: 'playing',
        playerName: action.playerName,
        scenario: action.scenario,
        messages: [],
      };
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case 'END_GAME':
      return {
        ...state,
        phase: 'ended',
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function createMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export function useGame() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const startGame = useCallback(async (playerName: string, scenario: GameScenario) => {
    dispatch({ type: 'START_GAME', playerName, scenario });
    dispatch({ type: 'SET_LOADING', isLoading: true });

    try {
      const systemPrompt = buildInitialPrompt(scenario, playerName);
      const introMessage = await sendMessage([], systemPrompt);

      dispatch({
        type: 'ADD_MESSAGE',
        message: {
          id: createMessageId(),
          role: 'narrator',
          content: introMessage,
          timestamp: new Date(),
        },
      });
    } catch (error) {
      dispatch({
        type: 'ADD_MESSAGE',
        message: {
          id: createMessageId(),
          role: 'system',
          content: error instanceof Error ? error.message : 'שגיאה לא צפויה',
          timestamp: new Date(),
        },
      });
    } finally {
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }
  }, []);

  const sendPlayerAction = useCallback(async (action: string) => {
    const playerMessage: GameMessage = {
      id: createMessageId(),
      role: 'player',
      content: action,
      timestamp: new Date(),
    };
    dispatch({ type: 'ADD_MESSAGE', message: playerMessage });
    dispatch({ type: 'SET_LOADING', isLoading: true });

    try {
      const allMessages = [...state.messages, playerMessage];
      const response = await sendMessage(allMessages, state.scenario.systemPrompt);

      dispatch({
        type: 'ADD_MESSAGE',
        message: {
          id: createMessageId(),
          role: 'narrator',
          content: response,
          timestamp: new Date(),
        },
      });
    } catch (error) {
      dispatch({
        type: 'ADD_MESSAGE',
        message: {
          id: createMessageId(),
          role: 'system',
          content: error instanceof Error ? error.message : 'Unexpected error',
          timestamp: new Date(),
        },
      });
    } finally {
      dispatch({ type: 'SET_LOADING', isLoading: false });
    }
  }, [state.messages, state.scenario.systemPrompt]);

  const resetGame = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  return {
    state,
    startGame,
    sendPlayerAction,
    resetGame,
  };
}

/**
 * OpenAI Service — Handles all communication with OpenAI
 *
 * This is where all AI interactions happen.
 * 🎯 CURSOR TASK: Add streaming, better error handling, and more!
 */

import OpenAI from 'openai';
import { GameMessage } from '../types/game';

// Create an OpenAI client instance
// Note: In a real project, the API key should be on the server side!
// For this workshop, we're calling OpenAI directly from the browser.
const getClient = () => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      '❌ Missing OpenAI API Key!\n' +
      'Add VITE_OPENAI_API_KEY to your .env file.\n' +
      'See README.md for instructions.'
    );
  }

  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true, // Workshop only! Use server-side in production.
  });
};

/**
 * Sends a message to the AI and returns the response
 */
export async function sendMessage(
  messages: GameMessage[],
  systemPrompt: string
): Promise<string> {
  const client = getClient();

  // Convert our messages to OpenAI's format
  const openaiMessages: OpenAI.ChatCompletionMessageParam[] = [
    { role: 'system', content: systemPrompt },
    ...messages
      .filter(m => m.role !== 'system')
      .map(m => ({
        role: (m.role === 'narrator' ? 'assistant' : 'user') as 'assistant' | 'user',
        content: m.content,
      })),
  ];

  try {
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini', // Fast and affordable — perfect for a workshop
      messages: openaiMessages,
      max_tokens: 500,
      temperature: 0.8, // A bit of creativity
    });

    return response.choices[0]?.message?.content ?? 'Error: No response from AI';
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      if (error.status === 401) {
        throw new Error('❌ Invalid API Key. Double-check that you copied it correctly.');
      }
      if (error.status === 429) {
        throw new Error('⏳ Too many requests. Wait a moment and try again.');
      }
      throw new Error(`API Error: ${error.message}`);
    }
    throw error;
  }
}

/**
 * 🎯 CURSOR TASK: Add a streaming function that shows the response word by word
 *
 * export async function sendMessageStream(
 *   messages: GameMessage[],
 *   systemPrompt: string,
 *   onChunk: (text: string) => void
 * ): Promise<void> {
 *   // Hint: Use client.chat.completions.create with stream: true
 * }
 */

/**
 * 🎯 CURSOR TASK: Add a function that generates a scene image
 *
 * export async function generateSceneImage(description: string): Promise<string> {
 *   // Hint: Use client.images.generate
 * }
 */

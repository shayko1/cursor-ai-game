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
  const baseURL =
    import.meta.env.VITE_OPENAI_BASE_URL || 'https://www.wixapis.com/openai/v1';

  if (!apiKey) {
    throw new Error(
      '❌ חסר מפתח Wix OpenAI!\n' +
      'יש להוסיף VITE_OPENAI_API_KEY לקובץ .env.\n' +
      'אפשר לראות הוראות בקובץ README.md.'
    );
  }

  return new OpenAI({
    apiKey,
    baseURL,
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

    return response.choices[0]?.message?.content ?? 'שגיאה: לא התקבלה תגובה מהבינה המלאכותית';
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      if (error.status === 401) {
        throw new Error('❌ מפתח API לא תקין. כדאי לבדוק שההעתקה בוצעה נכון.');
      }
      if (error.status === 429) {
        throw new Error('⏳ יש יותר מדי בקשות כרגע. נסה/י שוב בעוד רגע.');
      }
      throw new Error(`שגיאת API: ${error.message}`);
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

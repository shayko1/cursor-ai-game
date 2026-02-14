# 🤖 Step 3: Power It With AI (15 minutes)

## Add Your OpenAI Key

First, open Cursor chat (`Cmd+L`):

> ```
> Create a .env file with VITE_OPENAI_API_KEY set to a placeholder.
> Also create a .env.example with the same placeholder.
> Make sure .env is in .gitignore so we never commit secrets.
> ```

Now open the `.env` file and paste in your real API key:
```
VITE_OPENAI_API_KEY=sk-proj-xxxxxxxxxx
```

---

## Connect the AI to Your Game

Now the magic — open Cursor chat (`Cmd+L`) and paste this:

> ```
> Now I want to connect this game to OpenAI so the narrator is powered by real AI.
>
> Replace the placeholder narrator responses with actual OpenAI API calls:
>
> - Use the OpenAI SDK (already installed) with the gpt-4o-mini model
> - Read the API key from import.meta.env.VITE_OPENAI_API_KEY
> - Use dangerouslyAllowBrowser: true (this is a workshop project, not production)
>
> Each scenario should have a system prompt that tells the AI to:
> - Always respond in Hebrew
> - Keep responses 2-4 sentences long
> - End each response with 2-3 suggested actions as bullet points with emoji
> - Stay in character and maintain story consistency
> - Be descriptive and exciting
>
> The game should send the full conversation history with each request
> so the AI remembers what happened.
>
> Handle errors gracefully — if the key is wrong show a clear message,
> if rate limited tell the player to wait.
> ```

## Try It!
```bash
npm run dev
```

Pick a scenario, enter your name, and... the AI is telling your story. Type an action and watch it respond.

**You just built an AI-powered game. Without writing code.**

---

## 💡 Pro Tip: Make the AI Better

The quality of the game depends on the system prompts. Try improving them:

Select the system prompt text → `Cmd+K`:
- "Make this prompt more immersive and dramatic"
- "Add instructions for the AI to include sound descriptions like *creak* and *whoosh*"
- "Tell the AI to occasionally give the player items and track them"

The system prompt is the single most important piece of "code" in this project — and it's just English.

---

✅ Your game is alive. Let's make it even better.

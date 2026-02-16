# 🤖 Step 3: Power It With AI (15 minutes)

## Add Your Wix OpenAI-Compatible Key

First, open Cursor chat (`Cmd+L`):

> ```
> Create a .env file with VITE_OPENAI_API_KEY set to a placeholder.
> Add VITE_OPENAI_BASE_URL with /wix-openai/v1.
> Also create a .env.example with the same placeholder.
> Make sure .env is in .gitignore so we never commit secrets.
> ```

Now open the `.env` file and paste in your real API key:
```
VITE_OPENAI_API_KEY=wix-sk-xxxxxxxxxx
VITE_OPENAI_BASE_URL=/wix-openai/v1
```

The local proxy path above should be forwarded by Vite to:
`https://www.wixapis.com/openai/v1`

## One-Shot Master Prompt (Recommended)

Open Cursor chat (`Cmd+L`) and paste this single prompt:

> ```
> Implement Step 3 end-to-end in this project: connect the game to the Wix OpenAI-compatible API.
>
> Requirements:
> 1) Find where placeholder narrator responses are currently generated and replace them with real API calls.
> 2) If `src/services` does not exist, create it. Create/update one AI service module (recommended: `src/services/openai.ts`) that exports `sendMessage`.
> 3) Use OpenAI SDK with model `gpt-4o-mini`.
> 4) Read env vars:
>    - `VITE_OPENAI_API_KEY`
>    - `VITE_OPENAI_BASE_URL` (default `/wix-openai/v1`)
> 5) In the service, make baseURL robust:
>    - If env base URL starts with `http`, use it directly.
>    - Otherwise convert to absolute URL using `new URL(configuredBaseURL, window.location.origin).toString()`.
> 6) In `vite.config.ts`, configure `server.proxy` so `/wix-openai/v1` forwards to `https://www.wixapis.com/openai/v1` (with rewrite).
> 7) Ensure full conversation history is sent on each request.
> 8) Keep all player-facing UI text and system messages in Hebrew.
> 9) Handle errors clearly:
>    - invalid key (401)
>    - rate limit (429)
>    - generic API error
>
> After coding, list exactly which files were changed and why.
> ```

If this one-shot prompt succeeds, you can skip the detailed sections below.

## Detailed Prompt (Fallback)

Now the magic — open Cursor chat (`Cmd+L`) and paste this:

> ```
> Now I want to connect this game to the Wix OpenAI-compatible API so the narrator is powered by real AI.
>
> Replace the placeholder narrator responses with actual OpenAI API calls:
>
> - First, find where the placeholder narrator response is currently generated in this project.
> - If `src/services` doesn't exist, create it.
> - Create (or update) a single AI service module and export a `sendMessage` function from it.
> - Update all imports/callers to use that new service function.
>
> - Use the OpenAI SDK (already installed) with the gpt-4o-mini model
> - Read the API key from import.meta.env.VITE_OPENAI_API_KEY
> - Use baseURL: import.meta.env.VITE_OPENAI_BASE_URL || "/wix-openai/v1"
> - In vite.config.ts add a server proxy so "/wix-openai/v1" forwards to "https://www.wixapis.com/openai/v1"
> - Use dangerouslyAllowBrowser: true (this is a workshop project, not production)
>
> Each scenario should have a system prompt that tells the AI to:
> - Always respond in Hebrew
> - Keep responses 2-4 sentences long
> - End each response with 2-3 suggested actions as bullet points with emoji
> - Stay in character and maintain story consistency
> - Be descriptive and exciting
>
> Keep all player-facing UI and system messages in Hebrew as well
> (buttons, placeholders, loading text, and error messages in the game screen).
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

Then hard refresh the browser and check DevTools Network:
- You should see requests to `/wix-openai/v1/chat/completions` on your local origin.
- If you see `Invalid URL`, your `getClient` logic is not using the `new URL(..., window.location.origin)` fallback.
- If you see direct calls to `https://www.wixapis.com/openai/v1/...` from browser JS, your `VITE_OPENAI_BASE_URL` is not set to `/wix-openai/v1`.
- If you still see placeholder text, Cursor updated the wrong file. Ask it:
  "Find the exact placeholder narrator path and replace it with the service `sendMessage` call."

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

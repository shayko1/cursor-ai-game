# 🚀 Step 5: Level Up — Advanced Extensions

Pick whatever excites you. Each one is a single prompt to Cursor.

---

## 🟡 Medium

### Inventory System
> ```
> Add an inventory system to the game.
> When the AI mentions that the player found or received an item,
> detect it and add it to a visual inventory panel on the side of the screen.
> Update the AI's system prompt to include inventory tracking instructions.
> Show items with emoji and let the player click them for descriptions.
> ```

### Save & Continue
> ```
> Add save and load functionality.
> Auto-save the game after each turn to localStorage.
> When the player opens the game and a save exists,
> show a "המשך הרפתקה" button on the start screen.
> Add a "שמור וצא" button in the game header.
> Keep all new player-facing labels and messages in Hebrew.
> ```

---

## 🔴 Advanced

### AI-Generated Scene Images
> ```
> After each narrator message, generate a scene image using OpenAI's DALL-E API.
> Extract a brief visual description from the narrator's text and use it as the image prompt.
> Show the image above the narrator's message with a loading skeleton while it generates.
> Use dall-e-3 model at 1024x1024.
> ```

### Combat System
> ```
> Add an interactive combat system.
> When the AI describes a fight or encounter, show a combat overlay with:
> - Health bars for the player and enemy
> - Animated dice rolling
> - "תקיפה", "הגנה", and "בריחה" buttons
> - Damage calculations based on dice results
> Send the combat outcome back to the AI so it continues the story.
> Make it dramatic with screen shake and flash effects.
> Keep all combat UI text in Hebrew.
> ```

### Voice Narration
> ```
> Add text-to-speech narration using OpenAI's TTS API.
> Add a speaker icon next to each narrator message.
> When clicked, generate and play audio of that message using the 'onyx' voice.
> Also add a toggle to auto-narrate every new message.
> Show a sound wave animation while audio is playing.
> Keep toggle labels and audio status text in Hebrew.
> ```

---

## 👑 Boss Level

### Deploy It Online
> ```
> I want to deploy this game to the internet.
> Move the OpenAI calls to a server-side API route so the key isn't exposed.
> Set it up for Vercel deployment with the API key as an environment variable.
> ```

### Multiplayer
> ```
> Add support for two players in the same adventure.
> Each player takes turns entering actions.
> The AI narrator should address both players by name
> and weave their actions into the same story.
> Keep all multiplayer UI text in Hebrew.
> ```

---

## 🎯 The Most Important Tip

> **Don't be afraid to try wild ideas.**
> Worst case — `Cmd+Z` or `git stash`.
> Best case — you build something amazing in ten minutes.
>
> Welcome to the future. 🚀

# 🎯 Workshop Tasks — Build Your Game with Cursor!

## How It Works
1. Open the project in **Cursor**
2. Use **Cmd+K** (inline edit) or **Cmd+L** (chat) to ask the AI for help
3. Look for `🎯 CURSOR TASK` comments in the code — these are ready-made extension points
4. **Don't be afraid to experiment!** If something breaks, `git stash` and start fresh

---

## Level 1 — Warm Up (15 minutes)

### ✅ Task 1.1: Add a New Scenario
- **File:** `src/utils/prompts.ts`
- **What to do:** Add a 4th scenario to the `SCENARIOS` array
- **Cursor hint:** "Add a new game scenario about a zombie apocalypse in Jerusalem. Follow the same pattern as existing scenarios."

### ✅ Task 1.2: Change the Color Scheme
- **File:** `src/App.css`
- **What to do:** Change the color palette in the CSS custom properties
- **Cursor hint:** "Change the color scheme to a warm fantasy theme with gold and dark red accents. Update the CSS custom properties in :root."

### ✅ Task 1.3: Add a "Clear Chat" Button
- **File:** `src/components/GameHeader.tsx`
- **What to do:** Add a button that clears messages without resetting the game
- **Cursor hint:** "Add a 'clear chat' button next to the reset button that clears messages but keeps the game running."

---

## Level 2 — Intermediate (30 minutes)

### 🔧 Task 2.1: Streaming — Word-by-Word Responses
- **Files:** `src/services/openai.ts`, `src/hooks/useGame.ts`
- **What to do:** Show AI responses word by word instead of all at once
- **Cursor hint:** "Implement streaming for the AI response. Use OpenAI's stream option and update the message character by character."

### 🔧 Task 2.2: Command History
- **File:** `src/components/PlayerInput.tsx`
- **What to do:** Save previous commands and navigate them with arrow keys
- **Cursor hint:** "Add command history to PlayerInput. Store previous commands and navigate with arrow up/down keys, like a terminal."

### 🔧 Task 2.3: Inventory System
- **Files:** `src/types/game.ts`, `src/hooks/useGame.ts`, new component
- **What to do:** Add an inventory that the AI populates when the player finds items
- **Cursor hint:** "Create an inventory system. Add InventoryItem type, update GameState, create an Inventory sidebar component, and modify the AI prompt to include inventory instructions."

---

## Level 3 — Advanced (45 minutes)

### 🚀 Task 3.1: Scene Image Generation
- **File:** `src/services/openai.ts`, new component
- **What to do:** Generate a DALL-E image for each scene
- **Cursor hint:** "Add scene image generation using OpenAI's DALL-E API. After each narrator message, generate an image and display it above the text."

### 🚀 Task 3.2: Save Game to LocalStorage
- **Files:** `src/hooks/useGame.ts`
- **What to do:** Auto-save the game so players can continue after refresh
- **Cursor hint:** "Add save/load game functionality using localStorage. Auto-save after each turn and show a 'continue game' option on start screen."

### 🚀 Task 3.3: Combat System with Dice
- **Files:** types, hook, new component
- **What to do:** When the AI describes combat, show an interactive dice-based battle
- **Cursor hint:** "Create a combat system with dice rolling. Show a CombatOverlay with animated dice, health bars, and attack/defend/flee options."

---

## Level 4 — Final Boss! (60+ minutes)

### 👑 Task 4.1: Multiplayer
- Add support for two players in the same scenario
- Each player gets a turn to act
- The AI should address both players

### 👑 Task 4.2: Voice Engine
- Add Text-to-Speech for narrator responses
- Use OpenAI TTS API or Web Speech API
- Add Speech-to-Text for player input

### 👑 Task 4.3: Deploy Online
- Add a server layer (Express/Next.js) to hide the API key
- Deploy to Vercel or Railway
- Share with friends!

---

## 💡 Cursor Tips

### Cmd+K (Inline Edit)
Select code and press Cmd+K to edit it with AI:
- "Add error handling to this function"
- "Convert this to use streaming"
- "Add comments explaining this code"

### Cmd+L (Chat)
Open the chat and ask questions or request entire features:
- "How does the game state management work?"
- "Create a new component for the player's inventory"
- "What's the best way to add sound effects?"

### @ References
In Cursor you can reference files directly:
- `@src/types/game.ts` — "Add a new type for inventory items"
- `@src/hooks/useGame.ts` — "Add inventory management to the game reducer"

### Pro Tips
1. **Start small** — a small working change beats a big broken feature
2. **Use Tab** — Cursor's autocomplete learns from your codebase
3. **Read the errors** — Cursor can fix TypeScript errors if you paste them in chat
4. **Commit often** — so you always have a safe point to return to

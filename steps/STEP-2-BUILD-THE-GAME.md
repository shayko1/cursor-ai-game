# 🎮 Step 2: Build the Game (20 minutes)

## The Big Moment
Open Cursor chat (`Cmd+L`) and paste this prompt. Don't overthink it — just trust the AI and click **Accept** on the files it creates.

> ```
> I want to build a text adventure game in React + TypeScript. Here's what it should do:
>
> The game has two screens:
>
> 1. A START SCREEN where the player enters their name and picks one of 3 scenarios:
>    - "The Enchanted Fortress" 🏰 — a magical castle floating above clouds
>    - "Space Station Omega" 🚀 — a malfunctioning space station with aliens
>    - "Cyber Tel Aviv 2099" 🌆 — a cyberpunk version of Tel Aviv with neon and hacking
>
> 2. A GAME SCREEN that looks like a chat interface:
>    - Messages from the narrator appear on the left (like a chat bubble)
>    - Messages from the player appear on the right
>    - There's an input field at the bottom (terminal-style, with a ">" prompt)
>    - When waiting for a response, show a typing indicator with bouncing dots
>    - Auto-scroll to the latest message
>    - A header bar shows the scenario name, player name, turn count, and a "New Game" button
>
> For now, DON'T connect to any real AI — just make the narrator respond with a placeholder
> message like "The adventure continues... (AI not connected yet)". We'll add OpenAI in the next step.
>
> Make it dark-themed with a purple accent (#7c5cfc), RTL support for Hebrew,
> and a gaming aesthetic. Use the Heebo font for text.
>
> Make it look polished — animations, hover effects, glowing inputs. This should feel
> like a real game, not a homework assignment.
> ```

**Now sit back and watch.** Cursor will decide the file structure, create components, write styles, and wire everything together.

## What to Do While Cursor Works

- **Click Accept** on each file it creates
- If it asks questions, answer them naturally
- If you see TypeScript errors (red squiggly lines), tell Cursor: "Fix the TypeScript errors"

## Try It!
```bash
npm run dev
```
Open http://localhost:3000 — you should see your game with the start screen, scenario cards, and when you start playing, a chat interface with placeholder messages.

**The whole game UI. One prompt. Zero lines of code.**

---

## 🔧 Not Happy With Something?

This is the best part about working with AI — iteration is instant.

Select any part of the code and press `Cmd+K`:
- "Make the scenario cards bigger with more dramatic hover effects"
- "Add a fade-in animation when new messages appear"
- "The header should be sticky at the top"
- "Change the color scheme to neon green cyberpunk"

Or open chat (`Cmd+L`) for bigger changes:
- "Add a loading skeleton while waiting for the AI response"
- "The start screen needs a cooler title with a gradient animation"

**Experiment!** You can always undo with `Cmd+Z`.

---

✅ Your game UI works. Now let's give it a brain.

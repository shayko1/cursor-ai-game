# ⚔️ AI Adventures — Text Adventure Game

> **Build your first AI game without writing a single line of code.**

A text adventure game powered by a Wix OpenAI-compatible endpoint where the AI narrates a unique story based on your choices. This repo is both a **working example** and a **step-by-step workshop guide** for learning to build with [Cursor](https://cursor.com) + AI.

---

## 🎯 Who Is This For?
Developers with a CS background ready to dive into AI development. No prior React, TypeScript, or OpenAI experience needed — Cursor handles the code.

## 🎮 The Game
A text adventure in a chat interface. Pick a scenario — Enchanted Fortress 🏰, Space Station 🚀, or Cyber Tel Aviv 🌆 — and the AI tells your story. Every playthrough is unique.

## 🛠️ Tech Stack
React + TypeScript (Vite) · Wix OpenAI-compatible API (gpt-4o-mini) · Cursor AI

---

## 🚀 Quick Start

```bash
git clone git@github.com:shayk/cursor-ai-game.git
cd cursor-ai-game
npm install
cp .env.example .env    # add your Wix API key
npm run dev
```

---

## 📚 Workshop — Build It Yourself

The whole point: **describe what you want in plain English, and Cursor builds it.**

| Step | What Happens | Time |
|------|-------------|------|
| [Step 0](steps/STEP-0-SETUP.md) | Install Cursor & Node.js | 5 min |
| [Step 1](steps/STEP-1-CREATE-PROJECT.md) | Create the project | 5 min |
| [Step 2](steps/STEP-2-BUILD-THE-GAME.md) | Build the entire game UI with one prompt | 20 min |
| [Step 3](steps/STEP-3-ADD-AI.md) | Connect Wix OpenAI-compatible API and bring it to life | 15 min |
| [Step 4](steps/STEP-4-POLISH.md) | Polish — streaming, sounds, new scenarios | 10 min |
| [Step 5](steps/STEP-5-LEVEL-UP.md) | Level up — images, combat, voice, deploy | ♾️ |

**~45 minutes to a working AI game. Lines of code you write: 0.**

---

## 💡 Cursor Cheat Sheet

| Action | Shortcut | Example |
|--------|----------|---------|
| Chat with AI | `Cmd+L` | "Build me a text adventure game with a dark theme" |
| Inline edit | `Cmd+K` | Select code → "Make this more dramatic" |
| Autocomplete | `Tab` | Start typing → Tab to accept |
| Reference file | `@filename` | "@openai.ts improve the error handling" |

---

## 📄 License
MIT

Built with 💚 for developers ready to build with AI.

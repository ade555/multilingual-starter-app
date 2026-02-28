# Multilingual Starter App

A React application built with Vite. The `main` branch contains the base application with no localization. The `multilingual` branch extends it with AI-powered translations using [Lingo.dev](https://lingo.dev).

## Branches

| Branch         | Description                               |
| -------------- | ----------------------------------------- |
| `main`         | Base React app — no localization          |
| `multilingual` | Multilingual version powered by Lingo.dev |

## Pages

- `/` — Home
- `/about` — About
- `/contact` — Contact
- `/notifications` — Notifications

## Tech Stack

- [React 19](https://react.dev)
- [Vite](https://vitejs.dev)
- [React Router v7](https://reactrouter.com)
- TypeScript

The `multilingual` branch additionally uses:

- [Lingo.dev Compiler](https://lingo.dev/compiler)

## Supported Languages (multilingual branch)

- English (`en`)
- French (`fr`)
- German (`de`)
- Spanish (`es`)

## Getting Started

### Base app (main branch)

**1. Clone the repository**

```bash
git clone https://github.com/ade555/multilingual-starter-app
cd multilingual-starter-app
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

### Multilingual app (multilingual branch)

**1. Switch to the multilingual branch**

```bash
git checkout multilingual
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up your environment**

Create a `.env` file in the root of the project:

```bash
LINGODOTDEV_API_KEY=your_api_key_here
```

Get your API key from your [Lingo.dev project settings](https://lingo.dev/app).

**4. Start the development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## How Translations Work

The `multilingual` branch uses the Lingo.dev Compiler to handle translations at build time. You do not need to manage translation files or wrap strings in `t()` functions — the Compiler detects text in your JSX and translates it automatically.

Translations are cached in the `lingo/` directory. Commit this folder to version control so your team shares the same translations and future builds do not re-translate unchanged text.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx  # multilingual branch only
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Notifications.tsx
├── App.tsx
└── main.tsx
```

## Environment Variables

| Variable              | Description            | Branch              |
| --------------------- | ---------------------- | ------------------- |
| `LINGODOTDEV_API_KEY` | Your Lingo.dev API key | `multilingual` only |

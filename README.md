# Stevan vs Chat - Commands Guide

Public-facing commands reference site for the Stevan vs Chat Minecraft chaos system.

🔗 **Live Demo**: (Deploy to Vercel and link here)

## Features

- 📖 Interactive command reference
- 🎮 Subscriber vs Free commands breakdown
- ⏱️ Cooldown system explanation
- 💡 Pro tips for viewers
- 📱 Mobile responsive design
- ✨ Dark mode optimized

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deploy to Vercel

### Option 1: Direct Upload (Easiest)

1. Push this repo to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stevan-vs-chat-commands.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repo
5. Click "Deploy"

That's it! Your site will be live at a Vercel URL.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts and your site will be deployed.

## Build & Serve

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## Structure

```
src/
├── app/
│   ├── layout.tsx      - Root layout
│   ├── page.tsx        - Commands page
│   └── globals.css     - Global styles
├── package.json
├── tsconfig.json
└── next.config.js
```

## Customization

Edit `src/app/page.tsx` to:
- Add/remove commands
- Change colors
- Update Twitch channel link
- Modify descriptions

## License

MIT - Feel free to use and modify!

## Support

For issues or questions, message @Verrucosity on Twitch!

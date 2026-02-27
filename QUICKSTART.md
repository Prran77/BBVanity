# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Node.js

If you don't have Node.js installed:
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version (recommended)
3. Install it (accept all defaults)
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Dependencies

Open terminal in the project folder and run:
```bash
npm install
```

This will install all required packages (may take 1-2 minutes).

### Step 3: Start the App

```bash
npm run dev
```

Then open your browser to: **http://localhost:5173**

That's it! 🎉

## 📝 What You'll See

- **Home Page**: Grid of all episodes with search and season filter
- **Episode Details**: Click any episode to see full details, trivia, and vanity card
- **Gallery**: View all vanity cards in one place
- **Theme Toggle**: Switch between dark and light modes (top right)

## 🎨 Making Changes

### Add More Episodes

Edit `src/data/episodes.json` and add episode data.

### Change Colors

Edit `src/index.css` - look for CSS variables under `:root`

### Add Features

Main app logic is in:
- `src/App.jsx` - Main app component
- `src/components/` - Individual page components

## 🌐 Deploy Online

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment guide.

Quick version:
1. Create GitHub repository (check "Add a README file")
2. Click "Upload files" and drag all project files
3. Go to Settings → Pages → Source: GitHub Actions
4. Wait 2-3 minutes for deployment
5. Your site is live at `https://YOUR_USERNAME.github.io/Bigbangvanity/`

## ❓ Troubleshooting

### "npm is not recognized"
→ Install Node.js first

### Port 5173 already in use
→ Stop other Vite projects or use: `npm run dev -- --port 3000`

### Images not loading
→ Make sure they're in the `public/` folder

### Component errors
→ Check browser console (F12) for detailed error messages

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)

## 💡 Tips

1. **Hot Reload**: Changes auto-refresh the browser
2. **Console**: F12 opens developer tools to see errors
3. **Save Often**: Use Git to save your progress
4. **Experiment**: Try changing things and see what happens!

---

Need help? Check [README.md](README.md) or open an issue on GitHub.

Happy coding! 🚀

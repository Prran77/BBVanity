# The Big Bang Theory Vanity Cards Archive 🔬

A comprehensive web application showcasing episodes from *The Big Bang Theory* and their iconic Chuck Lorre vanity cards.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)

## ✨ Features

- **📺 Complete Episode Guide** - Browse all episodes from 12 seasons
- **🔍 Smart Search & Filter** - Search episodes by title or filter by season
- **📄 Vanity Card Gallery** - View Chuck Lorre's famous vanity cards
- **🎨 Dark/Light Theme** - Toggle between themes for comfortable viewing
- **📱 Responsive Design** - Works beautifully on all device sizes
- **⚡ Fast Performance** - Built with Vite for lightning-fast load times

## 🎬 About The Show

*The Big Bang Theory* is an American sitcom that aired on CBS from 2007 to 2019, spanning 12 seasons and 279 episodes. The show follows the lives of brilliant but socially awkward scientists and their interactions with the world around them.

At the end of each episode, a "vanity card" from producer Chuck Lorre appears briefly on screen, containing personal messages, jokes, and observations. This app preserves and showcases these Easter eggs for fans to enjoy.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Bigbangvanity.git
   cd Bigbangvanity
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

To preview the production build locally:
```bash
npm run preview
```

## 🌐 Deploying to GitHub Pages

### Manual Upload Method (No Git Required!)

**Perfect if you want to copy-paste files directly to GitHub:**

1. **Create GitHub Repository**
   - Go to GitHub and create a new repository named `Bigbangvanity`
   - Make it Public
   - Check "Add a README file" to initialize it

2. **Upload All Files**
   - Click "Add file" → "Upload files"
   - Drag and drop ALL project files and folders
   - Commit with message: "Initial commit"

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"

4. **Wait for Deployment**
   - Go to Actions tab
   - Watch the "Deploy to GitHub Pages" workflow
   - Takes 2-3 minutes

5. **Visit Your Site**
   - Your site is live at: `https://YOUR_USERNAME.github.io/Bigbangvanity/`

**📖 See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed step-by-step instructions!**

### Local Testing First (Recommended)

Before uploading, test locally:
```bash
npm install
npm run dev
```

## 📁 Project Structure

```
Bigbangvanity/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── EpisodeGrid.jsx
│   │   ├── EpisodeDetail.jsx
│   │   ├── VanityGallery.jsx
│   │   └── About.jsx
│   ├── data/           # Episode data
│   │   └── episodes.json
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   ├── App.css         # App styles
│   └── index.css       # Global styles
├── scripts/            # Utility scripts
│   └── fetchEpisodes.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Tech Stack

- **[React](https://react.dev/)** - UI framework
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **CSS3** - Custom styling with CSS variables
- **[TVMaze API](https://www.tvmaze.com/api)** - Episode data source

## 📊 Data Sources

- **TVMaze API** - Episode information, air dates, and summaries
- **chucklorre.com** - Official Chuck Lorre vanity card archive
- **The Big Bang Theory Wiki** - Additional trivia and information

## 🔄 Updating Episode Data

To fetch the latest episode data from TVMaze API:

```bash
npm run fetch-data
```

This runs the script in `scripts/fetchEpisodes.js` which:
1. Fetches episode data from TVMaze API
2. Transforms it into the required format
3. Saves it to `src/data/episodes.json`

**Note:** Vanity card data must be added manually to the episodes.json file.

## 🎨 Customization

### Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #e74c3c;
  --secondary-color: #f39c12;
  --accent-blue: #3498db;
  /* etc. */
}
```

### Add More Episodes

Edit `src/data/episodes.json` and add episode objects following the existing structure.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Add Vanity Cards** - Help populate vanity card data for episodes
2. **Add Trivia** - Contribute interesting facts about episodes
3. **Improve UI/UX** - Suggest or implement design improvements
4. **Fix Bugs** - Report or fix any issues you find

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚖️ Disclaimer

This is a fan-made project and is not officially affiliated with *The Big Bang Theory*, CBS, Warner Bros., or Chuck Lorre Productions. All content is used for educational and informational purposes. Episode information and vanity cards are the property of their respective copyright holders.

## 🙏 Acknowledgments

- Chuck Lorre and the creators of The Big Bang Theory
- TVMaze for providing the episode data API
- The Big Bang Theory fan community
- All the writers, cast, and crew who made the show amazing

## 📧 Contact

Have questions or suggestions? Feel free to open an issue or reach out!

---

Made with ❤️ by a fan for fans | 2026

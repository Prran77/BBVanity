# Deploying to GitHub Pages (Manual Upload)

This guide will help you deploy your Big Bang Theory Vanity Cards application to GitHub Pages **without using git commands** - just drag and drop!

## Prerequisites

- GitHub account
- Internet browser
- All project files ready on your computer

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to your git host and sign in
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it **exactly** `Bigbangvanity` (case-sensitive, must match vite.config.js)
5. Keep it **Public**
6. ✅ **Important:** Check the box "Add a README file" (this initializes the repository)
7. Click "Create repository"

### 2. Upload All Project Files

#### Method A: Drag and Drop (Easiest)

1. In your new repository, you'll see a README.md file
2. Click **"Add file"** button (top right area)
3. Select **"Upload files"**
4. Open your project folder on your computer
5. Select **ALL files and folders**:
   - `.github` folder (with workflows inside)
   - `public` folder
   - `scripts` folder  
   - `src` folder (with components, data, and other files)
   - `index.html`
   - `package.json`
   - `vite.config.js`
   - `.gitignore`
   - `LICENSE`
   - `README.md` (it will replace the placeholder)
   - All other `.md` files
6. **Drag and drop** them onto the GitHub upload page
7. Wait for upload to complete (you'll see all files listed)
8. Add commit message: `Initial commit - Big Bang Theory Vanity Cards App`
9. Click **"Commit changes"**

**Note**: GitHub automatically maintains folder structure when you upload folders!

#### Method B: Create Files One by One (Alternative)

If drag-and-drop doesn't work:

1. Click **"Add file"** → **"Create new file"**
2. Type the full path in the filename field (e.g., `src/App.jsx`)
   - Typing `/` automatically creates folders
3. Copy and paste the file content
4. Click "Commit new file"
5. Repeat for all files

**Tip**: Start with the most important files first (package.json, vite.config.js, index.html, src/main.jsx)

### 3. Verify Upload

After committing, verify everything uploaded correctly:

1. Check you can see all folders in the repository:
   ```
   .github/
   public/
   scripts/
   src/
   index.html
   package.json
   vite.config.js
   README.md
   ... (and other files)
   ```

2. Click into folders to verify structure:
   - `.github/workflows/deploy.yml` should exist
   - `src/components/` should contain all component files
   - `src/data/episodes.json` should be present
   - `public/atom-icon.svg` should be there

3. If any files are missing, use "Add file" → "Upload files" to add them

### 4. Enable GitHub Pages with GitHub Actions

1. In your repository, click the **"Settings"** tab (top navigation)
2. Scroll down the left sidebar and click **"Pages"**
3. Under "Build and deployment" section:
   - **Source**: Select **"GitHub Actions"** from the dropdown
   - (Don't select "Deploy from a branch")
4. No need to click save - it's automatic!

### 5. Watch the Deployment Happen

1. Go to the **"Actions"** tab (top navigation)
2. You should see a workflow run called "Deploy to GitHub Pages" 🚀
3. Click on it to see the progress
4. The workflow will:
   - ✅ Check out your code
   - ✅ Install Node.js
   - ✅ Install npm packages
   - ✅ Build your React app
   - ✅ Deploy to GitHub Pages
5. Wait 2-3 minutes for completion
6. When you see a green checkmark ✅, deployment is done!

**Note**: The workflow file (`.github/workflows/deploy.yml`) is already in your uploaded files, so it runs automatically!

### 6. Visit Your Live Site! 🎉

Your site is now live at:
```
<your-site-url>
```

Replace `your-username` with your actual GitHub username.

**Example**: If your GitHub username is `johndoe`, visit:
```
https://johndoe.github.io/Bigbangvanity/
```

## Troubleshooting

### Workflow Fails to Run

**Problem**: No workflow appears in Actions tab

**Solutions**:
- Make sure `.github/workflows/deploy.yml` file exists in your repository
- Check that you uploaded the entire `.github` folder structure
- The repository must have at least one commit for Actions to work

### Build Fails

**Problem**: Workflow runs but fails during build

**Solutions**:
1. Check all files were uploaded correctly
2. Verify `package.json` and `vite.config.js` are present
3. Make sure `src/main.jsx` and `index.html` exist
4. Check the error message in the Actions log

### 404 Page Not Found

**Problem**: Site loads but shows 404 error

**Solutions**:
- Check that repository name exactly matches the base path in `vite.config.js`
- Repository name: `Bigbangvanity`
- vite.config.js should have: `base: '/Bigbangvanity/'`
- Both must match exactly (case-sensitive)

### Site Shows Old Content

**Problem**: Made changes but site doesn't update

**Solutions**:
1. Upload your changed files again using "Add file" → "Upload files"
2. Wait for the workflow to complete in Actions tab
3. Hard refresh your browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
4. Clear browser cache

### Pages Not Enabled

**Problem**: Can't find "Pages" in Settings

**Solutions**:
- Make sure repository is Public (Private repos need GitHub Pro)
- Look in Settings → Pages (left sidebar, near bottom)
- If you don't see it, check your GitHub account has Pages enabled

## Updating the Site

To update your live site after making changes:

1. Edit files locally on your computer
2. Go to GitHub repository
3. Navigate to the file you want to update
4. Click the file name, then click the pencil icon (Edit)
5. Copy-paste your new content
6. Click "Commit changes"
7. Or use "Add file" → "Upload files" to replace multiple files
8. The workflow automatically runs again
9. Wait 2-3 minutes
10. Refresh your live site!

**Tip**: You can also upload files with the same names - GitHub will ask if you want to replace them.

## Local Testing (Optional but Recommended)

Before uploading changes, test locally:

1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Open terminal in project folder
3. Run: `npm install`
4. Run: `npm run dev`
5. Visit `http://localhost:5173` to test
6. Once satisfied, upload changes to GitHub

## Custom Domain (Optional)

Want your site at `bigbangvanity.com` instead of `username.github.io/Bigbangvanity/`?

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In your repository, go to "Add file" → "Create new file"
3. Name it `public/CNAME` (inside public folder)
4. Content: just your domain name (e.g., `bigbangvanity.com`)
5. Commit the file
6. Go to Settings → Pages
7. Add your custom domain in the "Custom domain" field
8. Follow the DNS configuration instructions shown
9. Enable "Enforce HTTPS"

## Router 404 Issues

If direct URLs don't work (e.g., sharing a link to an episode page):

**Problem**: `https://username.github.io/Bigbangvanity/episode/1` shows 404

**Current Solution**: The app uses browser routing, which works from the home page. Users should navigate from the home page.

**Alternative**: Switch to hash-based routing in `src/main.jsx`:
```javascript
// Change from BrowserRouter to HashRouter
import { HashRouter } from 'react-router-dom'

// Then wrap your app with HashRouter instead
```

URLs will look like: `...github.io/Bigbangvanity/#/episode/1`

## Performance Tips

- GitHub Pages uses a global CDN - your site is fast worldwide!
- Vite automatically optimizes your code during build
- Images are served statically
- The workflow caches dependencies for faster future builds

## Security Notes

- Never upload files with API keys or passwords
- This project uses only public APIs (TVMaze)
- All data is static - no server-side processing
- GitHub Pages enforces HTTPS automatically

## Need Help?

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- View deployment logs in the Actions tab
- Open an issue in the repository
- Check [QUICKSTART.md](QUICKSTART.md) for basics

---

**Congratulations! Your Big Bang Theory Vanity Cards app is live! 🎉**

Share it with fellow fans and enjoy the nostalgia!

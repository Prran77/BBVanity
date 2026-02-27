# 📤 Manual Upload Guide - No Git Commands Needed!

This guide shows you exactly how to deploy your Big Bang Theory Vanity Cards app to GitHub Pages by simply **drag-and-dropping files** through your web browser.

## ✅ Checklist Before You Start

- [ ] You have a GitHub account
- [ ] All project files are on your computer
- [ ] You're using a web browser (Chrome, Firefox, Edge, Safari)

That's it! No Node.js, Git, or command line needed for uploading.

---

## 📋 Step-by-Step Instructions

### Step 1: Create a New Repository on GitHub

1. Go to **[github.com](https://github.com)** and sign in
2. Click the **"+"** button in the top-right corner
3. Select **"New repository"**

**Repository Settings:**
- **Repository name**: Type `Bigbangvanity` (exactly like this, case-sensitive)
- **Description** (optional): "Big Bang Theory Vanity Cards Archive"
- **Public**: Keep it selected (required for free GitHub Pages)
- **✅ Important**: Check the box **"Add a README file"**
- Leave everything else as default

4. Click **"Create repository"** button

💡 **Why check "Add a README file"?** This initializes the repository so you can immediately upload files.

---

### Step 2: Prepare Your Files

On your computer, open the folder:
```
C:\Users\PRRAN\OneDrive - H & M HENNES & MAURITZ GBC AB\Documents\CodeTest\CodeAgent\src\Bigbangvanity
```

You should see these files and folders:
```
📁 .github/
📁 public/
📁 scripts/
📁 src/
📄 .gitignore
📄 CONTRIBUTING.md
📄 DEPLOYMENT.md
📄 index.html
📄 LICENSE
📄 package.json
📄 QUICKSTART.md
📄 README.md
📄 vite.config.js
... and possibly more
```

**Select ALL of them** (Ctrl+A on Windows)

---

### Step 3: Upload Files to GitHub

1. In your new GitHub repository, you'll see a README.md file (that's normal)
2. Look for the **"Add file"** button (near the top-right, has a dropdown arrow)
3. Click it and select **"Upload files"**

**Upload Process:**
1. You'll see a page with a file upload area
2. **Drag and drop** all your selected files and folders onto this page
   - OR click **"choose your files"** and select everything
3. Wait for all files to upload (you'll see them listed)
4. Scroll down to "Commit changes" section
5. In the text box, type: `Initial commit - Big Bang Theory Vanity Cards App`
6. Click the green **"Commit changes"** button

⏳ **Wait for upload to complete** - This may take 1-2 minutes depending on your internet speed.

💡 **Important**: GitHub automatically maintains folder structure when you upload folders!

---

### Step 4: Verify Your Upload

After uploading, check that everything is there:

1. You should now see all files and folders in your repository
2. Click on folders to verify their contents:
   - `.github/workflows/` should contain `deploy.yml`
   - `src/components/` should have all your React components
   - `src/data/` should have `episodes.json`
   - `public/` should have `atom-icon.svg`

**Missing files?** Repeat Step 3 and upload just the missing files/folders.

---

### Step 5: Enable GitHub Pages

1. Click the **"Settings"** tab (top navigation bar)
2. In the left sidebar, scroll down and click **"Pages"**
3. Under "Build and deployment":
   - **Source**: Click dropdown and select **"GitHub Actions"**
   - (Don't select "Deploy from a branch")
4. That's it - no save button needed!

📝 **Note**: Make sure you select "GitHub Actions", NOT "Deploy from a branch"

---

### Step 6: Watch the Magic Happen! ✨

1. Click the **"Actions"** tab (top navigation bar)
2. You should see a workflow run called **"Deploy to GitHub Pages"**
   - If you don't see it, wait 30 seconds and refresh
3. Click on the workflow name to see details
4. Watch the progress:
   - ✅ Checkout code
   - ✅ Setup Node.js
   - ✅ Install dependencies
   - ✅ Build application
   - ✅ Deploy to Pages

⏳ **Wait 2-3 minutes** for the workflow to complete.

When you see a **green checkmark ✅**, deployment is successful!

---

### Step 7: Visit Your Live Website! 🎉

Your website is now live at:
```
https://YOUR_USERNAME.github.io/Bigbangvanity/
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

**Example**: If your username is `johndoe`, visit:
```
https://johndoe.github.io/Bigbangvanity/
```

🎊 **Congratulations! Your app is now live on the internet!**

---

## 🔄 How to Update Your Site Later

When you want to make changes:

### Option 1: Edit Files Directly on GitHub

1. Navigate to the file in your repository
2. Click the filename
3. Click the pencil icon ✏️ (Edit this file)
4. Make your changes
5. Scroll down and click "Commit changes"
6. The workflow runs automatically
7. Wait 2-3 minutes
8. Your site updates!

### Option 2: Upload New Files

1. Click "Add file" → "Upload files"
2. Upload files with the same names
3. GitHub will ask if you want to replace them - say yes
4. Commit changes
5. Workflow runs automatically
6. Site updates in 2-3 minutes!

---

## ❓ Common Questions

### Q: Do I need to install Node.js for deployment?
**A:** No! GitHub Actions installs Node.js automatically in the cloud. You only need Node.js if you want to test the site locally on your computer.

### Q: Can I use a different repository name?
**A:** Yes, but you must also update the `vite.config.js` file. Change `base: '/Bigbangvanity/'` to match your repository name exactly (case-sensitive).

### Q: The workflow failed. What do I do?
**A:** 
1. Go to Actions tab
2. Click the failed workflow
3. Look at the error message
4. Common fixes:
   - Make sure all files uploaded correctly
   - Check that `package.json` exists
   - Verify `vite.config.js` exists
   - Ensure `.github/workflows/deploy.yml` exists

### Q: Site shows 404 error
**A:** 
- Check that the URL exactly matches: `username.github.io/Bigbangvanity/`
- Wait 5 minutes after deployment
- Clear browser cache (Ctrl+Shift+R)
- Verify "GitHub Actions" is selected in Settings → Pages

### Q: Can I make the repository private?
**A:** You can, but you need GitHub Pro for GitHub Pages on private repos. Public repos get Pages for free.

### Q: How do I add more episode data?
**A:** 
1. Navigate to `src/data/episodes.json` in your repository
2. Click the pencil icon to edit
3. Add more episode objects following the existing format
4. Commit changes
5. Site updates automatically!

---

## 🆘 Troubleshooting

### Files Won't Upload
- Try a different browser
- Upload files in smaller batches
- Check your internet connection
- Make sure file names don't have special characters

### Can't Find "Pages" in Settings
- Repository must be Public
- Make sure you're in Settings tab, not your personal settings
- Look in the left sidebar, scroll down

### Workflow Keeps Failing
- Check that `.github/workflows/deploy.yml` exists
- Verify all necessary files are present
- Look at the error message in the Actions log
- Try re-uploading the `.github` folder

### Site Doesn't Load
- Wait 5 full minutes after initial deployment
- Try incognito/private browsing mode
- Clear browser cache
- Check the correct URL format

---

## 🎯 Next Steps

Now that your site is live:

1. **Share it!** Send the link to friends and fellow Big Bang Theory fans
2. **Add more data**: Edit `episodes.json` to add more episodes and vanity cards
3. **Customize**: Change colors in `src/index.css`
4. **Get feedback**: Ask others what features they'd like

---

## 📚 Additional Resources

- [Full Deployment Guide](DEPLOYMENT.md) - More detailed instructions
- [Quick Start Guide](QUICKSTART.md) - Local development setup
- [README](README.md) - Complete project documentation
- [Contributing Guide](CONTRIBUTING.md) - How to add more content

---

**Need more help?** Open an issue in the repository or check the [GitHub Pages documentation](https://docs.github.com/en/pages).

Happy deploying! 🚀

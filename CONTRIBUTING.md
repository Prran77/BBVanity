# Contributing to Big Bang Theory Vanity Cards

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## How to Contribute

### 1. Add Vanity Card Data

The most valuable contribution is adding vanity card information to episodes!

1. Visit [chucklorre.com](http://www.chucklorre.com/) to find vanity cards
2. Edit `src/data/episodes.json`
3. Add vanity card data to episode objects:

```json
{
  "id": 2913,
  "name": "Pilot",
  "vanityCard": {
    "number": 1,
    "text": "The vanity card text...",
    "image": "URL to image if available"
  }
}
```

### 2. Add Episode Trivia

Add interesting facts about episodes:

```json
{
  "trivia": [
    "This episode was filmed before the pilot",
    "Guest star X almost didn't take the role"
  ]
}
```

### 3. Report Bugs

Found a bug? Please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### 4. Suggest Features

Have an idea? Open an issue with:
- Feature description
- Use case/benefit
- Mockups if applicable

### 5. Code Contributions

#### Setup
```bash
git clone <your-repo-url>
cd Bigbangvanity
npm install
npm run dev
```

#### Making Changes
1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test thoroughly
4. Commit with clear messages
5. Push and create a Pull Request

#### Code Style
- Use functional React components
- Follow existing naming conventions
- Add comments for complex logic
- Use CSS variables for colors

## Questions?

Open an issue or reach out to the maintainers!

Thank you for contributing! 🎉

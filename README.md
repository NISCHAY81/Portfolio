# Personal Portfolio - Nischay Kumar Swarnkar
🔗 **Live Demo:** [portfolionischay.netlify.app](https://portfolionischay.netlify.app/)
A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features
- Fully responsive design
- Dark/Light mode toggle
- Smooth scrolling navigation
- Premium aesthetics and UI
- Micro-animations with Framer Motion

## Setup Instructions

1. **Prerequisites**: Ensure you have Node.js installed.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## Deployment
You can deploy the built `dist` folder to Vercel, Netlify, or GitHub Pages.

**For Vercel/Netlify**:
Simply connect your GitHub repository to Vercel or Netlify and it will automatically detect the Vite build settings.

**For GitHub Pages**:
1. Install `gh-pages`: `npm install gh-pages --save-dev`
2. Update `vite.config.js` to set `base: '/repo-name/'`.
3. Add deploy script in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

## Customization
- **Resume**: Place your actual `resume.pdf` in the `public` directory.
- **Profile Photo**: Update the placeholder image in `src/sections/Hero.jsx`.
- **Project Links**: Search for "Placeholder" in `src/sections/Projects.jsx` to update your GitHub repository URLs.

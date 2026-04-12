# My portfolio
A 3D portfolio describing my experience and skills

## Tutorial Reference
- YouTube Tutorial: [JavaScript Mastery - Build and Deploy a 3D Portfolio](https://youtu.be/0fYi8SGA20k?si=0upx_6AvHVhUwxiO)

## Tech Stack
- Vite -> build tool and dev server
- React 19 -> UI library
- Tailwind v3.4.17 -> utility-first CSS styling
- three -> pre requisite of @react-three/fiber and @react-three/drei
- @react-three/fiber -> React renderer for Three.js (lets you write 3D scenes as React components)
- @react-three/drei -> helper components and utilities built on top of @react-three/fiber
- maath -> mathematical functions, geometry and utility helpers for 3D
- react-parallax-tilt -> tilt animation effect on hover for cards
- react-vertical-timeline-component -> vertical timeline UI, similar to LinkedIn's experience section
- @emailjs/browser -> send emails directly from the browser without a backend
- framer-motion -> animations and transitions
- react-router-dom -> client-side routing

## Getting Started

## Prerequisites
- Node.js v22.14.0
- npm

### Installation steps
1. Created project using Vite:
```bash
   npm create vite@latest
```
   Select **React** and **JS + React Compiler**

2. Installed Tailwind CSS v3.4.17 from Framework Guide (Vite):
```bash
   cd project
   npm install -D tailwindcss@3 postcss autoprefixer
   npx tailwindcss init -p
```
   Update `content` in `tailwind.config.js`:
```js
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
```
   Add inside `index.css`:
```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
```

3. Installed dependencies:
```bash
   npm install three @react-three/fiber @react-three/drei maath react-parallax-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```

4. Run the dev server:
```bash
   npm run dev
```

### Issues & Fixes
- **react-tilt peer dependency conflict** — Used `--legacy-peer-deps` since react-tilt
  expects `@types/react@^18` but the project uses React 19.
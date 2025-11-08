# 3-D Portfolio

**Interactive 3D portfolio showcasing projects, an AI chat bot, and demo apps**

Live / Repo: https://github.com/rituraj000/3-d-portfolio

---

Why this repo is exciting

- Beautiful interactive 3D scenes made with Three.js and React Three Fiber.
- Project showcases including UPLIVE (social app), Task Manager, AI Bot, and more.
- Smooth UI animations using Framer Motion and responsive design with Tailwind CSS.

Key features

- 3D hero canvas (computers / earth / stars) powered by React Three Fiber.
- Projects cards with screenshots, tech tags, and links to live demos & source code.
- Dedicated AI Bot demo to demonstrate LLM/chat integration and realtime UX.

Tech stack

- React (Vite)
- React Three Fiber / Three.js
- Tailwind CSS
- Framer Motion
- Node.js / Express / MongoDB (used by showcased backend projects)

Quick start (developer)

1. Clone the repo

```powershell
git clone https://github.com/rituraj000/3-d-portfolio.git
cd 3d-portfolio
```

2. Install dependencies

```powershell
npm install
```

3. Run the dev server

```powershell
npm run dev
```

4. Open the app

Open http://localhost:5173 in your browser (Vite default).

Build for production

```powershell
npm run build
npm run preview
```

Project structure (high level)

- `src/` — React source and components
  - `components/` — UI + 3D canvas components
  - `assets/` — images and an export barrel (`index.js`)
  - `constants/index.js` — site/project data used by components

Troubleshooting

- If an image works locally but fails on deployment, check filename casing — Linux hosts are case-sensitive. Keep imports matching the filename exactly.
- Restart the dev server after updating `src/assets/index.js`.
- Use the browser DevTools Network tab to inspect missing requests (404) and open the Console for runtime errors.

Contributing

- Fork the repo, create a branch, and open a PR with a clear description of your changes.
- Small enhancements, bug fixes, and documentation improvements are welcome.

Contact

- Built and maintained by Ritu Raj — https://github.com/rituraj000

License

- MIT

---

Thanks for checking out the portfolio! Add screenshots or a hosted demo link to make this README even more compelling.

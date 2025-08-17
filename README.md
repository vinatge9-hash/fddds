# Sunstone Bistro — Simple Restaurant Website

This is a small, AI-generated restaurant website built with static HTML, Tailwind CSS (via CDN), and a minimal Express server to serve the public files.

Project structure:
- public/       — HTML, CSS (Tailwind via CDN) and client-side JS
- server/       — Express server that serves static files
- package.json  — Node project configuration
- vercel.json   — Vercel deployment configuration

Notes:
- Images are placeholders. When an image is needed, a placeholder was inserted using the format: `https://images.unsplash.com/photo-1629734568608-9dc233e0ea06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHw0fHxhJTIwZGV0YWlsZWQlMjBkZXNjcmlwdGlvbiUyMG9mJTIwdGhlJTIwaW1hZ2V8ZW58MHwwfHx8MTc1NTQzMTA4NXww&ixlib=rb-4.1.0&q=80&w=1080`.
- Navigation links are relative and use files inside the `public` folder (e.g., `about.html`).

Local usage:
1. Install dependencies:

   npm install

2. Start the server:

   npm start

3. Open http://localhost:3000 in your browser.

Deploying to Vercel:
- This repository includes a `vercel.json` configured to run the Express server and serve static files. Deploy the project through the Vercel CLI or Dashboard.

Customizing:
- Edit the HTML files in `public/` to change content.
- Update `public/main.js` for client-side behavior.

License: MIT (for the generated template)

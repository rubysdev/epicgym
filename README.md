# EPIC GYM Landing Page

A modern, responsive landing page for EPIC GYM in Orăștie, Romania.

## Features

- Responsive design optimized for all devices
- Modern black and white aesthetic with minimal purple accents
- Video background hero section
- Social media integration
- Coming soon page with location details
- Legal compliance footer

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment on Netlify

### Option 1: Git-based Deployment (Recommended)

1. **Push to Git repository:**
   - Create a new repository on GitHub/GitLab
   - Push this code to your repository

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider and select your repository
   - Use these build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Configure custom domain:**
   - Go to Site settings → Domain management
   - Add custom domain: `epicgym.ro`
   - Follow DNS configuration instructions

### Option 2: Manual Deployment

1. **Build the project:**
```bash
npm run build
```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to deploy

### DNS Configuration for epicgym.ro

Configure your domain's DNS settings:

**For Netlify DNS:**
- Add CNAME record: `www` → `your-site-name.netlify.app`
- Add A record: `@` → `75.2.60.5`

**For external DNS:**
- Add CNAME record: `epicgym.ro` → `your-site-name.netlify.app`

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles (Tailwind)
└── vite-env.d.ts    # TypeScript definitions

public/
├── _redirects       # Netlify redirects for SPA
└── vite.svg         # Favicon

netlify.toml         # Netlify configuration
```

## Social Media Links

Update the social media links in `src/App.tsx`:
- Facebook: Update href in Facebook button
- Instagram: Update href in Instagram button  
- X (Twitter): Update href in X button
- TikTok: Update href in TikTok button

## Contact Information

Update contact details in the footer section of `src/App.tsx`:
- Phone number
- Email address
- Company registration details (CUI)

## License

© 2024 EPIC GYM. All rights reserved.
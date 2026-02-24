# Deployment Documentation

## GitHub Pages Deployment

This site is deployed to GitHub Pages at: https://spartan-nus.github.io/

### Automatic Deployment

The repository is configured for automatic deployment via GitHub Actions:

- **Trigger**: Automatically deploys on every push to the `main` branch
- **Workflow**: `.github/workflows/deploy.yml`
- **Process**:
  1. GitHub Actions runs `npm ci` to install dependencies
  2. Runs `npm run build` to create production build
  3. Deploys the `dist/` folder to GitHub Pages
  4. Creates a `404.html` copy for SPA routing support

### Manual Deployment

You can also deploy manually using the gh-pages package:

```bash
npm run deploy
```

This will:
1. Run `npm run build` (via predeploy script)
2. Deploy the `dist/` folder to the `gh-pages` branch

### Authentication Setup

Git authentication is configured using a GitHub Personal Access Token (PAT).

**Token stored in**: `.env` file (not committed to git)
```
GITHUB_TOKEN=github_pat_...
```

**Git remote configured with token**:
```bash
git remote set-url origin https://${GITHUB_TOKEN}@github.com/spartan-nus/spartan-nus.github.io.git
```

**Token permissions required**:
- Repository: `spartan-nus/spartan-nus.github.io`
- Contents: Read and write

**Security notes**:
- The `.env` file is in `.gitignore` to prevent token exposure
- Token has fine-grained access to only this repository
- Token has expiration date for security
- Remember to rotate the token before expiration

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (runs on port 8080, or 8081 if 8080 is busy)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Repository Details

- **GitHub Repository**: https://github.com/spartan-nus/spartan-nus.github.io
- **Live Site**: https://spartan-nus.github.io/
- **Framework**: Vite + React + TypeScript
- **UI Library**: shadcn-ui + Tailwind CSS

### Notes

- The site uses `BrowserRouter` for routing
- The deployment process creates a `404.html` copy of `index.html` to handle SPA routing on GitHub Pages
- The `homepage` field in `package.json` is set to `https://spartan-nus.github.io/`

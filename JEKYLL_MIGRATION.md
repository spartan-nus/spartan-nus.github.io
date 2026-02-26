# Jekyll Migration - Deployment Summary

## What Was Done

### 1. Preserved React Version
- All React source code moved to `react-version/` directory
- Includes: `src/`, `vite.config.ts`, `tailwind.config.ts`, `package.json`, etc.
- React version is preserved but not used for deployment

### 2. Deployed Jekyll Version
- Merged `jekyll-rewrite` branch into `main`
- Jekyll files now at root level:
  - `_config.yml` - Jekyll configuration
  - `Gemfile` - Ruby dependencies
  - `_layouts/` - Layout templates
  - `_includes/` - Reusable components (header, footer, carousel)
  - `_data/` - YAML data files (news, events, research)
  - `*.md` files - Page content in markdown

### 3. Updated GitHub Actions
- Changed deployment workflow from npm/vite to Jekyll
- Workflow now uses Ruby and `jekyll build`
- Automatic deployment on push to main

## Content Structure

### Markdown Files (Content)
- `index.md` - About page
- `news.md` - News & Events page
- `research.md` - Research projects page
- `people.md` - Team members page
- `contact.md` - Contact information

### YAML Data Files (in `_data/`)
- `events.yml` - Event items
- `news.yml` - News items
- `research.yml` - Research projects

### Includes (Reusable Components)
- `_includes/header.html` - Navigation bar
- `_includes/footer.html` - Footer
- `_includes/carousel.html` - Image carousel

### Layouts
- `_layouts/default.html` - Main page layout

## How to Update Content

### Adding News Items
Edit `_data/news.yml`:
```yaml
- date: "Mar 1, 2026"
  title: "New Research Paper"
  description: "Description here"
  link: "https://example.com"
```

### Adding Events
Edit `_data/events.yml`:
```yaml
- date: "Apr 15, 2026"
  title: "Conference"
  description: "Event details"
  link: "https://example.com"
```

### Adding Research Projects
Edit `_data/research.yml`:
```yaml
- title: "New Project"
  description: "Project description"
  link: "https://example.com"
```

### Editing Page Content
Just edit the markdown files directly:
- `index.md` for About page
- `contact.md` for Contact info
- etc.

## Deployment

### Automatic
- Push to `main` branch triggers GitHub Actions
- Jekyll builds the site automatically
- Site deploys to https://spartan-nus.github.io/

### Manual (Local Testing)
```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

## Benefits of Jekyll

1. **Easier Content Management**
   - No React/TypeScript knowledge needed
   - Edit YAML and Markdown files directly
   - No build step for content changes

2. **Better for Non-Developers**
   - Plain text content files
   - Simple data structures
   - No code required

3. **GitHub Pages Native**
   - Jekyll is natively supported
   - Simpler deployment
   - Faster build times

4. **Maintainability**
   - Separation of content and presentation
   - Data-driven approach
   - Cleaner codebase

## Migration Verification

✅ All content verified as matching 100%
✅ All links functional
✅ All images present
✅ Navigation working
✅ Carousel on all pages
✅ Responsive design preserved

## React Version

The original React version is preserved in `react-version/` directory for reference or rollback if needed.

To use React version again:
1. Copy files from `react-version/` back to root
2. Update GitHub Actions workflow
3. Push to deploy

---

**Deployed:** February 26, 2026
**Migration Status:** ✅ Complete
**Live Site:** https://spartan-nus.github.io/

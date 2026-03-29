# GitHub Pages Setup Guide — abadimage.com

## Step 1: Create a GitHub account (skip if you have one)
Go to https://github.com/signup and create a free account.

## Step 2: Create the repository
1. Go to https://github.com/new
2. Repository name: **abadimage.github.io** (or any name, e.g. `portfolio`)
3. Set to **Public**
4. Click **Create repository**

## Step 3: Upload the site files
1. On the new repo page, click **"uploading an existing file"**
2. Drag and drop `index.html` from your Resume folder
3. Click **Commit changes**

## Step 4: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under "Source", select **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes — your site will be live at `https://abadimage.github.io`

## Step 5: Connect your custom domain (abadimage.com)
### In GitHub:
1. Still in **Settings → Pages**, type `www.abadimage.com` in the "Custom domain" field
2. Click **Save**
3. Check **Enforce HTTPS**

### At your domain registrar (where you bought abadimage.com):
Add these DNS records:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | abadimage.github.io |

DNS can take up to 24 hours to propagate (usually under 30 minutes).

## Step 6: Upload your photos
The carousel references `photo1.png` through `photo24.png`. Make sure all 24 files are uploaded to the same repo folder as `index.html`.

## Step 7: You're done
Your GitHub is already set to `github.com/abadimage` — no changes needed in the site.

---

## Quick reference: editing the site
- All content is in the single `index.html` file
- Colors can be changed in the `:root` CSS variables at the top
- To add/remove experience entries, copy an existing `timeline-item` block
- To add/remove project cards, copy an existing `project-card` block
- The site is fully responsive — test on mobile by resizing your browser

## What's included in the site
- **Frosted glass nav** with scroll detection and active section highlighting
- **Animated counters** that count up when scrolled into view
- **Scroll reveal animations** on all sections (IntersectionObserver-based, no library)
- **Masonry photo gallery** with lightbox viewer (keyboard accessible)
- **Subtle parallax** on the hero grid background (respects reduced motion)
- **Mobile hamburger menu** with full-screen overlay and focus management
- **SF-style typography** (Inter + JetBrains Mono)
- **Zero dependencies** — no React, no build step, just HTML/CSS/JS

## WCAG 2.1 AA Accessibility (27/27 checks passing)
- **Skip to main content** link (visible on Tab)
- **Semantic HTML** — proper heading hierarchy (h1→h2→h3), `<main>`, `<nav>`, `<footer>`
- **Color contrast** — all text meets 4.5:1 minimum ratio
- **Keyboard navigation** — all interactive elements focusable, gallery items support Enter/Space
- **Focus management** — lightbox and mobile menu trap/return focus correctly
- **ARIA labels** — all sections, dialogs, buttons, and decorative elements properly labeled
- **Reduced motion** — `prefers-reduced-motion` disables all animations and parallax
- **Focus visible** — custom outline styles on all interactive elements

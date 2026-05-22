# Deploy — abadimage.com personal site (v1)

## What's in this folder

```
index.html           ← new site (replaces the current one)
site-components.jsx  ← Polaroid, FilmStripCard, PassportStamp, etc.
site-sections-1.jsx  ← Nav, Hero, About, StatusBoard
site-sections-2.jsx  ← Career, VisualWork (stills+motion tabs), Contact, Footer
site-app.jsx         ← Root that wires everything together
```

## Photos it expects

The page references these filenames at the repo root (matching the names you already created):

**Hero** — `waiting.png`, `growth.png`
**Stills (9)** — `sakura.png`, `kirei.png`, `snow.png`, `waves.png`, `upinthesky.png`, `shoes.png`, `plantlife.png`, `tunnelvision.png`, `lightsout.png`
**Motion (6)** — `rushhour.png`, `slowmotion.png`, `peekaboo.png`, `castle.png`, `junkadelic.png`, `scale.png`

Upload real content to each of these filenames in your repo.

## To deploy

1. In your local clone of `abadimage/abadimage.github.io`:
   - Replace the existing `index.html` with the one in this folder
   - Add all four `site-*.jsx` files alongside it
   - Make sure the 17 photo filenames above exist (with real content)
2. `git add . && git commit -m "redesign: playful + status board" && git push`
3. GitHub Pages will rebuild within ~1 minute. Visit https://abadimage.com to verify.

## Edit later

- Photo lists live in `site-sections-2.jsx` (`STILLS` + `MOTION` arrays)
- Hero polaroids in `site-sections-1.jsx`
- Stamp data (career timeline) in `site-sections-2.jsx` (`STAMPS` array)
- Status board services in `site-sections-1.jsx` (`SERVICES` array)
- Color tokens in `index.html` `:root` block (`--paper`, `--accent`, etc.)

## Performance note

The page uses Babel-in-browser to transpile JSX on load. That's fine for a personal site at this scale (one-time ~200ms hit on first visit). If you want max performance later, the JSX files can be precompiled to plain JS — happy to do that pass anytime.

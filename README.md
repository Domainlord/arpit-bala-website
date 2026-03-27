[Uploading README.md…]()
# Arpit Bala — Official Website

A fully responsive, modern fan website for Indian rapper **Arpit Bala**, built with pure HTML, CSS and JavaScript.

**Designed & Built by Chirag**

---

## Features

- 🎵 **Real Audio Playback** — YouTube IFrame API powers background audio with a persistent player bar (play/pause, prev/next, seek, volume)
- 📀 **Clickable Album Pages** — Each album opens a detail page with its full tracklist, all songs playable
- 🎬 **Music Video Player** — YouTube thumbnails load automatically; click to watch in a fullscreen modal
- 🖼️ **Photo Gallery** — Masonry grid with hover effects and a lightbox viewer (keyboard arrow navigation)
- ✨ **Smooth Animations** — Scroll-reveal, parallax hero, equalizer bars, custom cursor, staggered entry animations
- 📱 **Fully Responsive** — Works on mobile, tablet and desktop

---

## File Structure

```
arpit-bala-website/
├── index.html        ← Main HTML file (structure & content)
├── css/
│   └── style.css     ← All styles (variables, layout, animations, responsive)
├── js/
│   └── main.js       ← All JavaScript (data, YouTube player, gallery, modals)
└── README.md
```

---

## How to Run Locally

Just open `index.html` in any modern browser. An internet connection is required for:
- Google Fonts
- YouTube IFrame API (audio playback)
- YouTube video thumbnails
- Picsum placeholder photos (replace with real photos)

---

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages → Source → main branch → / (root)**
3. Save — your site will be live at `https://yourusername.github.io/repo-name`

---

## Customisation Tips

- **Replace gallery photos**: Edit the `GALLERY` array in `js/main.js` with real photo URLs
- **Add/remove songs**: Edit the `SONGS` array in `js/main.js`
- **Update album tracks**: Edit the `ALBUMS` array in `js/main.js`
- **Add the artist photo**: Replace the `AB` placeholder in `index.html` with an `<img>` tag

---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure & semantic markup |
| CSS3 | Styling, animations, grid layout, CSS variables |
| Vanilla JS | DOM rendering, SPA routing, player logic |
| YouTube IFrame API | Background audio + video embed |
| Google Fonts | Bebas Neue, Syne, DM Sans |

---

*© 2025 Arpit Bala · Fan website · All rights reserved*

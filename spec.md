# 🔧 GitHub Pages Profile Site — Developer Specification

## 🧱 1. Overview

Create a custom personal profile site using **GitHub Pages**, built from scratch with **Jekyll** and **Liquid** templates. The site includes a stylized, fixed-height landing page with interactive visuals, multiple content sections, and a surreal, ephemeral user experience with no data persistence.

---

## 🗂️ 2. Project Architecture

- **Hosting:** GitHub Pages (`yourusername.github.io`)
- **Static Site Generator:** [Jekyll](https://jekyllrb.com/)
- **Templating Engine:** Liquid (built into Jekyll)
- **Structure:**
  ```
  ├── _layouts/
  │   └── default.html
  ├── _includes/
  ├── assets/
  │   ├── css/
  │   ├── js/
  │   └── images/
  ├── index.md (or index.html)
  ├── _config.yml
  └── ...
  ```

---

## 🎨 3. Visual Design & Interaction

### 📌 Landing Page (Fixed Height)

#### Layered Design:

| Layer | Content                                                                                                        |
| ----- | -------------------------------------------------------------------------------------------------------------- |
| 1     | White background                                                                                               |
| 2     | Blurred/muted traits: `aerospace engineer`, `tablist`, `photographer`, etc.                                    |
| 3     | Scroll-triggered witty quotes, with randomized word appearance (e.g., "I don’t know why I made this website.") |

#### Behavior:

- **Quotes animate** as user scrolls (words appear in random order using JS + GSAP).
- **Scroll trigger library:** [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Font:** `"Suisseintl Webxl", Arial, sans-serif`

---

### 🧠 Pixelated Eye Section

- **Static Appearance:** Pixelated grid resembling an eye.
- **Interaction:** Cursor movement disturbs colors in an **area of effect** using Canvas/WebGL.
- **Color Palette:** Harmonized with site’s aesthetic (e.g., desaturated purples, grays, soft teals).
- **Easter Egg Text Overlay:** `"BIG BROTHER IS WATCHING"` visible on grid.

---

### 🎵 Fluid Sound-Color Field

- **Visual:** Animated fluid/aurora-like field (canvas/WebGL).
- **Interaction:** Cursor movement generates **instrumental notes** (e.g., piano, vibraphone).
- **Sound Engine:** [Tone.js](https://tonejs.github.io/)
- **Response:**
  - Cursor movement maps to pitch, timbre, or spatial delay.
  - Field ripples where pointer moves.

---

### 🗾️ Footer

- **Contents:**
  - Contact info or social media (GitHub, email).
  - Text: `"Made with creativity and AI 🤖✨"`

---

### 🔐 Console Easter Egg

- **Triggered when dev tools opened**
- **Console message:**
  ```js
  console.log("Curious minds dig deeper. Welcome, traveler.");
  ```

---

## 📁 4. Content Sections (Separate Pages)

Each section is built as a separate Markdown/HTML page, routed via Liquid includes.

### 🖼️ Photography Gallery

- Masonry layout using CSS Grid or `photoswipe.js`
- Images loaded from `/assets/images/photos/`

### ✍️ Blogging Sections

- Two Jekyll collections:
  - `_thoughts/`: Movie reviews, philosophy, ideas.
  - `_diary/`: Personal, stream-of-consciousness.
- Custom templates to separate styling and feel.

### 🧑‍💻 Project Showcase

- Initially empty but structured to grow.
- Uses cards or dynamic tiles linking to:
  - GitHub repos
  - Live demos

---

## ⚙️ 5. Technical Details

### Config: `_config.yml`

```yml
title: "Your Name"
description: "A surreal playground of thoughts, sounds, and color."
theme: null
markdown: kramdown
collections:
  thoughts:
    output: true
  diary:
    output: true
```

---

## ⚠️ 6. Error Handling

### General:

- 404 page with an animated quote: `"You weren’t meant to find this."`
- Fallback messages if:
  - JS fails to load: `"Animations failed to load, but your curiosity hasn’t."`
  - Tone.js not supported: `"Your browser doesn’t feel like playing music today."`

---

## ✅ 7. Testing Plan

| Component                | Test Case                    | Expected Result              |
| ------------------------ | ---------------------------- | ---------------------------- |
| Jekyll build             | `bundle exec jekyll serve`   | Site builds with no warnings |
| Landing scroll animation | Scroll down                  | Quotes animate randomly      |
| Pixel grid               | Move mouse                   | Local color disturbance      |
| Sound field              | Move mouse in field          | Distinct notes play          |
| Console                  | Open dev tools               | Custom message appears       |
| Responsiveness           | Resize browser / mobile view | Layout adapts gracefully     |
| 404 page                 | Visit unknown path           | Custom 404 displays          |

---

## 🔮 8. Future Enhancements (Optional Ideas)

- Add dark/light mode switch.
- Use service worker to cache audio for offline play.
- Integrate WebGL shaders for more advanced visual fluid effects.
- Add a hidden interactive terminal that reveals site lore.


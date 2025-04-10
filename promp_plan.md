# 📋 GitHub Profile Site — Task Board

## ✅ Overview

- [x] Project hosted on **GitHub Pages**
- [x] Built with **Jekyll** and **Liquid**
- [x] Stylized, fixed-height landing page with interactive visuals
- [x] No data persistence; ephemeral experience

---

## 🏗 Project Architecture

- [ ] Set up project structure:
  - [ ] `_layouts/default.html`
  - [ ] `_includes/`
  - [ ] `assets/css/`, `assets/js/`, `assets/images/`
  - [ ] `index.md` or `index.html`
  - [ ] `_config.yml`

---

## 🎨 Visual Design & Interaction

### 📌 Landing Page

- [ ] Implement **white background layer**
- [ ] Add **blurred/muted traits**: `aerospace engineer`, `tablist`, `photographer`, etc.
- [ ] Scroll-triggered witty quotes (random word animation)
  - [ ] Use **GSAP + ScrollTrigger**
  - [ ] Font: `"Suisseintl Webxl", Arial, sans-serif`

---

### 👁 Pixelated Eye Section

- [ ] Static pixel grid resembling an eye
- [ ] Cursor interaction using Canvas/WebGL
- [ ] Display `"BIG BROTHER IS WATCHING"` overlay
- [ ] Use harmonized color palette

---

### 🎵 Fluid Sound-Color Field

- [ ] Animated fluid field with Canvas/WebGL
- [ ] Cursor movement = musical notes using **Tone.js**
- [ ] Ripple effects where pointer moves

---

### 🗾️ Footer

- [ ] Contact info and socials
- [ ] Text: `"Made with creativity and AI 🤖✨"`

---

### 🔐 Console Easter Egg

- [ ] Message on dev tools open:
  ```js
  console.log("Curious minds dig deeper. Welcome, traveler.");
  ```

---

## 📁 Content Pages

### 🖼️ Photography Gallery

- [ ] Masonry layout (CSS Grid or `photoswipe.js`)
- [ ] Load images from `/assets/images/photos/`

### ✍️ Blog Collections

- [ ] Create `_thoughts/` and `_diary/` collections
- [ ] Enable custom templates
- [ ] Ensure separate styling and mood

### 🧑‍💻 Project Showcase

- [ ] Create card/tile layout
- [ ] Link to GitHub repos and live demos
- [ ] Leave flexible to expand

---

## ⚙️ Technical Config

- [ ] Configure `_config.yml`:
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

## ❌ Error Handling

- [ ] Custom 404 page: `"You weren’t meant to find this."`
- [ ] Fallback for JS fail: `"Animations failed to load, but your curiosity hasn’t."`
- [ ] Fallback for Tone.js fail: `"Your browser doesn’t feel like playing music today."`

---

## 🔍 Testing Plan

- [ ] `bundle exec jekyll serve` — check for warnings
- [ ] Scroll animation works
- [ ] Pixel grid reacts to cursor
- [ ] Sound field responds to mouse
- [ ] Console message on dev tools open
- [ ] Responsive layout on all screens
- [ ] 404 page loads for unknown paths

---

## 🔮 Future Enhancements (Optional)

- [ ] Add dark/light mode toggle
- [ ] Use service workers for offline sound
- [ ] Upgrade visuals with custom WebGL shaders
- [ ] Add secret terminal for lore discovery

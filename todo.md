# 📋 GitHub Profile Site — Todo Checklist

A thorough step-by-step checklist to build your interactive GitHub Pages profile site using Jekyll and Liquid.

## ✅ Setup & Initialization

- [ ] Create GitHub repository `yourusername.github.io`
- [ ] Install Ruby and Bundler
- [ ] Install Jekyll (`gem install jekyll bundler`)
- [ ] Create new Jekyll site (`jekyll new .` in repo)
- [ ] Update `_config.yml` with project metadata and collections
- [ ] Push initial site to GitHub Pages

## 📁 Directory Structure

- [ ] Create `_layouts/default.html`
- [ ] Create `_includes/` for reusable components
- [ ] Create `assets/css`, `assets/js`, and `assets/images`
- [ ] Create `index.md` or `index.html` for landing page

## 🎨 Landing Page Design

- [ ] Add white background base layer
- [ ] Add blurred/muted traits layer
- [ ] Add scroll-triggered quotes (randomized)
- [ ] Integrate GSAP and ScrollTrigger for animation
- [ ] Use `"Suisseintl Webxl"` or fallback fonts
- [ ] Test scroll interaction

## 🧠 Pixelated Eye Section

- [ ] Create canvas or WebGL effect for pixel grid
- [ ] Implement area-of-effect color disturbance on cursor movement
- [ ] Overlay `"BIG BROTHER IS WATCHING"` easter egg

## 🎵 Fluid Sound-Color Field

- [ ] Create animated fluid/aurora-like canvas or WebGL
- [ ] Integrate Tone.js
- [ ] Map cursor movement to musical notes (pitch, delay, etc.)
- [ ] Trigger ripples/response on pointer move

## 🗾️ Footer

- [ ] Add GitHub/email links
- [ ] Add signature line: `"Made with creativity and AI 🤖✨"`

## 🔐 Console Easter Egg

- [ ] Detect dev tools open event
- [ ] Display console message: `Curious minds dig deeper. Welcome, traveler.`

## 📂 Content Sections

- [ ] Create `/thoughts/` and `/diary/` collections in `_config.yml`
- [ ] Design blog templates for both styles
- [ ] Add example posts in `_thoughts/` and `_diary/`
- [ ] Build `/projects/` showcase using cards/tiles
- [ ] Build `/photos/` gallery with masonry layout or PhotoSwipe

## ⚙️ Error Handling

- [ ] Create custom 404.html page with animated quote
- [ ] Add fallback messages for JS and Tone.js errors

## 🔬 Testing

- [ ] Run `bundle exec jekyll serve` with no warnings
- [ ] Test quote scroll animation
- [ ] Test pixel grid responsiveness
- [ ] Test sound field interaction
- [ ] Open console and check for message
- [ ] Test layout responsiveness on mobile/tablet
- [ ] Navigate to broken link to confirm 404

## 🧪 Future Enhancements (Optional)

- [ ] Add dark/light mode toggle
- [ ] Use service worker to cache sound files
- [ ] Explore WebGL shaders for more advanced visuals
- [ ] Build interactive terminal for lore discovery
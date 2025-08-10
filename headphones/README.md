# 🎧 Headphones Landing Page

> **Goal:** Build a **pixel-perfect** recreation of the Figma design for desktop, tablet, and mobile — all **without frameworks** — while keeping the code **accessible, responsive, and maintainable**.

---

## 📂 Project Structure

```
alx_html_css/
└── headphones/
    ├── 0-index.html / 0-styles.css      # Header
    ├── 1-index.html / 1-styles.css      # “What we do…”
    ├── 2-index.html / 2-styles.css      # “Our results”
    ├── 3-index.html / 3-styles.css      # Contact-us form
    ├── 4-index.html / 4-styles.css      # Footer
    ├── 6-index.html / 6-styles.css      # Pentagons with CSS
    ├── 7-index.html / 7-styles.css      # Footer + animations
    ├── 8-index.html / 8-styles.css / 8-script.js  # Hamburger menu (≤ 480px)
    ├── README.md
    └── holberton_school-icon/
        ├── fonts/
        ├── demo.html
        └── style.css
```

---

## ✅ Features Implemented

| Feature | Status | Notes |
|---------|--------|-------|
| Reset & Variables | ✅ | `_reset.css` + `:root` variables for colors, fonts, max-width, timing |
| Max-width 1000px Centered | ✅ | `.container { max-width: 1000px; margin: auto; }` |
| Link Hover/Active | ✅ | `color: #FF6565` |
| Button Hover/Active | ✅ | `opacity: 0.9` |
| Mobile Breakpoint ≤ 480px | ✅ | `@media (max-width: 480px)` |
| Hamburger Menu | ✅ | Vanilla JS (`8-script.js`) |
| Pentagons with CSS | ✅ | `clip-path: polygon(...)` |
| Animations | ✅ | Hover + infinite keyframes |
| Accessibility | ✅ | Semantic tags, `alt` texts, `aria-labels`, focus states |
| Responsive Images | ✅ | `max-width: 100%; height: auto;` |
| Icon Font | ✅ | Custom font from Figma icons |

---

## 🏗 Build Strategy

1. **Outside → Inside, Top → Bottom**  
   Header → Sections → Footer → Extras
2. **Reusable Components**  
   `.btn`, `.card`, `.section-title`, `.container`
3. **Low Specificity**  
   Classes > IDs > nested selectors
4. **Mobile-First**  
   Base styles → `min-width: 768px` → `min-width: 1000px`
5. **DRY & Variables**  
   Colors, spacing, font stacks in `:root`

---

## 🎨 Style Guide

```css
:root {
  --clr-primary: #FF6565;
  --clr-dark: #071629;
  --clr-white: #FFFFFF;
  --font-main: 'Source Sans Pro', sans-serif;
  --font-accent: 'Spin Cycle OT', monospace;
  --max-width: 1000px;
  --transition: .3s ease;
}
```

- **Main Font:** [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro)  
- **Accent Font:** Spin Cycle OT (self-hosted)  
- **Icons:** Custom icon font (`holberton_school-icon/style.css`)  

---

## 🧪 Running Locally

```bash
git clone https://github.com/<user>/alx_html_css.git
cd alx_html_css/headphones
open 8-index.html
```

---

## 🪄 Animations Overview

| Element         | Trigger | Effect |
|-----------------|---------|--------|
| `.feature-card` | hover   | `transform: scale(1.05) rotate(2deg)` |
| `.stat-pentagon`| infinite| pulse + glow keyframes |
| `.hamburger span` | click | Rotates into ✖ |

---

## 🍔 Hamburger Menu (≤ 480px)

**HTML:**
```html
<button class="hamburger" aria-label="Toggle navigation" aria-controls="nav-menu">
  <span></span><span></span><span></span>
</button>
<nav id="nav-menu" class="nav">
  <a href="#what">what we do</a>
  <a href="#results">our results</a>
  <a href="#contact">contact us</a>
</nav>
```

**Behavior:**  
- JS toggles `.open` on both button and nav  
- CSS animates bars into X and slides menu down  

---

## ♿ Accessibility Checklist

- [x] Semantic HTML (`header`, `nav`, `main`, `section`, `footer`)  
- [x] `alt` text for all images  
- [x] `aria-label` for icon buttons  
- [x] Focus styles match hover styles  
- [x] Color contrast ≥ WCAG AA  

---

## 📝 Contributing

1. **Fork** the repo  
2. **Create** a branch (`feat/new-feature`)  
3. **Commit** with clear messages (`a11y: improve footer contrast`)  
4. **PR** against `main` branch  

---

## 📄 License

Released under the **MIT License** — free to use in your own portfolio.  

> Crafted with ❤️ for the ALX HTML/CSS specialization.  
> _“Simplicity is the ultimate sophistication.”_

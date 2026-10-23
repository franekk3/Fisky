  # <img src="https://raw.githubusercontent.com/franekk3/Fisky/be669fa316bd59369e62c3d2fc0d69ac06f31b24/icons/icon.svg" height="60px" width="60px" style="vertical-align: middle;">Fisky
  
> Minimalist flashcards right in your browser — your sets, your learning.
> Built in the spirit of Material 3, fully offline, as a PWA.

[![License: GPL v3+](https://img.shields.io/badge/License-GPLv3%2B-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![PWA](https://img.shields.io/badge/PWA-ready-5A0FC8.svg)](#-pwa--offline)
[![Made with Vanilla JS](https://img.shields.io/badge/Vanilla-JS-yellow.svg)](https://developer.mozilla.org/docs/Web/JavaScript)

---
## Try Fisky:
[![License: GPL v3+](https://img.shields.io/badge/Fisky-GitHub%20Pages-blue?style=for-the-badge)](https://franekk3.github.io/Fisky)

---

## ✨ Features

- 📚 **Flashcard sets** — create, edit, and delete your own sets. No default data — you start from scratch.
- ⭐ **Mark for review** — star individual cards and filter them later in the browse view.
- 🔄 **Browsing** — 3D flip card, keyboard support (← → space), swipe gestures on mobile, shuffle mode.
- 💾 **Backup** — export the full app state (sets + settings) to a JSON file. Import with two modes: **merge** (safe) or **replace all**.
- 🔗 **Share sets** — export a single set to a `.fisky.json` file. Option to include or omit marked-card metadata.
- 📥 **Import sets** — load a set shared by someone else.
- 🌍 **Two languages** — Polish and English, auto-detected from the browser (fallback: English). Manual switch in settings.
- 🎨 **Material 3** — full palette generated from the seed `#769CDF`, dynamic light/dark/system theme.
- 📱 **Responsive** — Bottom Navigation Bar on mobile, Navigation Rail on desktop.
- 📶 **PWA + offline** — installable, with a service worker caching all assets. Works without internet.
- 🔒 **Privacy** — 100% client-side. No servers, no trackers. Everything stored in `localStorage`.

---

## 📸 Screenshots


| <img src="https://github.com/franekk3/Fisky/blob/main/media/screenshots/mobile1.png?raw=true" > | <img src="https://github.com/franekk3/Fisky/blob/main/media/screenshots/mobile2.png?raw=true" > | <img src="https://github.com/franekk3/Fisky/blob/main/media/screenshots/desktop1.png?raw=true" > | <img src="https://github.com/franekk3/Fisky/blob/main/media/screenshots/desktop2.png?raw=true" > | <img src="https://github.com/franekk3/Fisky/blob/main/media/screenshots/desktop3.png?raw=true" > |
| --------- | --------- | --------- | --------- | --------- |








---

## 🚀 Quick start

Fisky is a static app — no build step, no dependencies.

### Locally

Any HTTP server will do (PWA **won't work** over `file://` due to service worker restrictions):

```bash
# Python 3
python3 -m http.server 8080

# or Node.js
npx serve .

# or PHP
php -S localhost:8080
```

Then open [http://localhost:8080](http://localhost:8080).

### On GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Source: `Deploy from a branch`, branch: `main`, folder: `/ (root)`.
4. Save — after a moment the app will be available at `https://<user>.github.io/<repo>/`.

---

## 📲 PWA / offline

Fisky is fully installable:

- **Android / Chrome** — menu ⋮ → *Install app* or *Add to Home screen*.
- **iOS / Safari** — *Share* button → *Add to Home Screen*.
- **Desktop / Chrome / Edge** — install icon in the address bar.

The service worker (`sw.js`) caches all assets on the first visit. After code changes, bump the cache version in `sw.js`:

```js
const CACHE = 'fisky-v2'; // ← change on every significant update
```

---

## 🗂️ Project structure

```
.
├── index.html              # app structure and dialogs
├── styles.css              # Material 3, themes, responsive layout
├── app.js                  # all logic (state, i18n, views, import/export, PWA)
├── manifest.webmanifest    # PWA manifest
├── sw.js                   # service worker (cache + offline)
├── icons/
│   ├── icon.svg            # app icon
│   └── icon-maskable.svg   # maskable icon (Android)
├── media/
│   └── screenshots            # screenshots
├── README.md
└── LICENSE                 # full GNU GPL v3 text
```

---

## 💾 Data format

### `localStorage`

The entire app state is stored under the key `fisky.state.v1`:

```json
{
  "sets": [
    {
      "id": "…",
      "name": "English vocabulary",
      "cards": [
        { "id": "…", "front": "apple", "back": "jabłko", "marked": false }
      ],
      "updatedAt": 1730000000000
    }
  ],
  "activeSetId": "…",
  "lang": "en",
  "theme": "system"
}
```

### Backup (`fisky.backup.v1`)

File exported from *Settings → Export backup*. Contains the full app state.

### Shared set (`fisky.set.v1`)

File exported from the *Share* action on a set. The `includeMarks` field indicates whether marked-card metadata is included.

### Import safety

Backup import offers **two modes**:

- **Merge** — appends imported sets with new IDs. Nothing is overwritten or deleted.
- **Replace all** — replaces the entire app state (sets, language, theme) with the file contents. Sets and cards absent from the backup will be lost.

Set import (`fisky.set.v1`) never overwrites existing data — it always creates a new set with new IDs.

---

## 🎨 Design system

The app uses a **Material 3** palette generated from the seed `#769CDF` (Material Theme Builder). All colors are defined as CSS variables in `:root` and `:root[data-theme="dark"]` — easy to swap or extend with custom variants.

The theme switches between three options:

- **System** — reacts to `prefers-color-scheme` in real time.
- **Light** / **Dark** — forced.

---

## 🌍 Internationalization

Translations live in the `STRINGS` object in `app.js`. To add a new language:

1. Copy the `en` block in `STRINGS` and translate it.
2. Add the language code to `detectLang()`.
3. Extend validation in `loadState()` and `setLanguage()`.
4. Add a button to `#langSegmented` in `index.html`.

---

## 🛠️ Development

The project is intentionally **framework-free and build-step-free** — pure HTML, CSS, and JS. Just edit files and refresh.

Helpful commands:

```bash
# local server
python3 -m http.server 8080

# if using PWA — after changing files:
# 1. bump CACHE in sw.js
# 2. DevTools → Application → Service Workers → Unregister
# 3. DevTools → Application → Storage → Clear site data
# 4. refresh the page
```

---

## 📄 License

This project is released under the **GNU General Public License v3.0 or later** (SPDX: `GPL-3.0-or-later`).

This means you can:

- ✅ use the app for any purpose,
- ✅ modify the source code,
- ✅ redistribute copies (modified or not),

provided that you:

- 📎 **make the source code available** for every distributed version under the same license,
- 📎 **keep the author and license notices**,
- 📎 **document changes** relative to the original.

The full license text is in the [`LICENSE`](./LICENSE) file or at [gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0.html).

```
Copyright (C) 2026 <Your Name>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
```

---

## 🤝 Contributing

Pull requests and bug reports are welcome. If you add a feature:

1. Stay consistent with Material 3 and the existing code style.
2. Cover both languages (`pl`, `en`) — missing keys in `STRINGS` will return the raw `key`.
3. Test PWA on mobile and desktop (DevTools → Toggle device toolbar).
4. Bump `CACHE` in `sw.js` if you change static files.

---

## 🙏 Acknowledgements

- Color palette: [Material Theme Builder](https://m3.material.io/theme-builder)
- Icons: custom inline SVGs (inspired by Material Symbols)
- The entire app runs client-side — data never leaves the browser.
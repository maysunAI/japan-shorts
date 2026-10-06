# Japan Shorts — learn Japanese from real short videos (static site)

Live site: https://shorts.maysuns.uk/ (English: /en/ · 日本語: /ja/ · 中文: /zh/)

A small static website for Japanese listening practice: real video on the left, synchronized
Japanese text with kana readings and a translation on the right, plus grammar points and
vocabulary for each video. UI and subtitles in Chinese, English and Japanese.

## What is in this repo
- `index.html`, `videos.html`, `method.html`, `sources.html`, `video-*.html` — the pages
- `assets/` — transcripts, translations (`*_i18n.js`), `i18n.js` (language switching), thumbnails
- `sitemap.xml`, `robots.txt`

No build step, no backend, no dependencies. Open `index.html` in a browser, or serve the folder
with any static server (`python -m http.server`).

## What is NOT in this repo (honest notes)
- **The videos (about 780 MB).** They come from Wikimedia Commons under CC licenses; see
  `sources.html` for each source and license. To get the video pages working, put the files in
  a `media/` folder (names are referenced in the `video-*.html` files).
- **Language prefixes** (`/en/`, `/ja/`, `/zh/`) are done by a server rewrite on the live site
  (nginx maps `/en/xxx` to `/xxx`; `assets/i18n.js` reads the prefix). With a plain static
  server, use the language switcher at the top of each page instead.
- The visit-counter script of the live site was removed from this copy.

## Translation quality
Chinese subtitles come from speech recognition + machine translation, and the English/Japanese
subtitles were translated from those Chinese lines. They have not been proofread by native
speakers and may contain mistakes.

## License
Code and original text: MIT (see `LICENSE`). Videos: their own licenses (see `sources.html`).

# Plaza Café — Digital Menu

A static, single-page digital menu for Plaza Café (Bar Pasticceria Rosticceria,
Piazza Matteotti 6 — Capo D'Orlando, ME).

The page greets the visitor with a short logo animation, then shows the full
menu as collapsible categories, sorted by the current time of day so the most
relevant section comes first.

## Features

- Collapsible menu sections with an animated accordion
- Sections ordered automatically by time of day (morning, lunch, afternoon, aperitivo, evening)
- Live search across product names and categories
- Five languages: Italian, English, French, Spanish, German
- Allergen information in a modal dialog
- Opening hours, address (Google Maps link) and phone number in the footer

## Project structure

| File | Purpose |
| --- | --- |
| [plaza-cafe.html](plaza-cafe.html) | Page markup |
| [styles.css](styles.css) | All styling (plain CSS, no framework) |
| [index.js](index.js) | Menu data, translations and page behaviour (vanilla JS) |
| `assets/` | Logo and background image |

## Running it

There is no build step and no dependencies — just open [plaza-cafe.html](plaza-cafe.html)
in a browser. To serve it locally instead:

```sh
python -m http.server 8000
```

Then visit <http://localhost:8000/plaza-cafe.html>.

## Editing the menu

Menu entries and their translations live in the `allCategories` object in
[index.js](index.js). Each item has a `name` (per language) and a `price`:

```js
{ name: { it: 'Cannolo Ricotta', en: 'Ricotta Cannolo' }, price: 2.5 }
```

Flag images are loaded from `flagcdn.com`, so the language switcher needs an
internet connection.

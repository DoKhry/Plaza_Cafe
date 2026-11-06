# Plaza Café — Digital Menu

A static, single-page digital menu for Plaza Café (Bar Pasticceria Rosticceria,
Piazza Matteotti 6 — Capo D'Orlando, ME).

The page greets the visitor with a short logo animation, then shows the full
menu as collapsible categories, initially closed and ordered using the visitor's
local time when the menu is rendered.

## Features

- Collapsible menu sections with an animated accordion
- Sections ordered by the visitor's local hour: 06:00–10:59, 11:00–13:59,
  14:00–17:59, 18:00–21:59, and 22:00–05:59
- Live search across Italian and selected-language product names and selected-language
  category names; matching sections open automatically
- Five language options: Italian, English, French, Spanish, German. Category names
  and selected interface text are translated; product names fall back to Italian
  when a translation is missing. The footer and allergen dialog remain in Italian.
- Allergen information in a modal dialog
- Opening hours, address (Google Maps link) and phone number in the footer

## Project structure

| File                     | Purpose                                                 |
| ------------------------ | ------------------------------------------------------- |
| [index.html](index.html) | Page markup                                             |
| [styles.css](styles.css) | All styling (plain CSS, no framework)                   |
| [index.js](index.js)     | Menu data, translations and page behaviour (vanilla JS) |
| `assets/`                | Logo and background image                               |
| [CNAME](CNAME)           | Custom domain declaration (`plaza-cafe.it`)             |

## Running it

There is no build step or package installation — just open [index.html](index.html)
in a browser. To serve it locally instead, run this command from the project
directory with Python 3 installed:

```sh
python -m http.server 8000
```

Then visit <http://localhost:8000/>.

## Editing the menu

Menu entries and their translations live in the `allCategories` object in
[index.js](index.js). Each category has an `id`, a `category` object containing
translated category names, and an `items` array. Each item has a `name` object
(Italian plus optional translations) and a numeric `price` in euros:

```js
{ name: { it: 'Cannolo Ricotta', en: 'Ricotta Cannolo' }, price: 2.5 }
```

Interface translations are defined separately in `uiTranslations` in `index.js`.
The footer and allergen dialog text are defined in [index.html](index.html).

Flag images are loaded from `flagcdn.com` and need an internet connection to
display. Language switching and the menu work without those images; opening the
Google Maps link requires internet access.

# Hide Zendesk Spell Check Badge

A Tampermonkey userscript that hides the WProofreader spell/grammar check badge (dot) in the Zendesk ticket composer.

## What is the dot?

Zendesk uses [WProofreader](https://webspellchecker.com/) by WebSpellChecker for [spelling and grammar checking](https://support.zendesk.com/hc/en-us/articles/10236506512538-Checking-spelling-and-grammar-in-ticket-conversations) in the ticket composer. It adds a small dot (badge) to the composer UI. This script hides it.

If you already use another tool, like [Harper](https://writewithharper.com), you probably don't need WProofreader! 😁

## Requirements

- [Tampermonkey](https://www.tampermonkey.net/) browser extension
- Access to a Zendesk Agent Workspace instance

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) extension for your browser.
2. Click [`hide-zendesk-spell-check-badge.user.js`](https://raw.githubusercontent.com/bryanvillarin/hide-zendesk-spell-check-badge/main/hide-zendesk-spell-check-badge.user.js).
3. Reload your Zendesk tab — the badge should be gone.

## How it works

WProofreader's own stylesheet applies `display: block !important` to the `.wsc-badge` element, which wins over simple CSS overrides. This script uses a repeated class selector (`div.wsc-badge.wsc-badge.wsc-badge`) to achieve higher [CSS specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) and hide the badge with `display: none !important`.

## Contributing

Found a bug? Have an idea?

- Open an issue on GitHub
- Reach out: [bryanvillarin.link/contact](https://bryanvillarin.link/contact/)

## License

MIT License — see the script header for details.

---

* **Bryan Villarin**  
* [bryanvillarin.link](https://bryanvillarin.link) · [allnarfedup.blog](https://allnarfedup.blog)
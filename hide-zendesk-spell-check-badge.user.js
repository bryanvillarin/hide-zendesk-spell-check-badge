// ==UserScript==
// @name         Hide Zendesk Spell Check Badge
// @namespace    https://github.com/bryanvillarin/hide-zendesk-spell-check-badge
// @version      1.1
// @description  Hides the WProofreader spell/grammar check dot in the Zendesk ticket composer
// @author       Bryan Villarin
// @homepage     https://bryanvillarin.link
// @supportURL   https://bryanvillarin.link/contact/
// @license      MIT
// @match        https://*.zendesk.com/*
// @updateURL     https://raw.githubusercontent.com/bryanvillarin/hide-zendesk-spell-check-badge/main/hide-zendesk-spell-check-badge.user.js
// @downloadURL   https://raw.githubusercontent.com/bryanvillarin/hide-zendesk-spell-check-badge/main/hide-zendesk-spell-check-badge.user.js
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`
        div.wsc-badge.wsc-badge.wsc-badge {
            display: none !important;
        }
    `);
})();
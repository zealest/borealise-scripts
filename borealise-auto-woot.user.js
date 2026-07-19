// ==UserScript==
// @name         Borealise Auto Woot
// @namespace    https://borealise.com/
// @version      1.0
// @description  Auto woot
// @author       pianoroll
// @match        https://app.borealise.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log("[AutoWoot] launched.");

    function autoWoot() {

        const woot = document.querySelector(".stage-voting__btn--woot");

        if (!woot) return;

        if (!woot.classList.contains("stage-voting__btn--active")) {
            console.log("[AutoWoot] Woot !");
            woot.click();
        }
    }

    setInterval(autoWoot, 1000);

})();

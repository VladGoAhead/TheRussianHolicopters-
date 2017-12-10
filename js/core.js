'use strict'

var HELICOPTER = {
    /*
        Removes or adds hidden class to element.
    */
    TogleShowElement: function (id) {
        var elem = document.getElementById(id);

        if (elem.classList.contains("hidden")) {
            elem.classList.remove("hidden");
        }
        else {
            elem.classList.add("hidden");
        }
    }
}

window.onload = function () {
    var buttonsForHiddenElmements = [];
    buttonsForHiddenElmements.push({ element: document.getElementById("search-button"), fieldClass: "menu-search-field" });
    buttonsForHiddenElmements.push({ element: document.getElementById("menu-button"), fieldClass: "menu-nav-list" });

    buttonsForHiddenElmements.forEach(function (item, index, array) {
        item.element.onclick = function () { HELICOPTER.TogleShowElement(item.fieldClass) };
    });
}
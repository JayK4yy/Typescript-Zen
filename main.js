"use strict";
var head = document.getElementsByTagName('head')[0];
var styleLink = document.getElementsByTagName('link')[0];
var header = document.getElementsByTagName('header')[0];
// dynamicznie podłączony domyślny styl CSS
styleLink.href = "styl1.css";
// zmiana stylu
var changeStyle = function () {
    var oldStyleLink = document.getElementsByTagName('link')[0];
    var newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    if (oldStyleLink.href.indexOf("styl1") !== -1 || oldStyleLink.href == "") {
        newLink.href = "styl2.css";
    }
    else {
        newLink.href = "styl1.css";
    }
    console.log(newLink.href);
    head.replaceChild(newLink, oldStyleLink);
    console.log("style change!");
};
// dynamicznie dodany przycisk zmiany stylu
var changeStyleLink = document.createElement('a');
changeStyleLink.innerText = 'Change Style';
changeStyleLink.onclick = changeStyle; // wywołanie funkcji do zmiany stylu
header.appendChild(changeStyleLink);
//# sourceMappingURL=main.js.map
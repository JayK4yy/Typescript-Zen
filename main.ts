

const head: HTMLHeadElement = document.getElementsByTagName('head')[0] as HTMLHeadElement;
const styleLink: HTMLLinkElement = document.getElementsByTagName('link')[0] as HTMLLinkElement;
const header: HTMLBaseElement = document.getElementsByTagName('header')[0] as HTMLBaseElement;

// dynamicznie podłączony domyślny styl CSS
styleLink.href = "styl1.css";

// zmiana stylu
const changeStyle = () => {
    const oldStyleLink: HTMLLinkElement = document.getElementsByTagName('link')[0] as HTMLLinkElement;
    let newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    if (oldStyleLink.href.indexOf("styl1") !== -1 || oldStyleLink.href == "") {
        newLink.href = "styl2.css";
    } else {
        newLink.href = "styl1.css";
    }
    console.log(newLink.href);
    head.replaceChild(newLink, oldStyleLink);
    console.log("style change!");
}

// dynamicznie dodany przycisk zmiany stylu
const changeStyleLink = document.createElement('a');
changeStyleLink.innerText = 'Change Style';
changeStyleLink.onclick = changeStyle;  // wywołanie funkcji do zmiany stylu
header.appendChild(changeStyleLink);


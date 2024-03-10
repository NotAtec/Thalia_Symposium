/***********************/
/* Constants & Globals */
/***********************/

const menuButton = document.getElementById("menu-icon");
var inMenu = true;

//  Detecting scroll different than the initial one.
const storeScroll = () => {
    let newScroll = window.scrollY;

    if(newScroll == 0)
      document.documentElement.dataset.scroll = "0";

    else
      document.documentElement.dataset.scroll = "1";

}

//  Setting the menu flags.
const buildMenu = () => {
    inMenu = !inMenu;

    //  The corresponding flag for when the user is using the menu.
    if(inMenu) {
        document.documentElement.dataset.menu = "in";
    }

    //  The corresponding flag for when the user is not using the menu.
    else {
        document.documentElement.dataset.menu = "out";
    }
}

//  Setts the correct page name inside the terminal.
const setTerminal = () => {
    let fileName = location.href.split("/").slice(-1);
    let setter = document.getElementById('page-name');

    setter.innerText = fileName;
} 

/****************************/
/* Listneres & Initializers */
/****************************/

//  Listeners.
document.addEventListener('scroll', storeScroll, { passive: true });
menuButton.addEventListener('click', buildMenu);

//  Initializers.
storeScroll();
buildMenu();
setTerminal();
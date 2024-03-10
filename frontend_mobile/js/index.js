/***********************/
/* Constants & Globals */
/***********************/

const menuButton = document.getElementById("menu-icon");
var inMenu = true;

//  Every time a new scroll is detected, it compared the previous
//  scroll position in order to determine if a change happened.
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

/****************************/
/* Listneres & Initializers */
/****************************/

//  Listeners.
document.addEventListener('scroll', storeScroll, { passive: true });
menuButton.addEventListener('click', buildMenu);

//  Initializers.
storeScroll();
buildMenu();

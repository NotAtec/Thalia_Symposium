//  wonderful globals aren't they hm?
var mobile_options_button = document.getElementById("top_side_bar");
var mobile_options_exit = document.getElementById("mobile_side_bar_exit");
var mobile_side_bar = document.getElementById("mobile_side_bar");
var mobile_opacity_curtain = document.getElementById("main_opacity_curtain");

var all_link = document.getElementById("all");
var speakers_link = document.getElementById("speakers");
var companies_link = document.getElementById("companies");

var banner = document.getElementById("course_banner");
var banner_img = document.getElementById("course_img_banner");
var grid = document.getElementById("course_grid");
var names = document.getElementsByClassName("course_name");
var info = document.getElementById("course_info");
var text = document.getElementById("course_text");

var main_home_button = document.getElementById("logo")
var mobile_home_button = document.getElementById("mobile_logo")

//  you could've got them by the class 'class' - whatevs, I'll fix it later.
var courses = [document.getElementById("course_1"), document.getElementById("course_2"), document.getElementById("course_3"), document.getElementById("course_4"), document.getElementById("course_5"), document.getElementById("course_6")];

//  oh the atrocities I am about to commit here are so new that they don't even
//  have a name at this point, God forgive me.
//
//  soooo, simply change the text here in order to make it update whenever a user
//  clicks a course.
const johan_text = 
    `This text is here just to show you how the fuckery is supposed to work. These are not quotes
     but backticks, because why the fuck not, right Javascript? Anyhow, simply replace the text here,
     with the actual description and you should have yourself a working little course view. I need a drink.`

const marije_text =
    `3 The LORD appeared to us in the past, saying: “I have loved you with an everlasting love; I have drawn you with unfailing kindness.
     4 I will build you up again, and you, Virgin Israel, will be rebuilt. Again you will take up your timbrels and go out to dance with the joyful.
     5 Again you will plant vineyards on the hills of Samaria; the farmers will plant them and enjoy their fruit.
     6 There will be a day when watchmen cry out on the hills of Ephraim, ‘Come, let us go up to Zion, to the LORD our God.’ ”`

const luca_text =
    ``

const nedap_text =
    ``

const formorrow_text =
    ``

const tba_text =
    ``

//  the source for the course cover image.
const johan_cover_dir = "resources/test_cover.jpg"
const marije_cover_dir = "resources/test_switch_cover.jpg"
const luca_cover_dir = "resources/test_cover.jpg"
const nedap_cover_dir = "resources/test_cover.jpg"
const formorrow_cover_dir = "resources/test_cover.jpg"
const tba_cover_dir = "resources/test_cover.jpg"


//  converts a course index to its associated display when clicked.
function index_to_tex(course_index) {
    switch(course_index) {
        case 1:
            return johan_text;

        case 2:
            return marije_text;

        case 3:
            return luca_text;

        case 4:
            return nedap_text;

        case 5:
            return formorrow_text;

        case 6:
            return tba_text
    }
}

//  converts a course index to its associated image cover when clcked.
function index_to_cover(course_index) {
    switch(course_index) {
        case 1:
            return johan_cover_dir;

        case 2:
            return marije_cover_dir;

        case 3:
            return luca_cover_dir;

        case 4:
            return nedap_cover_dir;

        case 5:
            return formorrow_cover_dir;

        case 6:
            return tba_cover_dir
    }
}

//  here comes the fun part!
courses.forEach(course => {
    course.onclick = function () { course_switch_handler(Number(course.id.slice(-1))) };
})


/*******************/
/* Switch Handlers */
/*******************/

function course_switch_handler(course_index) {
    grid.style.display = "none";
    banner.style.display = "block";
    info.style.display = "block";

    banner_img.src = index_to_cover(course_index);
    text.innerHTML = index_to_tex(course_index);
}

function home_switch_handler() {
    grid.style.display = "grid";
    banner.style.display = "none";
    info.style.display = "none";

    mobile_side_bar.style.left = "-100%";
    mobile_opacity_curtain.style.display = "none";
    document.body.style.overflow = "auto";
}

/*******************/
/* Mobile Handlers */
/*******************/

main_home_button.onclick = home_switch_handler;
mobile_home_button.onclick = home_switch_handler;

mobile_options_button.onclick = function() {
    mobile_side_bar.style.left = "0";
    mobile_opacity_curtain.style.display = "block";
    document.body.style.overflow = "hidden";
}

mobile_options_exit.onclick = function() {
    mobile_side_bar.style.left = "-100%";
    mobile_opacity_curtain.style.display = "none";
    document.body.style.overflow = "auto";
}

/************************/
/* Course Grid Handlers */
/************************/

all_link.onclick = function () {
    courses.forEach(course => {
        course.style.display = "";
    });
}

speakers_link.onclick = function () { 
    for (let i = 0; i < courses.length; i++) {
        var course = courses[i];
        if (i < 3) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    }
}

companies_link.onclick = function () {
    for (let i = 0; i < courses.length; i++) {
        var course = courses[i];
        if (i < 3 || i == 5) {
            course.style.display = "none";
        } else {
            course.style.display = "block";
        }
    }
}



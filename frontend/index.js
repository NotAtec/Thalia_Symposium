var mobile_options_button = document.getElementById("top_side_bar");
var mobile_options_exit = document.getElementById("mobile_side_bar_exit");
var mobile_side_bar = document.getElementById("mobile_side_bar");
var mobile_opacity_curtain = document.getElementById("main_opacity_curtain");
var all_link = document.getElementById("all");
var speakers_link = document.getElementById("speakers");
var companies_link = document.getElementById("companies");

var courses = [document.getElementById("course_1"), document.getElementById("course_2"), document.getElementById("course_3"), document.getElementById("course_4"), document.getElementById("course_5"), document.getElementById("course_6")];

mobile_options_button.onclick = function() {
    mobile_side_bar.style.left = "0";
    mobile_opacity_curtain.style.display = "block";
    document.body.style.overflow = "hidden"
}

mobile_options_exit.onclick = function() {
    mobile_side_bar.style.left = "-100%";
    mobile_opacity_curtain.style.display = "none";
    document.body.style.overflow = "auto"
}

all_link.onclick = function () {
    courses.forEach(course => {
        course.style.display = "";
    });
}

speakers_link.onclick = function () { 
    for (let i = 0; i < courses.length; i++) {
        var course = courses[i];
        if (i < 3) {
            course.style.display = "";
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
            course.style.display = "";
        }
    }
}

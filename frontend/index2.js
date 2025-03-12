var courses_button = document.getElementById("courses_button");
var beer_button = document.getElementById("beer_button");
var notification_button = document.getElementById("notification_button");
var settings_button = document.getElementById("settings_button");
var portofolio_button = document.getElementById("protofolio_button");
var help_button = document.getElementById("help_button");
// var mobile_settings_button = document.getElementById("mobile_settings_button");
// var mobile_portofolio_button = document.getElementById("mobile_portofolio_button");
// var mobile_help_button = document.getElementById("mobile_help_button");
var profile = document.getElementById("profile");

profile.onclick = function() { easter_egg_display("resources/easter_egg_1.jpg"); }
beer_button.onclick = function() {easter_egg_display("resources/easter_egg_2.jpg"); }
courses_button.onclick = function() { easter_egg_display("resources/easter_egg_3.jpeg"); }
notification_button.onclick = function() { easter_egg_display("resources/easter_egg_4.png"); }
settings_button.onclick = function() { easter_egg_display("resources/easter_egg_5.png"); }
portofolio_button.onclick = function() { easter_egg_display("resources/easter_egg_6.png");}
help_button.onclick = function() { easter_egg_display("resources/easter_egg_7.png");}
// mobile_settings_button.onclick = function() { easter_egg_display("resources/easter_egg_5.png"); }
// mobile_portofolio_button.onclick = function() { easter_egg_display("resources/easter_egg_6.png");}
// mobile_help_button.onclick = function() { easter_egg_display("resources/easter_egg_7.png");}

var easter_egg_opacity_curtain = document.getElementById("easter_egg_opacity_curtain");
var easter_egg = document.getElementById("easter_egg_curtain");
var easter_egg_img = document.getElementById("easter_egg_img");

function easter_egg_display(easter_egg_source) {
  easter_egg_img.src = easter_egg_source;

  easter_egg_opacity_curtain.style.display = "block";
  easter_egg.style.display = "block";
  document.body.style.overflow = "hidden";
}

easter_egg_img.onclick = function() {
  easter_egg_opacity_curtain.style.display = "none";
  easter_egg.style.display = "none";
  document.body.style.overflowY  = "scroll";
  document.body.style.overflowX = "hidden";
}

easter_egg_opacity_curtain.onclick = function() {
  easter_egg_opacity_curtain.style.display = "none";
  easter_egg.style.display = "none";
  document.body.style.overflowY  = "scroll";
  document.body.style.overflowX = "hidden";
}
//  variable for determining whether to hide or display the current schedule.
var display_schedule = true;

// event relevant elements
var event_list = document.getElementById("event_list");
var event_list_button = document.getElementById("upcomming_button")
var event_container = document.getElementById("upcomming");

//  assigning a handler for the event list view.
event_list_button.onclick = function() {
  if(display_schedule) {
      event_list.style.display = "none"
      event_list_button.style.rotate = "0deg";
  } else {
      event_list.style.display = "grid"
      event_list_button.style.rotate = "90deg";
  }

  display_schedule = !display_schedule;
}

//  course grid elemnts for better displays.
var all_link = document.getElementById("all");
var speakers_link = document.getElementById("speakers");
var companies_link = document.getElementById("companies");
var courses = [document.getElementById("course_1"), document.getElementById("course_2"), document.getElementById("course_3"), document.getElementById("course_4"), document.getElementById("course_5"), document.getElementById("course_6")];

//  all course selector handler; simply display all the courses in the
//  course grid.
all_link.onclick = function () {
  courses.forEach(course => {
      course.style.display = "";
  });
}

//  speaker course selector handler; showing only the first three courses
//  that correspond to their assigned speakers.
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


//  companies course selector handler; showing only the last three courses
//  that correspond to their assigned companies.
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



var mobile_options_button = document.getElementById("top_side_bar");
var mobile_options_exit = document.getElementById("mobile_side_bar_exit");
var mobile_side_bar = document.getElementById("mobile_side_bar");
var mobile_opacity_curtain = document.getElementById("main_opacity_curtain");

mobile_options_button.onclick = function() {
    mobile_side_bar.style.left = "0";
    mobile_opacity_curtain.style.display = "block";
}

mobile_options_exit.onclick = function() {
    mobile_side_bar.style.left = "-100%";
    mobile_opacity_curtain.style.display = "none";
}
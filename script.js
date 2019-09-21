//      ...Globle Values...
window.addEventListener("resize", function() {
  "use strict";
  window.location.reload();
});
var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
// console.log("innerWidth: " + innerWidth + " innerHeight: " + innerHeight);
document.body.style.width = innerWidth + "px";
document.body.style.height = innerHeight + "px";
//      ...Main Function...
function place_XY(object_id) {
  // console.log(".................................................");
  var rectOffset = document.getElementById(object_id);
  var rect = document.getElementById(object_id).getBoundingClientRect();
  // var element = document.getElementById(to_id).style;
  var clipX = rect.x + rectOffset.offsetWidth / 2;
  var clipY = rect.y + rectOffset.offsetHeight / 2;
  var fullName = "--clip-" + object_id.replace("btn", "div") + "-XY";
  document.documentElement.style.setProperty(
    fullName,
    clipX + "px " + clipY + "px"
  );
  // console.log(rect);
  // console.log(fullName);
  // console.log(rectOffset.offsetHeight);
  // console.log(
  //   "[" + object_id + "] " + "--clip-" + object_id + "-XY",
  //   clipX + "px " + clipY + "px"
  // );
}
//      ...Main Function...
function clip_Open(button_id) {
  var button = document.getElementById(button_id);
  // var element = document.getElementById(element_id);

  button.addEventListener("click", () => {
    // console.log(button_id + " Working");
    // element.classList.toggle("open");
    switch (button_id) {
      case "portfolio-btn":
        // document.getElementById("portfolio-div").style.zIndex = 2;
        document.getElementById("portfolio-div").classList.add("open");
        // document.getElementById("about-div").style.zIndex = 3;
        document.getElementById("about-div").classList.remove("open");
        // document.getElementById("services-div").style.zIndex = 3;
        document.getElementById("services-div").classList.remove("open");
        // document.getElementById("home-div").style.zIndex = 2;
        // document.getElementById("home-div").classList.remove("open");
        // document.getElementById("contact-div").style.zIndex = 2;
        document.getElementById("contact-div").classList.remove("open");
        break;
      case "about-btn":
        // document.getElementById("portfolio-div").style.zIndex = 3;
        document.getElementById("portfolio-div").classList.remove("open");
        // document.getElementById("about-div").style.zIndex = 2;
        document.getElementById("about-div").classList.add("open");
        // document.getElementById("services-div").style.zIndex = 3;
        document.getElementById("services-div").classList.remove("open");
        // document.getElementById("home-div").style.zIndex = 2;
        // document.getElementById("home-div").classList.remove("open");
        // document.getElementById("contact-div").style.zIndex = 2;
        document.getElementById("contact-div").classList.remove("open");
        break;
      case "services-btn":
        // document.getElementById("portfolio-div").style.zIndex = 3;
        document.getElementById("portfolio-div").classList.remove("open");
        // document.getElementById("about-div").style.zIndex = 3;
        document.getElementById("about-div").classList.remove("open");
        // document.getElementById("services-div").style.zIndex = 2;
        document.getElementById("services-div").classList.add("open");
        // document.getElementById("home-div").style.zIndex = 2;
        // document.getElementById("home-div").classList.remove("open");
        // document.getElementById("contact-div").style.zIndex = 2;
        document.getElementById("contact-div").classList.remove("open");
        break;
      case "home-btn":
        // document.getElementById("portfolio-div").style.zIndex = 2;
        document.getElementById("portfolio-div").classList.remove("open");
        // document.getElementById("about-div").style.zIndex = 2;
        document.getElementById("about-div").classList.remove("open");
        // document.getElementById("services-div").style.zIndex = 2;
        document.getElementById("services-div").classList.remove("open");
        // document.getElementById("home-div").style.zIndex = 1;
        // document.getElementById("home-div").classList.add("open");
        // document.getElementById("contact-div").style.zIndex = 2;
        document.getElementById("contact-div").classList.remove("open");
        break;
      case "contact-btn":
        // document.getElementById("portfolio-div").style.zIndex = 2;
        document.getElementById("portfolio-div").classList.remove("open");
        // document.getElementById("about-div").style.zIndex = 2;
        document.getElementById("about-div").classList.remove("open");
        // document.getElementById("services-div").style.zIndex = 2;
        document.getElementById("services-div").classList.remove("open");
        // document.getElementById("home-div").style.zIndex = 2;
        // document.getElementById("home-div").classList.remove("open");
        // document.getElementById("contact-div").style.zIndex = 1;
        document.getElementById("contact-div").classList.add("open");
        break;
    }
  });
}
place_XY("portfolio-btn");
clip_Open("portfolio-btn");
place_XY("about-btn");
clip_Open("about-btn");
place_XY("services-btn");
clip_Open("services-btn");
place_XY("contact-btn");
clip_Open("contact-btn");
// place_XY("home-btn");
clip_Open("home-btn");

const logo = document.querySelectorAll("#logo-rect rect");
for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

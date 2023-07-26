import { getCookie, setCookie } from "./cookiesMethods.js";

var numberOfVisits = getCookie("counter");
var body = document.body;
var userName = getCookie("userName");
var userGender = getCookie("userGender");
var userColor = getCookie("userColor");

if (
  userName == "not found" &&
  userGender == "not found" &&
  userColor == "not found"
) {
  body.innerHTML +=
    "<h1> Didn't find any data about you , please register</h1>";
  body.innerHTML +=
    "<a href='http://127.0.0.1:5500/cookiesIndex.html'>Register</a>";
} else {
  if (userGender === "male") {
    body.innerHTML += "<img src='./male.png' >";
  } else {
    body.innerHTML += "<img src='./female.png' >";
  }
  body.innerHTML +=
    "<h2> welcome <span style='color:" +
    userColor +
    "';>" +
    userName +
    "</span> you have visited this site <span style='color:" +
    userColor +
    "';>" +
    numberOfVisits +
    "</span>" +
    " times</h2>";
  window.addEventListener("load", function () {
    numberOfVisits++;
    setCookie("counter", numberOfVisits);
  });
}

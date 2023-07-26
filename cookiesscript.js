import { getCookie, setCookie, deleteAllCookieList } from "./cookiesMethods.js";
var userName = document.getElementById("username");
var genderMale = document.getElementsByClassName("genderType")[0];
var userColor = document.getElementById("colors");
var SubmitBtn = document.getElementsByClassName("sbtBtn")[0];
window.onload = deleteAllCookieList();
SubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  location.replace("page2.html");
  if (getCookie("userName=" + userName.value) == "not found") {
    setCookie("userName", userName.value);
    setCookie("counter", 1);
    setCookie("userColor", userColor.value);

    if (genderMale.checked == true) {
      setCookie("userGender", "male");
    } else {
      setCookie("userGender", "female");
    }
  }
});

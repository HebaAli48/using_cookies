export function getCookie(cookieName) {
  if (!cookieName) {
    throw "u must enter a parameter";
  }
  var res = "not found";
  var arr = document.cookie.split(";");
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i].split("=")[0];
    // console.log(key);
    if (key.trim() === cookieName) {
      res = arr[i].split("=")[1];
    }
  }
  return res;
}

export function setCookie(cookieName, cookieValue, expiryDate) {
  if (!cookieName || !cookieValue) {
    throw "u must enter at least the first two parameters";
  }
  var expireDate = new Date(expiryDate);
  document.cookie = cookieName + "=" + cookieValue + ";expires=" + expireDate;
}

function deleteCookie(cookieName) {
  if (!cookieName) {
    throw "u must enter a parameter";
  }
  var dateExp = new Date("4/10/2010");
  document.cookie = cookieName + "=;expires=" + dateExp;
}
export function deleteAllCookieList() {
  let newArr = [];
  var arr = document.cookie.split(";");
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split("=")[0]);
  }
  let dateExp = new Date("4/10/2010");
  for (let i = 0; i < newArr.length; i++) {
    document.cookie = newArr[i] + "=;expires=" + dateExp;
  }
}
function allCookieList() {
  var arr = document.cookie.split(";");
  return arr;
}
function hasCookie(cookieName) {
  var arr = document.cookie.split(";");
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i].split("=")[0];
    // console.log(key);
    if (key.trim() === cookieName) {
      return true;
    } else return false;
  }
}

// setCookie("userName","heba","4/18/2023");
// setCookie("age","6","4/20/2023");
// setCookie("email","heba@yyy.com");
// // setCookie("phone")
// console.log(getCookie("userName"));
// console.log(getCookie("age"));
// console.log(getCookie("gender"));
// // console.log(getCookie());
// deleteCookie("userName")
// deleteCookie("phone");
// deleteCookie("email")
// deleteCookie("age")
// // deleteCookie()
// console.log(deleteAllCookieList());
// console.log(allCookieList());
// console.log(hasCookie("age"));
// console.log(hasCookie("gender"));

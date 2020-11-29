var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkValid();
});

function checkValid() {
  var userMsg = document.getElementById("user-msg");
  var nameFails = document.getElementById("name-fails");
  var nameCheck = document.getElementById("name-check");
  var emailError = document.getElementById("email-error");
  var passwordError = document.getElementById("pass-error");
  var emailFails = document.getElementById("email-fails");
  var emailcheck = document.getElementById("email-check");
  var passwordFails = document.getElementById("password-fails");
  var passwordCheck = document.getElementById("password-check");
  var confirm = document.getElementById("confirm-password");
  var confirmError = document.getElementById("confirm-error");
  var confirmFails = document.getElementById("confirm-fails");
  var confirmCheck = document.getElementById("confirm-check");
  if (username.value.trim() === "") {
    username.style.borderBottom = "1px red solid";
    userMsg.innerHTML = "* User Name cannot be Empty";
    userMsg.style.visibility = "visible";
    nameFails.style.visibility = "visible";
  } else {
    if (username.value.trim().match(/^[a-z0-9]+$/g)) {
      userMsg.style.visibility = "hidden";
      nameFails.style.visibility = "hidden";
      nameCheck.style.visibility = "visible";
      username.style.borderBottom = "1px green solid";
    } else {
      username.style.borderBottom = "1px red solid";
      userMsg.innerHTML = "* User Name should only contain lower case with no special symbols";
      userMsg.style.visibility = "visible";
      nameFails.style.visibility = "visible";
      nameCheck.style.visibility = "hidden";
    }
  }
  if (email.value.trim() === "") {
    email.style.borderBottom = "1px red solid";
    emailError.innerHTML = "* Email cannot be Empty";
    emailError.style.visibility = "visible";
    emailFails.style.visibility = "visible";
  } else {
    if (email.value.trim().match(/^[\w-\.]+@([\w-]+\.)+com$/g)) {
      emailError.style.visibility = "hidden";
      emailFails.style.visibility = "hidden";
      emailcheck.style.visibility = "visible";
      email.style.borderBottom = "1px green solid";
    } else {
      email.style.borderBottom = "1px red solid";
      emailError.innerHTML = "* Enter a valid email";
      emailError.style.visibility = "visible";
      emailFails.style.visibility = "visible";
      emailcheck.style.visibility = "hidden";
    }
  }
  if (password.value.trim() === "") {
    password.style.borderBottom = "1px red solid";
    passwordError.innerHTML = "* Password cannot be Empty";
    passwordError.style.visibility = "visible";
    passwordFails.style.visibility = "visible";
  } else {
    passwordError.style.visibility = "hidden";
    passwordFails.style.visibility = "hidden";
    passwordCheck.style.visibility = "visible";
    password.style.borderBottom = "1px green solid";
  }
  if (confirm.value.trim() === "") {
    confirm.style.borderBottom = "1px red solid";
    confirmError.innerHTML = "* Password cannot be Empty";
    confirmError.style.visibility = "visible";
    confirmFails.style.visibility = "visible";
  } else {
    if (confirm.value === password.value) {
      confirmError.style.visibility = "hidden";
      confirmFails.style.visibility = "hidden";
      confirmCheck.style.visibility = "visible";
      confirm.style.borderBottom = "1px green solid";
    } else {
      confirm.style.borderBottom = "1px red solid";
      confirmError.innerHTML = "* Password Should be same as above";
      confirmError.style.visibility = "visible";
      confirmFails.style.visibility = "visible";
      confirmCheck.style.visibility = "hidden";
    }
  }
}
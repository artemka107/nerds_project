var btn = document.querySelector(".feedback-btn");
var feedback = document.querySelector(".feedback-form");
var close = document.querySelector(".close-form");
var login = feedback.querySelector("[name=name]");
var password = feedback.querySelector("[name=password]");
var submit = feedback.querySelector("[type=submit]")
var storage = localStorage.getItem("login");

btn.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.add("feedback-form-show");
  if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.remove("feedback-form-show");
  feedback.classList.remove("feedback-submit-error");
});

feedback.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      feedback.classList.remove("modal-error");
      feedback.offsetWidth = feedback.offsetWidth;
      feedback.classList.add("feedback-submit-error");
    } else {
      localStorage.setItem("login", login.value);
    }
});

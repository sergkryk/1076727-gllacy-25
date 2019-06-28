var link = document.querySelector(".basic-btn");
var popup = document.querySelector(".feedback-popup");
var close = popup.querySelector(".close-button");
var login = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var form = popup.querySelector(".feedback-form");

var toggle = document.querySelectorAll(".slide-toggle");
var slide = document.querySelectorAll(".slide");

var background = document.querySelector(".site-content");
var green = document.querySelector(".slide-one");
var blue = document.querySelector(".slide-two");
var red = document.querySelector(".slide-three");

try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });


  toggle.forEach(function (el, index) {
    el.addEventListener("click", function () {
      slide.forEach(function (el, index) {
        if (slide[index].classList.contains("slide-current")) {
          slide[index].classList.remove("slide-current");
          toggle[index].classList.remove("toggle-active");
        }
      })
  
      slide[index].classList.add("slide-current");
      toggle[index].classList.add("toggle-active");
    })
});

toggle.forEach(function (el, index) {
    el.addEventListener("click", function () {
        if (toggle[0].classList.contains("toggle-active")) {
            background.className="site-content, background-one";
        }

        if (toggle[1].classList.contains("toggle-active")) {
            background.className="site-content, background-two";
        }

        if (toggle[2].classList.contains("toggle-active")) {
            background.className="site-content, background-three";
        }
    })
});


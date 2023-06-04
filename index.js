var buttons = document.querySelectorAll(".drum");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    var buttonStyle = this.innerHTML;
    sound(buttonStyle);
    animation(buttonStyle);
  });
});

document.addEventListener("keypress", function (event) {
  var key = event.key.toLowerCase();
  sound(key);
  animation(key);
});

function sound(key) {
  var audio;

  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "j":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "k":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "l":
      audio = new Audio("sounds/crash.mp3");
      break;
    default:
      console.log(key);
      return;
  }

  audio.play();
}

function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("drumAnimation");

  setTimeout(function () {
    activeButton.classList.remove("drumAnimation");
  }, 300);
}

var buttons = document.querySelectorAll(".drum");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.add("active");
    setTimeout(function () {
      button.classList.remove("active");
    }, 300);
  });
});

var randomNumGen1 = Math.random();
var randomNumber1 = Math.floor(6 * randomNumGen1) + 1;

var randomNumGen2 = Math.random();
var randomNumber2 = Math.floor(6 * randomNumGen2) + 1;

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
img2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}

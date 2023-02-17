/*
Notes:
-------------------
Components:
- spinning mandala (first put img, then draw it myself)
✅ input field expands with writing
- sentiment analyses changes mandala to red
- cleanse button
  ✅ style button
  - delete text
  - gong sound when pressed
  - starts setting the colour back to max green over the course of an hour
  - small message/quote about cleansing picks one from a bunch of them
- randomize starting messages
- text flies

- speech to text

Bonus:
** small floating question mark around mandala in a bubble that will expand to
show reasoning behind project. Small animation.
  - if click anywhere, closes
  - if inactive for 2 mins it closes
*/

// list of placeholder text
const placeHolders = [
  "I worry...",
  "I worry that...",
  "I'm worried about...",
  "I'm worried that...",

  "I fear...",
  "I fear that...",
  "I have fear that...",
  "I'm fearful of...",
  "I'm fearful that...",

  "I resent...",
  "I resent that...",
  "I'm resentful of...",
  "I'm resentful that...",
  "I'm resentful about..."
];

// pick a text at random
var placeHolder = "";

function pickPlaceHolder() {
  placeHolder = placeHolders[Math.floor(Math.random()*placeHolders.length)];
}

// setup page when it loads
start();

function start() {
  pickPlaceHolder();
  document.getElementById("worries").textContent = placeHolder;
}

// When cleanse button is pressed, clears text and resets placeholder text
const cleanseButton = document.querySelector(".cleanseButton");

cleanseButton.addEventListener("click", function (event) {
  cleanse();
});

function cleanse() {
    document.getElementById("worries").textContent = placeHolder;
}

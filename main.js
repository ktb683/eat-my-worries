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
- text flies away

Bonus:
** small floating question mark around mandala in a bubble that will expand to
show reasoning behind project. Small animation.
  - if click anywhere, closes
  - if inactive for 2 mins it closes
*/
const cleanse = document.querySelector("#cleanseButton");
guessButton.addEventListener("click", function (event) {
  guessNumber();
});

function cleanse() {
    document.getElementById("worries").value = "";
}

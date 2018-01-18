//Color.js
var responses = new Object(),
  numbers = [86, 12, 1, 11, 1, 0, 1234567, 42],
  letters = ["z", "a", "b", "c", "p"],
  colors = ["red", "yellow", "purple", "green", "yellow", "yellow", "blurple", "blue", "green", "purple"],
  other = ["burr", "7L", ": middle-finger-emoji :", "2b", "2b"];
  
h = "";

function replace(phtml)
{
  document.getElementById("display").innerHTML = phtml;
}

function buttons()
{
  h = "";
  add("<button onclick=\"num()\">Numbers</button>");
}

//Color.js
var responses = new Object(),
  numbers = [86, 12, 1, 11, 1, 0, 1234567, 42, 86, 8.4],
  letters = ["z", "a", "b", "c", "p"],
  colors = ["red", "yellow", "purple", "green", "yellow", "yellow", "blurple", "blue", "green", "purple"],
  other = ["burr", "7L", ": middle-finger-emoji :", "2b", "2b"];
  
h = "";

function replace(phtml)
{
  document.getElementById("display").innerHTML = phtml;
}

function all()
{
  replace("Numbers: " + numbers.length.toString() + "<br> Letters: " + letters.length.toString() + "<br> Colors: " + colors.length.toString() + "<br> Other: " + other.length.toString());
}

function numbers()
{
  replace(numbers);
}

function letters()
{
  replace(letters);
}

function colors()
{
  replace(colors);
}

function other()
{
  replace(other);
}

replace("Click a button above to get results.");

var input = document.getElementById("input");
var onClickFunctions;
function setPage(page) {
  document.getElementById("image").style.backgroundImage = "url(" + page.imageName + ")";
  document.getElementById("text").innerHTML = page.text
  document.getElementById('buttonBox').innerHTML = "";
  onClickFunctions = {};
  for (var i = 0; i < page.buttons.length; i++) {
    onClickFunctions[i] = page.buttons[i][1]
    document.getElementById('buttonBox').innerHTML += "<button onClick=onClickFunctions[" + i + "]()>" + page.buttons[i][0] + "</button>";
  }
  input.hidden = !page.showInput
}
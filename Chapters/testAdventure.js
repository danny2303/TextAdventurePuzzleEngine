///// Global Variables /////
var col = "none"
var num = "none"

////// Page Functions //////

function startTest() {
  setPage ({
    showInput: false,
    imageName: "Images/Test/08-03-23.png",
    text: "Colour: " + col + "\nNumber: " + num + "\nWhat would you like to do?",
    buttons: [
      ["Pick a colour.", pickCol],
      ["Pick a number", pickNum]
    ]
  })
}

function pickCol() {
  input.type = "color"
  setPage ({
    showInput: true,
    imageName: "Images/Test/09-03-23.png",
    text: "Pick a colour.",
    buttons: [
      ["Enter", function(){col=input.value; startTest()}]
    ]
  })
}

function pickNum() {
  input.type = "number"
  setPage ({
    showInput: true,
    imageName: "Images/Test/09-03-23.png",
    text: "Pick a number.",
    buttons: [
      ["Enter", function(){num=input.value; startTest()}]
    ]
  })
}
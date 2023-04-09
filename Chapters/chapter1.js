///// Global Variables /////
currentRoom = "hall"
hiddenItems = {kitchen:{}, hall:{}, lounge:{}, piano:{}, tv:{}}
hiddenItems.piano["in the piano"] = "teddy bear"
roomFunctions={}

////// Page Functions //////

function searchEnter() {
  found = hiddenItems[currentRoom][input.value]
  if (found==null) {
    setPage ({
      showInput: false,
      text: "You search " + input.value + ". You couldn't find anything. ):",
      buttons: [
        ["Okay", roomFunctions[currentRoom]]
      ]
    })
  } else {
    setPage ({
      showInput: false,
      text: "You search " + input.value + ". You find a " + found + "! (:",
      buttons: [
        ["Huzzah", roomFunctions[currentRoom]]
      ]
    })
  }
}

function search() {
  input.type = "search"
  input.value = ""
  setPage ({
    showInput: true,
    text: "Enter in the box below where you want to search:",
    buttons: [
      ["Enter", searchEnter]
    ]
  })
}



roomFunctions.hall = function() {
  currentRoom = "hall"
  setPage ({
    showInput: false,
    imageName: "Images/south_hallway.jpeg",
    text: "You are in a hallway.\nBehind you is the kitchen.\nIn front is a lounge / music room.\nTo your left are doors to a utility room and a bathroom.\nTo your right are doors to an office and a bedroom.",
    buttons: [
      ["Behind - enter kitchen", roomFunctions.hall],
      ["Left door #1 - enter utility", roomFunctions.hall],
      ["Left door #2 - enter bathroom", roomFunctions.hall],
      ["Right door #1 - enter office", roomFunctions.hall],
      ["Right door #2 - enter bedroom", roomFunctions.hall],
      ["Ahead - enter lounge", roomFunctions.lounge],
    ]
  })
}

roomFunctions.lounge = function () {
  currentRoom = "lounge"
  setPage ({
    showInput: false,
    imageName: "Images/lounge.png",
    text: "You are in a lounge with a piano to the right and a TV to the left. The hallway is behind you.",
    buttons: [
      ["Left - TV", roomFunctions.tv],
      ["Behind - enter hallway", roomFunctions.hall],
      ["Ahead - try door", roomFunctions.hall],
      ["Right - Piano", roomFunctions.piano],
    ]
  })
}

roomFunctions.piano = function() {
  currentRoom = "piano"
  setPage ({
    showInput: false,
    imageName: "Images/piano_room.png",
    text: "plink plonk",
    buttons: [
      ["Search", search],
      ["Behind - back to central lounge", roomFunctions.lounge]
    ]
  })
}

roomFunctions.tv = function() {
  currentRoom = "tv"
  setPage ({
    showInput: false,
    imageName: "Images/tv_room.png",
    text: "plink plonk",
    buttons: [
      ["Search", search],
      ["Behind - back to central lounge", roomFunctions.lounge]
    ]
  })
}


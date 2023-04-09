///// Global Variables /////
currentRoom = "hall"
hiddenItems = {kitchen:{}, hall:{}, lounge:{}, piano:{}, tv:{}}
hiddenItems.lounge["under the rug"] = "a note, saying 'In the kitchen, search: 'in the fridge'"
hiddenItems.kitchen["in the fridge"] = "a note, saying 'In the TV room, search: 'in the tv cabinet'"
hiddenItems.kitchen["in the fruit bowl"] = "a note, saying 'In the TV room, search: 'in the fireplace'"
hiddenItems.tv["under the armchair"] = "a note, saying 'In the piano room, search: 'in the piano'"
hiddenItems.piano["in the piano"] = "RIPPED"
roomFunctions={}

////// Page Functions //////

function searchEnter() {
  found = hiddenItems[currentRoom][input.value.toLowerCase()]
  if (found==null) {
    setPage ({
      showInput: false,
      text: "You search " + input.value + ". You couldn't find anything. ):",
      buttons: [
        ["Okay", roomFunctions[currentRoom]]
      ]
    })
  } else if (found=="RIPPED") {
      setPage ({
      showInput: false,
      imageName: "Images/ripped.png",
      text: "You search " + input.value + ". You find a strange ripped half of a note.",
      buttons: [
        ["Huzzah", roomFunctions[currentRoom]]
      ]
    })
  } else{
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

function start() {
  setPage ({
    showInput: false,
    imageName: "Images/lounge.png",
    text: "You have arrived in a strange haunted house.\nThe door locks behind you, and an ominous ticking sounds.\nYou need a 5-digit code to deactivate the bomb.",
    buttons: [
      ["Oh no!", exp]
    ]
  })
}

function exp() {
  setPage ({
    showInput: false,
    imageName: "Images/lounge.png",
    text: "You will need to collect 5 magical mattes to solve this mystery.\nEach room has a 'search' button.\nTo begin, 'search' in this room 'under the rug'.",
    buttons: [
      ["Okay then", roomFunctions.lounge]
    ]
  })
}



roomFunctions.hall = function() {
  currentRoom = "hall"
  setPage ({
    showInput: false,
    imageName: "Images/south_hallway.jpeg",
    text: "You are in a hallway.\nAhead of you is the kitchen.\nBehind is a lounge area.\nAll the side doors seem to be locked.",
    buttons: [
      ["Search", search],
      ["Ahead - enter kitchen", roomFunctions.kitchen],
      ["Behind - enter lounge", roomFunctions.lounge],
    ]
  })
}

roomFunctions.kitchen = function() {
  currentRoom = "kitchen"
  setPage ({
    showInput: false,
    imageName: "Images/kitchen.jpg",
    text: "You are in a kitchen. Behind you is the hallway.",
    buttons: [
      ["Search", search],
      ["Behind - enter hallway", roomFunctions.hall],
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
      ["Search", search],
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


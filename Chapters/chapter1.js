///// Global Variables /////


////// Page Functions //////

function page1() {
  setPage ({
    showInput: false,
    imageName: "Images/south_hallway.jpeg",
    text: "You are in a hallway.\nBehind you is the kitchen.\nIn front is a lounge / music room.\nTo your left are doors to a utility room and a bathroom.\nTo your right are doors to an office and a bedroom.",
    buttons: [
      ["Behind - enter kitchen", page1],
      ["Left door #1 - enter utility", page1],
      ["Left door #2 - enter bathroom", page1],
      ["Right door #1 - enter office", page1],
      ["Right door #2 - enter bedroom", page1],
      ["Ahead - enter lounge", lounge],
    ]
  })
}

function lounge() {
  setPage ({
    showInput: false,
    imageName: "Images/lounge.png",
    text: "You are in a lounge with a piano to the right and a TV to the left. The hallway is behind you.",
    buttons: [
      ["Left - TV", tv],
      ["Behind - enter hallway", page1],
      ["Ahead - try door", page1],
      ["Right - Piano", piano],
    ]
  })
}

function entered() {
  setPage ({
    showInput: false,
    imageName: "Images/piano_room.png",
    text: input.value,
    buttons: [
      ["Back", piano]
    ]
  })
}


function code() {
  input.type = "search"
  input.value = ""
  setPage ({
    showInput: true,
    imageName: "Images/piano_room.png",
    text: "Enter search term below:",
    buttons: [
      ["Enter", entered]
    ]
  })
}

function piano() {
  setPage ({
    showInput: false,
    imageName: "Images/piano_room.png",
    text: "plink plonk",
    buttons: [
      ["Enter code", code],
      ["Behind - back to central lounge", lounge]
    ]
  })
}

function tv() {
  setPage ({
    showInput: false,
    imageName: "Images/tv_room.png",
    text: "plink plonk",
    buttons: [
      ["Behind - back to central lounge", lounge]
    ]
  })
}

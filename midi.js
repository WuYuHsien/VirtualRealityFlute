let midi = null; // global MIDIAccess object
let noteStartTimes = {}; // Object to keep track of note start times

function onMIDISuccess(midiAccess) {
  console.log("MIDI ready!");
  midi = midiAccess;
  startLoggingMIDIInput(midiAccess);
}

function onMIDIFailure(msg) {
  console.error(`Failed to get MIDI access - ${msg}`);
}

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

function onMIDIMessage(event) {
  const data = event.data;
  const command = data[0];
  const note = data[1];
  const velocity = data[2];

  // Track note start times
  if (command === 144) {
    if (velocity > 0) { // Note ON
      noteStartTimes[note] = Date.now();
    } else { // Note OFF
      delete noteStartTimes[note];
    }
  }

  // Check if a note has been held for 2 seconds
  Object.keys(noteStartTimes).forEach(note => {
    if (Date.now() - noteStartTimes[note] >= 2000) {
      handleLongNote(parseInt(note));
      delete noteStartTimes[note]; // Remove note after handling
    }
  });
}

function startLoggingMIDIInput(midiAccess) {
  midiAccess.inputs.forEach((input) => {
    input.onmidimessage = onMIDIMessage;
  });
}

function handleLongNote(note) {
  switch(note) {
    case 72:
      playSoundAndChangeColors("#FFFF37", [], ['#E7']); // E7 to yellow
      break;
    case 74:
      playSoundAndChangeColors("#FFFF37", [], ['#E6']); // E6 to yellow
      break;
    case 76:
      playSoundAndChangeColors("#FF9224", ['#E5'], ['#E6']); // E5 to yellow, E6 to red
      break;
    case 77:
      playSoundAndChangeColors("#FFFF37", ['#E4', '#E6']); // E4 and E6 to yellow
      break;
    case 79:
      playSoundAndChangeColors("#FFFF37", ['#E3']); // E3 to yellow
      break;
    case 81:
      playSoundAndChangeColors("#FFFF37", ['#E2']); // E2 to yellow
      break;
    case 83:
      playSoundAndChangeColors("#FFFF37", ['#E1'], ['#E2']); // E1 to yellow, E2 to red
      break;
    case 84:
      playSoundAndChangeColors("#FFFF37", []); // Only play sound
      break;
  }
}

function playSoundAndChangeColors(color, yellowCircles = [], redCircles = []) {
  // Play the good.mp3 sound
  const audio = new Audio('good.mp3');
  audio.play();

  // Change colors
  changeCirclesColor(color, yellowCircles, redCircles);
}

function changeCirclesColor(color, yellowCircles = [], redCircles = []) {
  const allCircles = ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6', '#E7'];
  
  // Set all circles to the default color
  allCircles.forEach((circleId) => {
    const circle = document.querySelector(circleId);
    if (circle) {
      circle.setAttribute('color', "#FFFF37"); // Default to yellow
    }
  });

  // Apply specific colors
  yellowCircles.forEach((circleId) => {
    const circle = document.querySelector(circleId);
    if (circle) {
      circle.setAttribute('color', "#FFFF37"); // Set to yellow
    }
  });
  
  redCircles.forEach((circleId) => {
    const circle = document.querySelector(circleId);
    if (circle) {
      circle.setAttribute('color', "#FF0000"); // Set to red
    }
  });
}

// Function to stop MIDI
function stopMIDI() {
  if (midi) {
    midi.inputs.forEach(input => input.close());
    midi.outputs.forEach(output => output.close());
    console.log('MIDI access stopped.');
    midi = null;
  }
}

// Export stopMIDI function for use in HTML file
window.stopMIDI = stopMIDI;
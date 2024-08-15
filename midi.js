let midi = null; // global MIDIAccess object
let noteStartTimes = {}; // Object to keep track of note start times
let currentNoteIndex = 0; // Index to keep track of the current expected note
const noteSequence = [72, 74, 76, 77, 79, 81, 83, 84]; // Sequence of notes to be received
const musicSequence = [76, 74, 72, 74, 77, 76, 74, 72, 79, 77, 76, 74, 72, 74, 76, 72];
const endSequence = [1];

const sequenceSets = [ noteSequence, musicSequence, endSequence ];
let seqIndex = 0;
const timesList = [2, 1, 1];

window.addEventListener('load', function() {
  setTimeout(function() {
    let introAudio = document.querySelector('#intro');
    introAudio.play().catch(error => {
      console.error('Error playing intro audio:', error);
    });
  }, 5000); // 5 seconds

  setTimeout(function() {
    let prepAudio = document.querySelector('#prep');
    prepAudio.play().catch(error => {
      console.error('Error playing prep audio:', error);
    });
  }, 22000); // 22 seconds

  setTimeout(function() {
    let prepAudio = document.querySelector('#start');
    prepAudio.play().catch(error => {
      console.error('Error playing prep audio:', error);
    });
  }, 27000); // 27 seconds
});

let times = 0; // count times

function onMIDISuccess(midiAccess) {
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
  if (command === 144 && velocity > 0) {
    if (!noteStartTimes[note]) {
      noteStartTimes = {};
      noteStartTimes[note] = Date.now();
    }
  } else { // Note OFF
    delete noteStartTimes[note];
  }

  console.log("note: ", note, " start time: ", noteStartTimes[note]);
  // Check if the expected note has been held for 1 seconds
  const expectedNote = sequenceSets[seqIndex][currentNoteIndex];
  console.log("expected note: ", expectedNote, "curr note: ", note);
  if (noteStartTimes[expectedNote] && (Date.now() - noteStartTimes[expectedNote] >= 1000)) {
    noteStartTimes = {};  // Remove note after handling
    if(currentNoteIndex === sequenceSets[seqIndex].length - 1) {
      times += 1;
    }
    currentNoteIndex = (currentNoteIndex + 1) % sequenceSets[seqIndex].length; // Move to next note in the sequence
    console.log("next note:", sequenceSets[seqIndex][currentNoteIndex]);
    if(( times ) === timesList[seqIndex]) {
      seqIndex += 1;
      times = 0;
      currentNoteIndex = 0;
      if(seqIndex == 2) {
        scaleNote(null);
        return null;
      }
    }
    scaleNote(sequenceSets[seqIndex][currentNoteIndex]);
  }
}

function startLoggingMIDIInput(midiAccess) {
  midiAccess.inputs.forEach((input) => {
    input.onmidimessage = onMIDIMessage;
  });
}

let audioTimes = 0;
let endPoint = 0;
function scaleNote(note) {
  switch(note) {
    case 72:
      endPoint += 1;
      endAndChangeColors([], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6', '#E7']); // C
      break;
    case 74:
      justChangeColors(['#E7'], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6']); // D
      break;
    case 76:
      justChangeColors(['#E7', '#E6'], ['#E1', '#E2', '#E3', '#E4', '#E5']); // E
      break;
    case 77:
      justChangeColors(['#E7', '#E5'], ['#E1', '#E2', '#E3', '#E4', '#E6']); // F
      break;
    case 79:
      justChangeColors(['#E7', '#E6', '#E5', '#E4'], ['#E1', '#E2', '#E3']); // G
      break;
    case 81:
      justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3'], ['#E1', '#E2']); // A
      break;
    case 83:
      justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E2'], ['#E1']); // B
      break;
    case 84:
      audioTimes += 1;
      playSoundAndChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E1'], ['#E2']); // high C
      break;
    case null:
      justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E2', '#E1'], []);
      break;
  }
}

function playSoundAndChangeColors(yellowCircles = [], orangeCircles = []) {
  //Change colors
  changeCirclesColor(yellowCircles, orangeCircles);
  // Play audios
  setTimeout(() => {
    if (audioTimes == 1) {
      let tryagainAudio = document.querySelector('#tryagain');
      tryagainAudio.play();
    } else {
      let perfectAudio = document.querySelector('#perfect');
      perfectAudio.play();
    }
  }, 1000); // 1s delay
}

function endAndChangeColors(yellowCircles = [], orangeCircles = []) {
  //Change colors
  changeCirclesColor(yellowCircles, orangeCircles);
  // Play audios
  setTimeout(() => {
    if (endPoint == 5){
      let endAudio = document.querySelector('#end');
     endAudio.play();
     }
  }, 2000); // 2s delay
}

function justChangeColors(yellowCircles = [], orangeCircles = []) {
  //Change colors
  changeCirclesColor(yellowCircles, orangeCircles);
}

function changeCirclesColor(yellowCircles = [], orangeCircles = []) {
  // Apply yellow color
  yellowCircles.forEach((circleId) => {
    const circle = document.querySelector(circleId);
    if (circle) {
      circle.setAttribute('color', "#FFFF37"); // Set to yellow
    }
  });
  
  // Apply orange color
  orangeCircles.forEach((circleId) => {
    const circle = document.querySelector(circleId);
    if (circle) {
      circle.setAttribute('color', "#FF9224"); // Set to orange
    }
  });
}
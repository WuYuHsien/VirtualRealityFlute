let midi = null; // global MIDIAccess object
let noteStartTimes = {}; // Object to keep track of note start times
let currentNoteIndex = 0; // Index to keep track of the current expected note
const firstSequence = [79, 81, 74, 83, 76, 72, 77, 84]; // Sequence of notes to be received
const secondSequence = [76, 74, 79, 81, 77, 83, 72, 84];
const endSequence = [1];

const sequenceSets = [ firstSequence, secondSequence, endSequence ];
let seqIndex = 0;
const timesList = [1, 1, 1];

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

function scaleNote(note) {
  switch(note) {
    case 72: // C
      changeTextOpacity(['C'], ['D', 'E', 'F', 'G', 'A', 'B', 'C6']);
      break;
    case 74: // D
      changeTextOpacity(['D'], ['C', 'E', 'F', 'G', 'A', 'B', 'C6']);
      break;
    case 76: // E
      changeTextOpacity(['E'], ['C', 'D', 'F', 'G', 'A', 'B', 'C6']);
      break;
    case 77: // F
      changeTextOpacity(['F'], ['C', 'D', 'E', 'G', 'A', 'B', 'C6']);
      break;
    case 79: // G
      changeTextOpacity(['G'], ['C', 'D', 'E', 'F', 'A', 'B', 'C6']);
      break;
    case 81: // A
      changeTextOpacity(['A'], ['C', 'D', 'E', 'F', 'G', 'B', 'C6']);
      break;
    case 83: // B
      changeTextOpacity(['B'], ['C', 'D', 'E', 'F', 'G', 'A', 'C6']);
      break;
    case 84: // high C
      changeTextOpacity(['C6'], ['C', 'D', 'E', 'F', 'G', 'A', 'B']);
      break;
    case null:
      changeTextOpacity([], ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C6']);
      break;
  }
}

function changeTextOpacity(showTextIds, hideTextIds) {
  showTextIds.forEach(id => {
    let element = document.querySelector(`a-text#${id}`);
    if (element) {
      console.log(`Showing text: ${id}`);
      element.setAttribute('opacity', 1);
    } else {
      console.error(`Element not found: ${id}`);
    }
  });

  hideTextIds.forEach(id => {
    let element = document.querySelector(`a-text#${id}`);
    if (element) {
      console.log(`Hiding text: ${id}`);
      element.setAttribute('opacity', 0);
    } else {
      console.error(`Element not found: ${id}`);
    }
  });
}
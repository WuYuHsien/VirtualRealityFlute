let midi = null; // global MIDIAccess object
let noteStartTimes = {}; // Object to keep track of note start times
let currentNoteIndex = 0; // Index to keep track of the current expected note
const noteSequence = [72, 74, 76, 77, 79, 81, 83, 84]; // Sequence of notes to be received
const musicSequence = [76, 74, 72, 74, 77, 76, 74, 72, 79, 77, 76, 74, 72, 74, 76, 72];
const endSequence = [1];

const sequenceSets = [ noteSequence, musicSequence, endSequence ];
let seqIndex = 0;
const timesList = [2, 1, 1];

var prevNote = 1;

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
  
  // play sound for the correct note
  if(expectedNote === note) {
    playSound(expectedNote);
  }

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
      changeTextOpacity(['C'], ['D', 'E', 'F', 'G', 'A', 'B', 'C6']);
      break;
    case 74:
      justChangeColors(['#E7'], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6']); // D
      changeTextOpacity(['D'], ['C', 'E', 'F', 'G', 'A', 'B', 'C6']);
      break;
    case 76:
      justChangeColors(['#E7', '#E6'], ['#E1', '#E2', '#E3', '#E4', '#E5']); // E
      changeTextOpacity(['E'], ['C', 'D', 'F', 'G', 'A', 'B', 'C6']);
      break;
    case 77:
      justChangeColors(['#E5'], ['#E1', '#E2', '#E3', '#E4', '#E6', '#E7']); // F
      changeTextOpacity(['F'], ['C', 'D', 'E', 'G', 'A', 'B', 'C6']);
      break;
    case 79:
      justChangeColors(['#E7', '#E6', '#E5', '#E4'], ['#E1', '#E2', '#E3']); // G
      changeTextOpacity(['G'], ['C', 'D', 'E', 'F', 'A', 'B', 'C6']);
      break;
    case 81:
      justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3'], ['#E1', '#E2']); // A
      changeTextOpacity(['A'], ['C', 'D', 'E', 'F', 'G', 'B', 'C6']);
      break;
    case 83:
      justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E2'], ['#E1']); // B
      changeTextOpacity(['B'], ['C', 'D', 'E', 'F', 'G', 'A', 'C6']);
      break;
    case 84:
      audioTimes += 1;
      playSoundAndChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E1'], ['#E2']); // high C
      changeTextOpacity(['C6'], ['C', 'D', 'E', 'F', 'G', 'A', 'B']);
      break;
    case null:
      justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E2', '#E1'], []);
      changeTextOpacity([], ['#C', '#D', '#E', '#F', '#G', '#A', '#B', '#C6']);
      break;
  }
}

function playSound(note) {

  let noteStrDict = {
    72: "#Do", 
    76: "#Re", 
    76: "#Mi", 
    77: "#Fa", 
    79: "#So", 
    81: "#La", 
    83: "#Ti", 
    84: "#highDo",
  }

  // detect whether the note changed, pause the previous one
  console.log("prev note and curr note: ", prevNote, note);
  if(note !== prevNote) {
    if(prevNote in noteStrDict){
      let noteAudio = document.querySelector(noteStrDict[prevNote]);
      noteAudio.pause();
      noteAudio.currentTime = 0;
      console.log("paused: ", noteStrDict[prevNote]);
    }
  }

  let noteStr = ""
  let noteStrArr = ["#Do", "#Re", "#Mi", "#Fa", "#So", "#La", "#Ti", "#highDo"];

  switch(note) {
    case 72:
      noteStr = "#Do"
      // let C5Audio = document.querySelector('#Do');
      // C5Audio.play();
      break;
    case 74:
      noteStr = "#Re"
      // let D5Audio = document.querySelector('#Re');
      // D5Audio.play();
      break;
    case 76:
      noteStr = "#Mi"
      // let E5Audio = document.querySelector('#Mi');
      // E5Audio.play();
      break;
    case 77:
      noteStr = "#Fa"
      // let F5Audio = document.querySelector('#Fa');
      // F5Audio.play();
      break;
    case 79:
      noteStr = "#So"
      // let G5Audio = document.querySelector('#So');
      // G5Audio.play();
      break;
    case 81:
      noteStr = "#La"
      // let A5Audio = document.querySelector('#La');
      // A5Audio.play();
      break;
    case 83:
      noteStr = "#Ti"
      // let B5Audio = document.querySelector('#Ti');
      // B5Audio.play();
      break;
    case 84:
      noteStr = "#highDo"
      // let C6Audio = document.querySelector('#highDo');
      // C6Audio.play();
      break;
    default:
      noteStr = ""
  }
  
  if(noteStr !== "") {
    let noteAudio = document.querySelector(noteStr);
    console.log("noteStr: ", noteStr);
    console.log("Selected audio class: ", noteAudio);
    noteAudio.play();
    console.log("sound played: ", noteStr);
  }
  // else {
  //   for(let i = 0; i < noteStrArr.length; i++) {
  //     let noteAudio = document.querySelector(noteStrArr[i]);
  //     noteAudio.pause();
  //     console.log("paused all sound: ");
  //   }
  // }
   
  prevNote = note;

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
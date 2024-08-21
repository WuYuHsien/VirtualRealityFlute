AFRAME.registerComponent('start-game', {
    init: function() {
      let button = document.querySelector('#startButton');
      button.addEventListener('click', function () {
        button.setAttribute('visible', 'false'); // 隱藏按鈕
        startGame(); // 開始遊戲
      });
    }
  });
document.querySelector('a-scene').setAttribute('start-game', '');

function startGame() {

  // Audio tutorial
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
    let startAudio = document.querySelector('#start');
    startAudio.play().catch(error => {
      console.error('Error playing start audio:', error);
    });
  }, 30000); // 30 seconds

  setTimeout(function() {
    let tryAudio = document.querySelector('#tryagain');
    tryAudio.play().catch(error => {
      console.error('Error playing tryagain audio:', error);
    });
  }, 63000); // 63 seconds

  setTimeout(function() {
    let reAudio = document.querySelector('#reverse');
    reAudio.play().catch(error => {
      console.error('Error playing reverse audio:', error);
    });
  }, 91000); // 91 seconds

  setTimeout(function() {
    let endAudio = document.querySelector('#end');
    endAudio.play().catch(error => {
      console.error('Error playing end audio:', error);
    });
  }, 125000); // 125 seconds


  // Notes sounds
  setTimeout(function() {
    let doAudio = document.querySelector('#Do');
    doAudio.play().catch(error => {
      console.error('Error playing do audio:', error);
    });
  }, 38000); // 38 seconds

  setTimeout(function() {
    let reAudio = document.querySelector('#Re');
    reAudio.play().catch(error => {
      console.error('Error playing re audio:', error);
    });
  }, 41000); // 41 seconds

  setTimeout(function() {
    let miAudio = document.querySelector('#Mi');
    miAudio.play().catch(error => {
      console.error('Error playing mi audio:', error);
    });
  }, 44000); // 44 seconds

  setTimeout(function() {
    let faAudio = document.querySelector('#Fa');
    faAudio.play().catch(error => {
      console.error('Error playing fa audio:', error);
    });
  }, 47000); // 47 seconds

  setTimeout(function() {
    let soAudio = document.querySelector('#So');
    soAudio.play().catch(error => {
      console.error('Error playing so audio:', error);
    });
  }, 50000); // 50 seconds

  setTimeout(function() {
    let laAudio = document.querySelector('#La');
    laAudio.play().catch(error => {
      console.error('Error playing la audio:', error);
    });
  }, 53000); // 53 seconds

  setTimeout(function() {
    let tiAudio = document.querySelector('#Ti');
    tiAudio.play().catch(error => {
      console.error('Error playing ti audio:', error);
    });
  }, 56000); // 56 seconds

  setTimeout(function() {
    let highDoAudio = document.querySelector('#highDo');
    highDoAudio.play().catch(error => {
      console.error('Error playing highDo audio:', error);
    });
  }, 59000); // 59 seconds

  // Repeat
  setTimeout(function() {
    let doAudio = document.querySelector('#Do');
    doAudio.play().catch(error => {
      console.error('Error playing do audio:', error);
    });
  }, 66000); // 66 seconds

  setTimeout(function() {
    let reAudio = document.querySelector('#Re');
    reAudio.play().catch(error => {
      console.error('Error playing re audio:', error);
    });
  }, 69000); // 69 seconds

  setTimeout(function() {
    let miAudio = document.querySelector('#Mi');
    miAudio.play().catch(error => {
      console.error('Error playing mi audio:', error);
    });
  }, 72000); // 72 seconds

  setTimeout(function() {
    let faAudio = document.querySelector('#Fa');
    faAudio.play().catch(error => {
      console.error('Error playing fa audio:', error);
    });
  }, 75000); // 75 seconds

  setTimeout(function() {
    let soAudio = document.querySelector('#So');
    soAudio.play().catch(error => {
      console.error('Error playing so audio:', error);
    });
  }, 78000); // 78 seconds

  setTimeout(function() {
    let laAudio = document.querySelector('#La');
    laAudio.play().catch(error => {
      console.error('Error playing la audio:', error);
    });
  }, 81000); // 81 seconds

  setTimeout(function() {
    let tiAudio = document.querySelector('#Ti');
    tiAudio.play().catch(error => {
      console.error('Error playing ti audio:', error);
    });
  }, 84000); // 84 seconds

  setTimeout(function() {
    let highDoAudio = document.querySelector('#highDo');
    highDoAudio.play().catch(error => {
      console.error('Error playing highDo audio:', error);
    });
  }, 87000); // 87 seconds

  // Reverse sounds
  setTimeout(function() {
    let highDoAudio = document.querySelector('#highDo');
    highDoAudio.play().catch(error => {
      console.error('Error playing highDo audio:', error);
    });
  }, 97000); // 97 seconds

  setTimeout(function() {
    let tiAudio = document.querySelector('#Ti');
    tiAudio.play().catch(error => {
      console.error('Error playing ti audio:', error);
    });
  }, 100000); // 100 seconds

  setTimeout(function() {
    let laAudio = document.querySelector('#La');
    laAudio.play().catch(error => {
      console.error('Error playing la audio:', error);
    });
  }, 103000); // 103 seconds

  setTimeout(function() {
    let soAudio = document.querySelector('#So');
    soAudio.play().catch(error => {
      console.error('Error playing so audio:', error);
    });
  }, 106000); // 106 seconds
  
  setTimeout(function() {
    let faAudio = document.querySelector('#Fa');
    faAudio.play().catch(error => {
      console.error('Error playing fa audio:', error);
    });
  }, 109000); // 109 seconds

  setTimeout(function() {
    let miAudio = document.querySelector('#Mi');
    miAudio.play().catch(error => {
      console.error('Error playing mi audio:', error);
    });
  }, 113000); // 113 seconds

  setTimeout(function() {
    let reAudio = document.querySelector('#Re');
    reAudio.play().catch(error => {
      console.error('Error playing re audio:', error);
    });
  }, 116000); // 116 secondsg
  
  setTimeout(function() {
    let doAudio = document.querySelector('#Do');
    doAudio.play().catch(error => {
      console.error('Error playing do audio:', error);
    });
  }, 119000); // 119gi seconds


  // Notes Fingerings
  setTimeout(() => {
    console.log('Changing colors and text at 41 seconds');
    justChangeColors(['#E7'], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6']); // D
    changeTextOpacity(['D'], ['C', 'E', 'F', 'G', 'A', 'B', 'C6']);
  }, 41000); // 41 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6'], ['#E1', '#E2', '#E3', '#E4', '#E5']); // E
    changeTextOpacity(['E'], ['C', 'D', 'F', 'G', 'A', 'B', 'C6']);
  }, 44000); // 44 seconds

  setTimeout(() => {
    justChangeColors(['#E5'], ['#E1', '#E2', '#E3', '#E4', '#E6', '#E7']); // F
    changeTextOpacity(['F'], ['C', 'D', 'E', 'G', 'A', 'B', 'C6']);
  }, 47000); // 47 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4'], ['#E1', '#E2', '#E3']); // G
    changeTextOpacity(['G'], ['C', 'D', 'E', 'F', 'A', 'B', 'C6']);
  }, 50000); // 50 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3'], ['#E1', '#E2']); // A
    changeTextOpacity(['A'], ['C', 'D', 'E', 'F', 'G', 'B', 'C6']);
  }, 53000); // 53 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E2'], ['#E1']); // B
    changeTextOpacity(['B'], ['C', 'D', 'E', 'F', 'G', 'A', 'C6']);
  }, 56000); // 56 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E1'], ['#E2']); // high C
    changeTextOpacity(['C6'], ['C', 'D', 'E', 'F', 'G', 'A', 'B']);
  }, 59000); // 59 seconds

  setTimeout(() => {
    justChangeColors([], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6', '#E7']); // C
    changeTextOpacity(['C'], ['D', 'E', 'F', 'G', 'A', 'B', 'C6']);
  }, 65000); // 65 seconds

  setTimeout(() => {
    justChangeColors(['#E7'], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6']); // D
    changeTextOpacity(['D'], ['C', 'E', 'F', 'G', 'A', 'B', 'C6']);
  }, 69000); // 69 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6'], ['#E1', '#E2', '#E3', '#E4', '#E5']); // E
    changeTextOpacity(['E'], ['C', 'D', 'F', 'G', 'A', 'B', 'C6']);
  }, 72000); // 72 seconds

  setTimeout(() => {
    justChangeColors(['#E5'], ['#E1', '#E2', '#E3', '#E4', '#E6', '#E7']); // F
    changeTextOpacity(['F'], ['C', 'D', 'E', 'G', 'A', 'B', 'C6']);
  }, 75000); // 75 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4'], ['#E1', '#E2', '#E3']); // G
    changeTextOpacity(['G'], ['C', 'D', 'E', 'F', 'A', 'B', 'C6']);
  }, 78000); // 78 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3'], ['#E1', '#E2']); // A
    changeTextOpacity(['A'], ['C', 'D', 'E', 'F', 'G', 'B', 'C6']);
  }, 81000); // 81 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E2'], ['#E1']); // B
    changeTextOpacity(['B'], ['C', 'D', 'E', 'F', 'G', 'A', 'C6']);
  }, 84000); // 84 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E1'], ['#E2']); // high C
    changeTextOpacity(['C6'], ['C', 'D', 'E', 'F', 'G', 'A', 'B']);
  }, 87000); // 87 seconds


  // Reverse
  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E1'], ['#E2']); // high C
    changeTextOpacity(['C6'], ['C', 'D', 'E', 'F', 'G', 'A', 'B']);
  }, 97000); // 97 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E2'], ['#E1']); // B
    changeTextOpacity(['B'], ['C', 'D', 'E', 'F', 'G', 'A', 'C6']);
  }, 100000); // 100 seconds
  
  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3'], ['#E1', '#E2']); // A
    changeTextOpacity(['A'], ['C', 'D', 'E', 'F', 'G', 'B', 'C6']);
  }, 103000); // 103 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6', '#E5', '#E4'], ['#E1', '#E2', '#E3']); // G
    changeTextOpacity(['G'], ['C', 'D', 'E', 'F', 'A', 'B', 'C6']);
  }, 106000); // 106 seconds

  setTimeout(() => {
    justChangeColors(['#E5'], ['#E1', '#E2', '#E3', '#E4', '#E6', '#E7']); // F
    changeTextOpacity(['F'], ['C', 'D', 'E', 'G', 'A', 'B', 'C6']);
  }, 109000); // 109 seconds

  setTimeout(() => {
    justChangeColors(['#E7', '#E6'], ['#E1', '#E2', '#E3', '#E4', '#E5']); // E
    changeTextOpacity(['E'], ['C', 'D', 'F', 'G', 'A', 'B', 'C6']);
  }, 113000); // 113 seconds

  setTimeout(() => {
    justChangeColors(['#E7'], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6']); // D
    changeTextOpacity(['D'], ['C', 'E', 'F', 'G', 'A', 'B', 'C6']);
  }, 116000); // 116 seconds

  setTimeout(() => {
    justChangeColors([], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6', '#E7']); // C
    changeTextOpacity(['C'], ['D', 'E', 'F', 'G', 'A', 'B', 'C6']);
  }, 119000); // 119 seconds
};



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
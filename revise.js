window.addEventListener('load', function() {
  
    // Audio instruction
    setTimeout(function() {
      let introAudio = document.querySelector('#intro');
      introAudio.play().catch(error => {
        console.error('Error playing intro audio:', error);
      });
    }, 15000); // 15 seconds
  
    setTimeout(function() {
      let prepAudio = document.querySelector('#prep');
      prepAudio.play().catch(error => {
        console.error('Error playing prep audio:', error);
      });
    }, 32000); // 32 seconds
  
    setTimeout(function() {
      let startAudio = document.querySelector('#start');
      startAudio.play().catch(error => {
        console.error('Error playing start audio:', error);
      });
    }, 40000); // 40 seconds


    // First try
    setTimeout(function() {
        let doAudio = document.querySelector('#Do');
        doAudio.play().catch(error => {
          console.error('Error playing do audio:', error);
        });
      }, 49000); // 49 seconds

    setTimeout(function() {
        let reAudio = document.querySelector('#Re');
        reAudio.play().catch(error => {
          console.error('Error playing re audio:', error);
        });
      }, 54000); // 54 seconds

    setTimeout(() => {
        justChangeColors(['#E7'], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6']); // D
        changeTextOpacity(['D'], ['C', 'E', 'F', 'G', 'A', 'B', 'C6']);
      }, 54000); // 54 seconds

    setTimeout(function() {
        let miAudio = document.querySelector('#Mi');
        miAudio.play().catch(error => {
          console.error('Error playing mi audio:', error);
        });
      }, 59000); // 59 seconds

    setTimeout(() => {
        justChangeColors(['#E7', '#E6'], ['#E1', '#E2', '#E3', '#E4', '#E5']); // E
        changeTextOpacity(['E'], ['C', 'D', 'F', 'G', 'A', 'B', 'C6']);
      }, 59000); // 59 seconds

    setTimeout(function() {
        let faAudio = document.querySelector('#Fa');
        faAudio.play().catch(error => {
          console.error('Error playing fa audio:', error);
        });
      }, 64000); // 64 seconds
  
    setTimeout(() => {
        justChangeColors(['#E5'], ['#E1', '#E2', '#E3', '#E4', '#E6', '#E7']); // F
        changeTextOpacity(['F'], ['C', 'D', 'E', 'G', 'A', 'B', 'C6']);
      }, 64000); // 64 seconds

    setTimeout(function() {
        let soAudio = document.querySelector('#So');
        soAudio.play().catch(error => {
          console.error('Error playing so audio:', error);
        });
      }, 69000); // 69 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4'], ['#E1', '#E2', '#E3']); // G
        changeTextOpacity(['G'], ['C', 'D', 'E', 'F', 'A', 'B', 'C6']);
      }, 69000); // 69 seconds

    setTimeout(function() {
        let laAudio = document.querySelector('#La');
        laAudio.play().catch(error => {
          console.error('Error playing la audio:', error);
        });
      }, 74000); // 74 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3'], ['#E1', '#E2']); // A
        changeTextOpacity(['A'], ['C', 'D', 'E', 'F', 'G', 'B', 'C6']);
      }, 74000); // 74 seconds

    setTimeout(function() {
        let tiAudio = document.querySelector('#Ti');
        tiAudio.play().catch(error => {
          console.error('Error playing ti audio:', error);
        });
      }, 79000); // 79 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E2'], ['#E1']); // B
        changeTextOpacity(['B'], ['C', 'D', 'E', 'F', 'G', 'A', 'C6']);
      }, 79000); // 79 seconds
    
    setTimeout(function() {
        let highDoAudio = document.querySelector('#highDo');
        highDoAudio.play().catch(error => {
          console.error('Error playing highDo audio:', error);
        });
      }, 84000); // 84 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E1'], ['#E2']); // high C
        changeTextOpacity(['C6'], ['C', 'D', 'E', 'F', 'G', 'A', 'B']);
      }, 84000); // 84 seconds


    // Second try
    setTimeout(function() {
        let tryAudio = document.querySelector('#tryagain');
        tryAudio.play().catch(error => {
          console.error('Error playing tryagain audio:', error);
        });
      }, 89000); // 89 seconds

    setTimeout(() => {
        justChangeColors([], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6', '#E7']); // C
        changeTextOpacity(['C'], ['D', 'E', 'F', 'G', 'A', 'B', 'C6']);
      }, 91000); // 91 seconds

    setTimeout(function() {
        let doAudio = document.querySelector('#Do');
        doAudio.play().catch(error => {
          console.error('Error playing do audio:', error);
        });
      }, 92000); // 92 seconds

    setTimeout(function() {
        let reAudio = document.querySelector('#Re');
        reAudio.play().catch(error => {
          console.error('Error playing re audio:', error);
        });
      }, 97000); // 97 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7'], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6']); // D
        changeTextOpacity(['D'], ['C', 'E', 'F', 'G', 'A', 'B', 'C6']);
      }, 97000); // 97 seconds
    
    setTimeout(function() {
        let miAudio = document.querySelector('#Mi');
        miAudio.play().catch(error => {
          console.error('Error playing mi audio:', error);
        });
      }, 102000); // 102 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6'], ['#E1', '#E2', '#E3', '#E4', '#E5']); // E
        changeTextOpacity(['E'], ['C', 'D', 'F', 'G', 'A', 'B', 'C6']);
      }, 102000); // 102 seconds

    setTimeout(function() {
        let faAudio = document.querySelector('#Fa');
        faAudio.play().catch(error => {
          console.error('Error playing fa audio:', error);
        });
      }, 107000); // 107 seconds
  
    setTimeout(() => {
        justChangeColors(['#E5'], ['#E1', '#E2', '#E3', '#E4', '#E6', '#E7']); // F
        changeTextOpacity(['F'], ['C', 'D', 'E', 'G', 'A', 'B', 'C6']);
      }, 107000); // 107 seconds

    setTimeout(function() {
        let soAudio = document.querySelector('#So');
        soAudio.play().catch(error => {
          console.error('Error playing so audio:', error);
        });
      }, 112000); // 112 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4'], ['#E1', '#E2', '#E3']); // G
        changeTextOpacity(['G'], ['C', 'D', 'E', 'F', 'A', 'B', 'C6']);
      }, 112000); // 112 seconds

    setTimeout(function() {
        let laAudio = document.querySelector('#La');
        laAudio.play().catch(error => {
          console.error('Error playing la audio:', error);
        });
      }, 117000); // 117 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3'], ['#E1', '#E2']); // A
        changeTextOpacity(['A'], ['C', 'D', 'E', 'F', 'G', 'B', 'C6']);
      }, 117000); // 117 seconds

    setTimeout(function() {
        let tiAudio = document.querySelector('#Ti');
        tiAudio.play().catch(error => {
          console.error('Error playing ti audio:', error);
        });
      }, 122000); // 122 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E2'], ['#E1']); // B
        changeTextOpacity(['B'], ['C', 'D', 'E', 'F', 'G', 'A', 'C6']);
      }, 122000); // 122 seconds

    setTimeout(function() {
        let highDoAudio = document.querySelector('#highDo');
        highDoAudio.play().catch(error => {
          console.error('Error playing highDo audio:', error);
        });
      }, 127000); // 127 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E1'], ['#E2']); // high C
        changeTextOpacity(['C6'], ['C', 'D', 'E', 'F', 'G', 'A', 'B']);
      }, 127000); // 127 seconds


    // Reverse
    setTimeout(function() {
        let reAudio = document.querySelector('#reverse');
        reAudio.play().catch(error => {
          console.error('Error playing reverse audio:', error);
        });
      }, 132000); // 132 seconds

    setTimeout(function() {
        let highDoAudio = document.querySelector('#highDo');
        highDoAudio.play().catch(error => {
          console.error('Error playing highDo audio:', error);
        });
      }, 138000); // 138 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E1'], ['#E2']); // high C
        changeTextOpacity(['C6'], ['C', 'D', 'E', 'F', 'G', 'A', 'B']);
      }, 138000); // 138 seconds 
      
    setTimeout(function() {
        let tiAudio = document.querySelector('#Ti');
        tiAudio.play().catch(error => {
          console.error('Error playing ti audio:', error);
        });
      }, 143000); // 143 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3', '#E2'], ['#E1']); // B
        changeTextOpacity(['B'], ['C', 'D', 'E', 'F', 'G', 'A', 'C6']);
      }, 143000); // 143 seconds

    setTimeout(function() {
        let laAudio = document.querySelector('#La');
        laAudio.play().catch(error => {
          console.error('Error playing la audio:', error);
        });
      }, 148000); // 148 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4', '#E3'], ['#E1', '#E2']); // A
        changeTextOpacity(['A'], ['C', 'D', 'E', 'F', 'G', 'B', 'C6']);
      }, 148000); // 148 seconds

    setTimeout(function() {
        let soAudio = document.querySelector('#So');
        soAudio.play().catch(error => {
          console.error('Error playing so audio:', error);
        });
      }, 153000); // 153 seconds
  
    setTimeout(() => {
        justChangeColors(['#E7', '#E6', '#E5', '#E4'], ['#E1', '#E2', '#E3']); // G
        changeTextOpacity(['G'], ['C', 'D', 'E', 'F', 'A', 'B', 'C6']);
      }, 153000); // 153 seconds

    setTimeout(function() {
        let faAudio = document.querySelector('#Fa');
        faAudio.play().catch(error => {
          console.error('Error playing fa audio:', error);
        });
      }, 158000); // 158 seconds
  
    setTimeout(() => {
          justChangeColors(['#E5'], ['#E1', '#E2', '#E3', '#E4', '#E6', '#E7']); // F
          changeTextOpacity(['F'], ['C', 'D', 'E', 'G', 'A', 'B', 'C6']);
        }, 158000); // 158 seconds
    
    setTimeout(function() {
        let miAudio = document.querySelector('#Mi');
        miAudio.play().catch(error => {
            console.error('Error playing mi audio:', error);
        });
      }, 163000); // 163 seconds
      
    setTimeout(() => {
            justChangeColors(['#E7', '#E6'], ['#E1', '#E2', '#E3', '#E4', '#E5']); // E
            changeTextOpacity(['E'], ['C', 'D', 'F', 'G', 'A', 'B', 'C6']);
        }, 163000); // 163 seconds

    setTimeout(function() {
      let reAudio = document.querySelector('#Re');
      reAudio.play().catch(error => {
        console.error('Error playing re audio:', error);
      });
    }, 168000); // 168 seconds

    setTimeout(() => {
        justChangeColors(['#E7'], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6']); // D
        changeTextOpacity(['D'], ['C', 'E', 'F', 'G', 'A', 'B', 'C6']);
      }, 168000); // 168 seconds

    setTimeout(function() {
      let doAudio = document.querySelector('#Do');
      doAudio.play().catch(error => {
        console.error('Error playing do audio:', error);
      });
    }, 173000); // 173 seconds
  
    setTimeout(() => {
      justChangeColors([], ['#E1', '#E2', '#E3', '#E4', '#E5', '#E6', '#E7']); // C
      changeTextOpacity(['C'], ['D', 'E', 'F', 'G', 'A', 'B', 'C6']);
    }, 173000); // 173 seconds


    // End
    setTimeout(function() {
      let endAudio = document.querySelector('#end');
      endAudio.play().catch(error => {
        console.error('Error playing end audio:', error);
      });
    }, 179000); // 179 seconds
  });
  
  
  
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
'use strict';

// start game
// event listeners for keys: accelerate, decelerate, left, right

var game;

function startGame() {

  var bufferCanvas = document.getElementById('buffercanvas');
  var finalCanvas = document.getElementById('finalcanvas');
  var game = new Game(bufferCanvas, finalCanvas);
  var splashScreen = new SplashScreen(finalCanvas);
  splashScreen.show();
  // event listeners

  var onkeydown = function(event) {
    switch(event.keyCode) {
      case 13: 
        game.start(); 
        break;
      case 37:
        game.keyLeft();
        break;
      case 39:
        game.keyRight();
        break;
      case 38:
        game.keyUp();
        break;
      case 40:
        game.keyDown();
        break;
      case 32:
        game.keySpace();
        break;
    } 
  }

  document.addEventListener('keydown', onkeydown);

}


window.addEventListener('load', startGame);
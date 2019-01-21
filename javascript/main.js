'use strict';

// start game
// event listeners for keys: accelerate, decelerate, left, right

var game;

function startGame() {

  var bufferCanvas = document.getElementById('buffercanvas');
  var finalCanvas = document.getElementById('finalcanvas');
  var game = new Game(bufferCanvas, finalCanvas);
  // event listeners

  game.start();

}


window.addEventListener('load', startGame);
'use strict';

// start game
// event listeners for keys: accelerate, decelerate, left, right

var game;

function startGame() {
  var canvas = document.getElementById('canvas');
  var game = new Game(canvas);
  // event listeners

  game.start();
}


window.addEventListener('load', startGame);
'use strict';

// start game
// event listeners for keys: accelerate, decelerate, left, right

function main() {
  function buildDom(html) {
    var div = document.querySelector('.container');
    div.innerHTML = html;
    return div;
  }
  
  function buildSplashScreen() {
    var splashScreen = buildDom(`
    <div id="splash-screen">
      <h1 id="game-title">Minerva</h1>
      <div id="start-buttons">
        <button id="start-game-button" class="menu-buttons">Start</button>
        <button id="options-button" class="menu-buttons">Options</button>
      </div>

      <audio src="music/bensound-epic.mp3" autoplay>
    </div>`);

    splashScreen.querySelector('#start-game-button').addEventListener('click', startGame);
    splashScreen.querySelector('#options-button').addEventListener('click', buildOptionsScreen)
  }

  function buildOptionsScreen() {
    var optionsScreen = buildDom(`
    <div id="options-screen">
      <h2>Options</h2>
      <button id="options-return-button" class="menu-buttons">Return</button>
    </div>`);

    optionsScreen.querySelector('#options-return-button').addEventListener('click', buildSplashScreen)
  }

  function buildGameOverScreen() {
    var gameOverScreen = buildDom(`
    <div id="death-screen">
      <button id="death-retry-button" class="menu-buttons">Live again</button>
      <button id="death-menu-button" class="menu-buttons">Main menu</button>
    </div>`);

    gameOverScreen.querySelector('#death-retry-button').addEventListener('click', startGame);
    gameOverScreen.querySelector('#death-menu-button').addEventListener('click', buildSplashScreen);

  }

  function startGame() {
    
    var gameScreen = buildDom(`
    <div id="canvas">
      <canvas id="buffercanvas" width="1280" height="720" style="display: none"></canvas>
      <canvas id="finalcanvas" width="1280" height="720"></canvas>
    </div>`);
  
    var bufferCanvas = gameScreen.querySelector('#buffercanvas');
    var finalCanvas = gameScreen.querySelector('#finalcanvas');
    var game = new Game(bufferCanvas, finalCanvas);
    game.onCallbackGameOver(buildGameOverScreen);
    //var splashScreen = new SplashScreen(finalCanvas);
    //splashScreen.show();
  
    // event listeners
  
    var onkeydown = function(event) {
      switch(event.keyCode) {
        //case 13:
        //  game.start(); 
        //  break;
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
      }
    }
  
    var onkeyup = function(event) {
      switch(event.keyCode) {
        case 32:
          game.keySpace();
          break;
      }
    }
  
    document.addEventListener('keydown', onkeydown);
    document.addEventListener('keyup', onkeyup)

    game.start();
  }
  
  buildSplashScreen()
}  

window.addEventListener('load',main)

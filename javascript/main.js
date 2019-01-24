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

      <audio src="music/bensound-epic.mp3" autoplay loop>
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
    var quotesArray = [`"The ships hung in the sky, much the way that bricks don't." (Douglas Adams)`,
      `"Any planet is Earth to those who live in it." (Isaac Asimov)`,
      `"Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying." (Arthur C. Clarke)`,
      `"A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects." (Robert A. Heinlein)`,
      `"Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic." (Frank Herbert)`,
      `"I'm not insane sir. I have a finely calibrated sense of acceptable risk." (John Scalzi)`,
      `"I am living in a nightmare, from which from time to time I wake in sleep." (Ursula K. Le Guin)`,
      `"The end justifies the means. But what if there never is an end? All we have is means." (Ursula K. Le Guin)`,
      `"Where does your soul go, when you die in Hell?" (Ursula K. Le Guin)`
    ];

    var gameOverScreen = buildDom(`
    <div id="death-screen">
      <h3>${quotesArray[Math.floor(Math.random() * 9)]}</h3>
      <button id="death-retry-button" class="menu-buttons">Live again</button>
      <button id="death-menu-button" class="menu-buttons">Main menu</button>
      
      <audio src="music/bensound-november.mp3" autoplay>
    </div>`);

    gameOverScreen.querySelector('#death-retry-button').addEventListener('click', startGame);
    gameOverScreen.querySelector('#death-menu-button').addEventListener('click', buildSplashScreen);

  }

  function startGame() {
    
    var gameScreen = buildDom(`
    <div id="canvas">
      <canvas id="buffercanvas" width="1280" height="720" style="display: none"></canvas>
      <canvas id="finalcanvas" width="1280" height="720"></canvas>

      <audio src="music/456269__soundfx-studio__f-15-eagle-cockpit-avionics.wav" autoplay loop>
    </div>`);
  
    var bufferCanvas = gameScreen.querySelector('#buffercanvas');
    var finalCanvas = gameScreen.querySelector('#finalcanvas');
    var game = new Game(bufferCanvas, finalCanvas);
    game.onCallbackGameOver(buildGameOverScreen);
  
    // event listeners
  
    var onkeydown = function(event) {
      switch(event.keyCode) {
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

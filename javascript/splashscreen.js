'use strict';

function SplashScreen(finalCanvas) {

  this.ctx = finalCanvas.getContext('2d');
  this.width = finalCanvas.width;
  this.height = finalCanvas.height;
  this.alpha = 0;
  this.splashImage = document.getElementById('splashimage')
  
}

SplashScreen.prototype.show = function() {
  this.ctx.drawImage(this.splashImage, 0, 0, this.width, this.height);
}


SplashScreen.prototype.transition = function() {
  
}


//Transitions 

function DeathTransition(finalCanvas) {

  this.ctx = finalCanvas.getContext('2d');
  this.deathAnimation;

}

DeathTransition.prototype.start = function() {

  function deathLoop() {

    this.ctx.fillRect(0, 0, 1280, 720);

    this.deathAnimation = window.requestAnimationFrame(deathLoop.bind(this));

  }

  this.deathAnimation = window.requestAnimationFrame(deathLoop.bind(this));

}

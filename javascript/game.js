'use strict';

function Game(bufferCanvas, finalCanvas) {

  this.bufferCtx = bufferCanvas.getContext('2d');
  this.finalCtx = finalCanvas.getContext('2d');

  this.ground = new Ground(bufferCanvas, finalCanvas);
  this.backGround = new BackGround(finalCanvas);

  this.animation;

}


Game.prototype._renderGround = function() {
  this.ground.render();
  this.backGround.render();
}

Game.prototype._clearCanvas = function() {
  this.bufferCtx.fillStyle = '#009900';
  this.bufferCtx.fillRect(0, 0, 1280, 720);
}


Game.prototype.start = function() {
  
  function gameLoop() {

    this._clearCanvas()
    this._renderGround();
    //functions to loop game
    this.animation = window.requestAnimationFrame(gameLoop.bind(this));

  }

  this.animation = window.requestAnimationFrame(gameLoop.bind(this));

}

Game.prototype.keyLeft = function() {
  this.backGround.scrollRight();
}

Game.prototype.keyRight = function() {
  this.backGround.scrollLeft();
}
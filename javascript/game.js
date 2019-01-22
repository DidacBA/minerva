'use strict';

function Game(bufferCanvas, finalCanvas) {

  this.bufferCtx = bufferCanvas.getContext('2d');
  this.finalCtx = finalCanvas.getContext('2d');

  this.ground = new Ground(bufferCanvas, finalCanvas);
  this.backGround = new BackGround(finalCanvas);
  this.player = new Player(finalCanvas);
  this.enemy = new Enemy(finalCanvas, 640, 360);

  this.animation;

}


Game.prototype._renderGround = function() {
  this.ground.render();
  this.backGround.render();
}

Game.prototype._renderPlayer = function() {
  this.player.render();
}

Game.prototype._renderEnemy = function() {
  this.enemy.update();
  this.enemy.render();

}

Game.prototype._clearCanvas = function() {
  this.bufferCtx.fillStyle = '#009900';
  this.bufferCtx.fillRect(0, 0, 1280, 720);
}


Game.prototype.start = function() {
  
  function gameLoop() {

    this._clearCanvas()
    this._renderGround();
    this._renderEnemy();
    this._renderPlayer();
    //functions to loop game
    this.animation = window.requestAnimationFrame(gameLoop.bind(this));

  }

  this.animation = window.requestAnimationFrame(gameLoop.bind(this));

}

Game.prototype.keyLeft = function() {
  this.backGround.scrollRight();
  //this.player.moveLeft();
}

Game.prototype.keyRight = function() {
  this.backGround.scrollLeft();
  //this.player.moveRight();
}

Game.prototype.keyUp = function() {
  //this.player.moveUp();
  this.ground.scrollGroundUp();
  this.backGround.scrollUp();
}

Game.prototype.keyDown = function() {
  //this.player.moveDown();
  this.ground.scrollGroundDown();
  this.backGround.scrollDown();
}

Game.prototype.keySpace = function() {
  this.player.shoot();
}
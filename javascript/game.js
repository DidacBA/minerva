'use strict';

function Game(bufferCanvas, finalCanvas) {

  this.bufferCtx = bufferCanvas.getContext('2d');
  this.finalCtx = finalCanvas.getContext('2d');

  this.finalCanvas = finalCanvas;

  this.ground = new Ground(bufferCanvas, finalCanvas);
  this.backGround = new BackGround(finalCanvas);
  this.player = new Player(finalCanvas);
  this.isPlayerShooting = false;

  this.enemies = [];

  this._updateEnemies = function() {

    if (Math.random() > 0.95) {
      this._createEnemy();
    }

    this.enemies.forEach(function(enemy) {
      enemy.update();
      enemy.render();
    }.bind(this));
  }

  this._createEnemy = function() {
    this.enemies.push(new Enemy(this.finalCanvas, 20, 30, this.isPlayerShooting));
  }

  this.animation;

}


Game.prototype._renderGround = function() {
  this.ground.render();
  this.backGround.render();
}

Game.prototype._renderPlayer = function() {
  this.player.render();
}

Game.prototype._renderShot = function() {
  if (this.isPlayerShooting === true) {
    this.player.shoot();
  } 
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
    this._updateEnemies();
    this._renderShot();
    this._renderPlayer();

    this.animation = window.requestAnimationFrame(gameLoop.bind(this));

  }

  this.animation = window.requestAnimationFrame(gameLoop.bind(this));

}

Game.prototype.keyLeft = function() {
  this.backGround.scrollRight();
  //this.enemy.scrollRight();
  //this.player.moveLeft();
}

Game.prototype.keyRight = function() {
  this.backGround.scrollLeft();
  //this.enemy.scrollLeft();
  //this.player.moveRight();
}

Game.prototype.keyUp = function() {
  //this.player.moveUp();
  this.ground.scrollGroundUp();
  this.backGround.scrollUp();
  //this.enemy.scrollUp();
}

Game.prototype.keyDown = function() {
  //this.player.moveDown();
  this.ground.scrollGroundDown();
  this.backGround.scrollDown();
  //this.enemy.scrollDown();
}

Game.prototype.keySpace = function() {
  this.isPlayerShooting = !this.isPlayerShooting;
}


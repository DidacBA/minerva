'use strict';

function Game(bufferCanvas, finalCanvas) {

  this.bufferCtx = bufferCanvas.getContext('2d');
  this.finalCtx = finalCanvas.getContext('2d');
  this.animation;
  this.finalCanvas = finalCanvas;
  this.ground = new Ground(bufferCanvas, finalCanvas);
  this.backGround = new BackGround(finalCanvas);
  this.player = new Player(finalCanvas);
  this.isPlayerShooting = false;
  this.enemies = [];

  this._updateEnemies = function() {

    if (this.enemies.length === 0) {
      this._createEnemy();
    }

    this.enemies.forEach(function(enemy) {
      enemy.update();
      enemy.render();

      if (enemy.isDead) {
        this.enemies.pop();
      }

      if (enemy.isAttacking) {
        this.player.loseHealth();
      }

    }.bind(this));
  }

  this._createEnemy = function() {
    this.enemies.push(new Enemy(this.finalCanvas, 20, 30, this.isPlayerShooting));
  }
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
    if (this.player.isPlayerDead) {
      window.cancelAnimationFrame(this.animation);
      this.onGameOver();
    }
  }

  window.requestAnimationFrame(gameLoop.bind(this));
}

Game.prototype.keyLeft = function() {
  this.backGround.scrollRight();
  this.enemies[0].scrollRight();
}

Game.prototype.keyRight = function() {
  this.backGround.scrollLeft();
  this.enemies[0].scrollLeft();
}

Game.prototype.keyUp = function() {
  this.ground.scrollGroundUp();
  this.backGround.scrollUp();
  this.enemies[0].scrollUp();
}

Game.prototype.keyDown = function() {
  this.ground.scrollGroundDown();
  this.backGround.scrollDown();
  this.enemies[0].scrollDown();
}

Game.prototype.keySpace = function() {
  this.isPlayerShooting = !this.isPlayerShooting;
  if(this.isPlayerShooting) {
    this.enemies[0].killEnemy();
  }
  setTimeout(function() {
    this.isPlayerShooting = false;
  }.bind(this), 2000)
}

Game.prototype.onCallbackGameOver = function(callback) {
  this.onGameOver = callback;
}

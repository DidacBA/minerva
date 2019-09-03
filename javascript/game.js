'use strict';

class Game {
  constructor(bufferCanvas, finalCanvas) {
    this.bufferCtx = bufferCanvas.getContext('2d');
    this.finalCtx = finalCanvas.getContext('2d');
    this.animation;
    this.finalCanvas = finalCanvas;
    this.ground = new Ground(bufferCanvas, finalCanvas);
    this.backGround = new BackGround(finalCanvas);
    this.player = new Player(finalCanvas);
    this.isPlayerShooting = false;
    this.shootingSound = new Audio("music/165394__shawnyboy__heavy-machine-gun.wav");
    this.lowHealthSound = new Audio("music/135613__danielnieto7__alert.wav");
    this.enemies = [];
    this._updateEnemies = function () {
      if (this.enemies.length === 0) {
        this._createEnemy();
      }
      this.enemies.forEach(function (enemy) {
        enemy.update();
        enemy.render();
        if (enemy.isDead) {
          this.enemies.pop();
        }
        if (enemy.isAttacking) {
          this.player.loseHealth();
          this.lowHealthSound.play();
        }
      }.bind(this));
    };
    this._createEnemy = function () {
      this.enemies.push(new Enemy(this.finalCanvas, 20, 30, this.isPlayerShooting));
    };
  }
  _renderGround() {
    this.ground.render();
    this.backGround.render();
  }
  _renderPlayer() {
    this.player.render();
  }
  _renderShot() {
    if (this.isPlayerShooting === true) {
      this.player.shoot();
    }
  }
  _renderEnemy() {
    this.enemy.update();
    this.enemy.render();
  }
  _clearCanvas() {
    this.bufferCtx.fillStyle = '#009900';
    this.bufferCtx.fillRect(0, 0, 1280, 720);
  }
  start() {
    function gameLoop() {
      this._clearCanvas();
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
  keyLeft() {
    this.backGround.scrollRight();
    this.enemies[0].scrollRight();
  }
  keyRight() {
    this.backGround.scrollLeft();
    this.enemies[0].scrollLeft();
  }
  keyUp() {
    this.ground.scrollGroundUp();
    this.backGround.scrollUp();
    this.enemies[0].scrollUp();
  }
  keyDown() {
    this.ground.scrollGroundDown();
    this.backGround.scrollDown();
    this.enemies[0].scrollDown();
  }
  keySpace() {
    this.isPlayerShooting = !this.isPlayerShooting;
    this.shootingSound.play();
    if (this.isPlayerShooting) {
      this.enemies[0].killEnemy();
    }
    setTimeout(function () {
      this.isPlayerShooting = false;
    }.bind(this), 2000);
  }
  onCallbackGameOver(callback) {
    this.onGameOver = callback;
  }
}















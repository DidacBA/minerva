'use strict';

function Enemy(finalCanvas, x, y, playerIsShooting) {

  this.ctx = finalCanvas.getContext('2d');

  this.enemySprite = document.getElementById('enemy');

  this.sizeEnemyX = 50;
  this.sizeEnemyY = 50;

  this.width = 1280;
  this.height = 720;

  this.centerX = 640;
  this.centerY = 360;

  this.acceleration = 16.3333;

  this.startDrawX = Math.floor(Math.random() * (900 - 100 + 1)) + 200;
  this.startDrawY = 280;

  this.depth = 10000;

  this.increaseSize = function() {
    this.sizeEnemyX += 4;
    this.sizeEnemyY += 4;
  }

  this.isPlayerShooting = playerIsShooting;
}

Enemy.prototype.render = function() {
  this.ctx.drawImage(this.enemySprite, this.startDrawX - this.startDrawX/2, this.startDrawY - this.startDrawY/2, this.sizeEnemyX, this.sizeEnemyY);
  if (this.sizeEnemyX < 250) {
    //this.startDrawX -= 17;
  }
}

Enemy.prototype.update = function() {

  this.depth -= 100;

  if (this.depth < 8000 && this.depth > 6000) {
    this.increaseSize();
  } else if (this.depth < 6000 && this.depth > 4000) {
    this.increaseSize();
  } else if (this.depth < 4000 && this.depth > 2000) {
    this.increaseSize();
  } else if (this.depth < 2000 && this.depth > 0) {
    this.increaseSize();
  } 
}

Enemy.prototype.scrollRight = function() {
  this.startDrawX += this.acceleration * 6;
}

Enemy.prototype.scrollLeft = function() {
  this.startDrawX -= this.acceleration * 6;
}

Enemy.prototype.scrollUp = function() {
    this.startDrawY -= this.acceleration * 6;
}

Enemy.prototype.scrollDown = function() {
    this.startDrawY += this.acceleration * 6;
}





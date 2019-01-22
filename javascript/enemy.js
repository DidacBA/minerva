'use strict';

function Enemy(finalCanvas, x, y) {

  this.ctx = finalCanvas.getContext('2d');

  this.enemySprite = document.getElementById('enemy');

  this.sizeEnemyX = 50;
  this.sizeEnemyY = 50;

  this.width = 1280;
  this.height = 720;

  this.centerX = 640;
  this.centerY = 360;

  this.startDrawX = 600;
  this.startDrawY = 280;

  this.depth = 10000;

  this.increaseSize = function() {
    this.sizeEnemyX += 50;
    this.sizeEnemyY += 50;
  }
}

Enemy.prototype.render = function() {
  this.ctx.drawImage(this.enemySprite, this.startDrawX, this.startDrawY, this.sizeEnemyX, this.sizeEnemyY);
  if (this.sizeEnemyX < 250) {
    this.startDrawX -= 17;
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






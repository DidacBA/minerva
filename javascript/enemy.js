'use strict';

function Enemy(finalCanvas, x, y, playerIsShooting) {

  this.ctx = finalCanvas.getContext('2d');

  this.enemySprite = document.getElementById('enemy');

  this.sizeEnemyX = 10;
  this.sizeEnemyY = 50;

  this.width = 1280;
  this.height = 720;

  this.centerX = 640;
  this.centerY = 360;

  this.acceleration = 16.3333;

  this.startDrawX = Math.floor(Math.random() * (1100 - 0 + 1)) + 50;
  this.startDrawY = Math.floor(Math.random()* (600 - 0 + 1)) + 50;

  this.depth = 10000;

  this.increaseSize = function() {
    this.sizeEnemyX += 1;
    this.sizeEnemyY += 4;
  }

  this.isPlayerShooting = playerIsShooting;

  this.isDead = false;

  this.isAttacking = false;

  this.attackTimeout = setInterval(function() {
    this.isAttacking = true;
  }.bind(this), 3000);
}

Enemy.prototype.render = function() {

  var gradient = this.ctx.createRadialGradient(this.startDrawX,this.startDrawY,(this.sizeEnemyX > 20) ? this.sizeEnemyX - 20 : this.sizeEnemyX, this.startDrawY,this.startDrawY, 1);
  gradient.addColorStop(0, '#966FD6');
  gradient.addColorStop(.9, 'white');
  gradient.addColorStop(1, '#BF94E4');

  this.ctx.beginPath();
  this.ctx.arc(this.startDrawX, this.startDrawY, this.sizeEnemyX, 0, 2 * Math.PI, false);
  this.ctx.fillStyle = gradient;
  this.ctx.fill();
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

  if (this.isAttacking) {
    this.ctx.globalAlpha = 0.3;
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(0, 0, 1280, 720);
    this.ctx.globalAlpha = 1;
  }
}

Enemy.prototype.killEnemy = function() {
  if (this.startDrawX > 600 && this.startDrawX < 700 && this.startDrawY > 300 && this.startDrawY < 400) {
      this.isDead = true;
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





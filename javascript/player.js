'use strict';

function Player(finalCanvas) {
  this.ctx = finalCanvas.getContext('2d');
  this.width = finalCanvas.width;
  this.height = finalCanvas.height;

  this.maxSpeed = 5;
  this.acceleration = 3.333;
  this.playerVelocity = 10;

  this.x = 580;

  this.y = 200;

  this.playerSprite = document.getElementById('character');

}

Player.prototype.render = function() {
  this.ctx.drawImage(this.playerSprite, this.x, this.y, 172, 312);
}

Player.prototype.moveLeft = function() {
  this.x -= this.acceleration * 16.3333;
}

Player.prototype.moveRight = function() {
  this.x += this.acceleration * 16.3333;
}

Player.prototype.moveUp = function() {
  this.y -= this.acceleration * 16.3333;
}

Player.prototype.moveDown = function() {
  this.y += this.acceleration * 16.3333;
}
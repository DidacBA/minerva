'use strict';

function Player(finalCanvas) {
  this.ctx = finalCanvas.getContext('2d');
  this.width = finalCanvas.width;
  this.height = finalCanvas.height;

  this.maxSpeed = 5;
  this.acceleration = 2.333;
  this.playerVelocity = 32.6666;
  this

  this.x = 580;

  this.y = 200;

  this.playerSprite = document.getElementById('character');

}

Player.prototype.render = function() {
  this.ctx.drawImage(this.playerSprite, this.x, this.y, 86, 156);
}

Player.prototype.moveLeft = function() {
  if (this.x > 50) { 
    this.x -= this.acceleration * this.playerVelocity; 
  }
}

Player.prototype.moveRight = function() {
  if (this.x < 1060) {
    this.x += this.acceleration * this.playerVelocity;
  }
}

Player.prototype.moveUp = function() {
  if (this.y > 10) {
    this.y -= this.acceleration * this.playerVelocity;
  }
}

Player.prototype.moveDown = function() {
  if (this.y < 500) {
    this.y += this.acceleration * this.playerVelocity;
  }
}
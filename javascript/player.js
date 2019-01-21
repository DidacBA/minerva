'use strict';

function Player(finalCanvas) {
  this.ctx = finalCanvas.getContext('2d');
  this.width = finalCanvas.width;
  this.height = finalCanvas.height;

  this.maxSpeed = 5;
  this.acceleration = 2.333;
  this.playerVelocity = 10;

  this.x = 580;

  this.y = 200;

  this.playerSprite = document.getElementById('character');

}

Player.prototype.render = function() {
  this.ctx.drawImage(this.playerSprite, this.x, this.y, 172, 312);
}

Player.prototype.moveLeft = function() {
  if (this.x > 50) { 
    this.x -= this.acceleration * 16.3333; 
  }
}

Player.prototype.moveRight = function() {
  if (this.x < 1060) {
    this.x += this.acceleration * 16.3333;
  }
}

Player.prototype.moveUp = function() {
  if (this.y > 50) {
    this.y -= this.acceleration * 16.3333;
  }
}

Player.prototype.moveDown = function() {
  if (this.y < 400) {
    this.y += this.acceleration * 16.3333;
  }
}
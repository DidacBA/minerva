'use strict';

function Player(finalCanvas) {
  this.ctx = finalCanvas.getContext('2d');
  this.width = finalCanvas.width;
  this.height = finalCanvas.height;

  this.speed = 5;
  this.acceleration = 2;

  this.x = 580;

  this.playerSprite = document.getElementById('character');

}

Player.prototype.render = function() {
  this.ctx.drawImage(this.playerSprite, this.x, 200, 172, 312);
}

Player.prototype.moveLeft = function() {
  this.x -= 5;
}

Player.prototype.moveRight = function() {
  this.x += 5;
}
'use strict';

function Player(finalCanvas) {
  this.ctx = finalCanvas.getContext('2d');
  this.width = finalCanvas.width;
  this.height = finalCanvas.height;

  this.maxSpeed = 5;
  this.acceleration = 2.333;
  this.playerVelocity = 32.6666;

  this.x = 580;

  this.y = 200;

  this.playerSprite = document.getElementById('character');
  this.cockpitSprite = document.getElementById('cockpit');
  this.flash = document.getElementById('flash');

  this.health = 600;
  this.isPlayerDead = false;

  this.lowHealthSound = new Audio("music/135613__danielnieto7__alert.wav");
  if (this.health < 250) {
    lowHealthSound.play();
  } else if (this.health <= 0) {
    lowHealthSound.loop = false;
  }
}

Player.prototype.render = function() {

  this.ctx.drawImage(this.cockpitSprite, 0, 0, 1280, 720);

  this.ctx.globalAlpha = 0.7;
  this.ctx.fillStyle = 'yellow';
  this.ctx.fillRect(638, 322, 4, 30); //345
  this.ctx.fillRect(638, 370, 4, 30); 
  this.ctx.fillRect(600, 357, 30, 4); //357
  this.ctx.fillRect(650, 357, 30, 4);
  this.ctx.beginPath();
  this.ctx.arc(640, 360, 20, 0, 2 * Math.PI, false);
  this.ctx.lineWidth = 4;
  this.ctx.strokeStyle = 'yellow';
  this.ctx.stroke();
  this.ctx.globalAlpha = 1;

}

Player.prototype.shoot = function() {

  this.ctx.beginPath();
  this.ctx.arc(640, 360, 60, 0, 2 * Math.PI, false);
  this.ctx.lineWidth = 4;
  this.ctx.strokeStyle = 'red';
  this.ctx.stroke();

  this.ctx.lineWidth = 10;

  this.ctx.drawImage(this.flash, 320, 60);
  this.ctx.drawImage(this.flash, -335, 70);
}

Player.prototype.loseHealth = function() {
  if (this.health > 0) {
    this.health -= 1;
  } else {
    this.isPlayerDead = true;
  }
}










//
//Player.prototype.render = function() {
//  this.ctx.drawImage(this.playerSprite, this.x, this.y, 86, 156);
//}
//
//Player.prototype.moveLeft = function() {
//  if (this.x > 50) { 
//    this.x -= this.acceleration * this.playerVelocity; 
//  }
//}
//
//Player.prototype.moveRight = function() {
//  if (this.x < 1060) {
//    this.x += this.acceleration * this.playerVelocity;
//  }
//}
//
//Player.prototype.moveUp = function() {
//  if (this.y > 10) {
//    this.y -= this.acceleration * this.playerVelocity;
//  }
//}
//
//Player.prototype.moveDown = function() {
//  if (this.y < 500) {
//    this.y += this.acceleration * this.playerVelocity;
//  }
//}